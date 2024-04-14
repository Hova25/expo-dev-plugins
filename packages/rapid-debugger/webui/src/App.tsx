import React, { useEffect } from 'react';
import Layout from './components/Layout';
import Console from './components/console/Console';
import Network from './components/network/Network';
import ReactQuery from './components/react-query/ReactQuery';

import { EventSubscription, useDevToolsPluginClient } from 'expo/devtools';
import { parse } from 'flatted';

function App() {
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
    <Layout>
      <div className={'test bg-test'}>heyyyy</div>
      <div>ooooo</div>
      <Console />
      <Network />
      <ReactQuery />
    </Layout>
  );
}

export default App;
