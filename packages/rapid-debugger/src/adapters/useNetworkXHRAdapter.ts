import { DevToolsPluginClient } from 'expo/devtools';
import { useEffect } from 'react';

export function useNetworkXHRAdapter(client: DevToolsPluginClient | null) {
  const xhrOpenOriginal = XMLHttpRequest.prototype.open;
  const xhrSendOriginal = XMLHttpRequest.prototype.send;

  // const originalOnReadyStateChangeXHR = XMLHttpRequest.prototype.onreadystatechange;
  useEffect(() => {
    fetch('dkldk').then((res) => res.json());

    async function setup() {
      XMLHttpRequest.prototype.send = function (...args) {
        this.onreadystatechange = async function async() {
          if (this.readyState === this.DONE) {
            if (this.responseType === 'blob') {
              try {
                const response = new Response(this.response);

                const jsonBody = await response.json();
                console.log('oo tesssst', response.status, jsonBody);
              } catch (e) {
                console.error('errorrr', e.toString());
              }
            }
          }
        };
        xhrSendOriginal.apply(this, args);
      };
      XMLHttpRequest.prototype.open = function (...args) {
        const [method, url] = args;
        console.log('test xhrrr ddfdffdddd', method, url);

        xhrOpenOriginal.apply(this, args);
      };
    }

    async function teardown() {
      XMLHttpRequest.prototype.open = xhrOpenOriginal;
      XMLHttpRequest.prototype.send = xhrSendOriginal;
    }

    setup();
    return () => {
      teardown();
    };
  }, [client]);
}
