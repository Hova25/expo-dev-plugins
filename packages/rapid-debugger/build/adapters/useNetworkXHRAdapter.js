import { useEffect } from 'react';
import InterceptedXHR, { originalXHR } from '../models/InterceptedXHR';
export function useNetworkXHRAdapter(client) {
    const originalOpenXHR = XMLHttpRequest.prototype.open;
    // const originalOnReadyStateChangeXHR = XMLHttpRequest.prototype.onreadystatechange;
    useEffect(() => {
        async function setup() {
            console.log('lkdlkdld');
            XMLHttpRequest.prototype = new InterceptedXHR();
            // XMLHttpRequest.prototype.open = function (method, url) {
            //   console.log('test xhrrr', method, url);
            //   // this.onreadystatechange = function(e) {
            //   //   console.log(this.status, e);
            //   // };
            //   // return open.apply(this, arguments);
            // };
            // XMLHttpRequest.prototype.onreadystatechange = function (ev) {
            //   console.log('tesst', this.readyState);
            // };
        }
        async function teardown() {
            // XMLHttpRequest.prototype.open = originalOpenXHR;
            // XMLHttpRequest.prototype.onreadystatechange = originalOnReadyStateChangeXHR;
            XMLHttpRequest.prototype = new originalXHR();
        }
        setup();
        return () => {
            teardown();
        };
    }, [client]);
}
//# sourceMappingURL=useNetworkXHRAdapter.js.map