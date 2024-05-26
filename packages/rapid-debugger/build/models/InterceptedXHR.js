export const originalXHR = window.XMLHttpRequest;
export default class InterceptedXHR extends originalXHR {
    requestDetails = {};
    constructor() {
        super();
        console.log('kjdkdjdk');
        this.addEventListener('readystatechange', () => {
            if (this.readyState === 4) {
                const responseDetails = {
                    url: this.responseURL,
                    method: this.requestDetails.method,
                    status: this.status,
                    statusText: this.statusText,
                    headers: this.getAllResponseHeaders(),
                    body: this.response,
                    timestamp: new Date().toISOString(),
                };
                console.log('tesst', { ...responseDetails, type: 'response' });
                // apiRequests.push({ ...responseDetails, type: 'response' });
            }
        });
    }
    open(method, url, async, user, password) {
        console.log('test xhrrr ododo', method, url);
        // this.requestDetails = {
        //   method,
        //   url,
        //   async,
        //   user,
        //   password,
        //   timestamp: new Date().toISOString(),
        // };
        //
        // console.log('tesst open', { ...this.requestDetails, type: 'request' });
        // apiRequests.push({ ...this.requestDetails, type: 'request' });
        super.open(method, url, !!async, user, password);
    }
    send(body) {
        this.requestDetails.body = body;
        // @ts-ignore
        super.send(body);
    }
}
//# sourceMappingURL=InterceptedXHR.js.map