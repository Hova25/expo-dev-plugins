import { useDevToolsPluginClient, type EventSubscription } from 'expo/devtools';
import { useEffect } from 'react';
import { parse } from 'flatted';
import { Pressable, Text } from 'react-native';
import tw from './utils/tailwind';
import Layout from './components/Layout';
import DevToolNotConnected from './components/info/DevToolNotConnected';
import Console from './components/console/Console';
import Network from './components/network/Network';
import ReactQuery from './components/react-query/ReactQuery';

export default function App() {
  const client = useDevToolsPluginClient('rapid-debugger');
  
  // useEffect(() => {
  //   const subscriptions: EventSubscription[] = [];
  //
  //   subscriptions.push(
  //     client?.addMessageListener('queries', (event) => {
  //       console.log("queries", event)
  //     })
  //   );
  //
  //   subscriptions.push(
  //     client?.addMessageListener('queryCacheEvent', (event) => {
  //       const cacheEvent = parse(event.cacheEvent);
  //       const {
  //         type,
  //         query: serializedQuery,
  //         query: { queryHash },
  //       } = cacheEvent;
  //
  //       if (!type) {
  //         return;
  //       }
  //
  //       const query = serializedQuery;
  //
  //       console.log("cache event ", cacheEvent)
  //
  //       switch (type) {
  //         case 'added':
  //           console.log("query added", query)
  //           break;
  //         case 'removed':
  //           console.log("query removed", queryHash)
  //           break;
  //         case 'updated':
  //         case 'observerAdded':
  //         case 'observerRemoved':
  //         case 'observerResultsUpdated':
  //         case 'observerOptionsUpdated':
  //           console.log("other", query, queryHash);
  //           break;
  //         default:
  //           break;
  //       }
  //     })
  //   );
  //
  //   return () => {
  //     for (const subscription of subscriptions) {
  //       subscription?.remove();
  //     }
  //   };
  // }, [client]);

  return (
    <Layout>
      <div>heyyyy</div>
      <div>ooooo</div>
      <Console />
      <Network />
      <ReactQuery />
    </Layout>
  );
}
