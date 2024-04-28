import { EventSubscription, useDevToolsPluginClient } from 'expo/devtools';
import React, { useEffect } from 'react';
import { parse } from 'flatted';
import { Typography } from '../ui/typography';

export default function ReactQuery() {
  const client = useDevToolsPluginClient('rapid-debugger');

  // todo move this in the correct file
  useEffect(() => {
    const subscriptions: EventSubscription[] = [];

    subscriptions.push(
      client?.addMessageListener('queries', (event) => {
        console.log('queries', event);
      })
    );

    subscriptions.push(
      client?.addMessageListener('queryCacheEvent', (event) => {
        const cacheEvent = parse(event.cacheEvent);
        const {
          type,
          query: serializedQuery,
          query: { queryHash },
        } = cacheEvent;

        if (!type) {
          return;
        }

        const query = serializedQuery;

        console.log('cache event ', cacheEvent);

        switch (type) {
          case 'added':
            console.log('query added', query);
            break;
          case 'removed':
            console.log('query removed', queryHash);
            break;
          case 'updated':
          case 'observerAdded':
          case 'observerRemoved':
          case 'observerResultsUpdated':
          case 'observerOptionsUpdated':
            console.log('other', query, queryHash);
            break;
          default:
            break;
        }
      })
    );

    return () => {
      for (const subscription of subscriptions) {
        subscription?.remove();
      }
    };
  }, [client]);
  return (
    <div>
      <Typography> React Query Component</Typography>
    </div>
  );
}
