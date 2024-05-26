import { DevToolsPluginClient } from 'expo/devtools';
import { useEffect } from 'react';

export function useNetworkXHRAdapter(client: DevToolsPluginClient | null) {
  const xhrOpenOriginal = XMLHttpRequest.prototype.open;
  const xhrSendOriginal = XMLHttpRequest.prototype.send;

  // const originalOnReadyStateChangeXHR = XMLHttpRequest.prototype.onreadystatechange;
  useEffect(() => {
    async function setup() {
      XMLHttpRequest.prototype.send = function (...args) {
        this.onreadystatechange = function () {
          console.log('state changes', this.readyState.toString(), this.responseType);
          if (this.readyState === this.DONE) {
            console.log('test', this.responseType);
            if (this.responseType === 'blob') {
              console.log('ldkdlkd');
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
