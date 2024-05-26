export declare const originalXHR: {
    new (): XMLHttpRequest;
    prototype: XMLHttpRequest;
    readonly DONE: number;
    readonly HEADERS_RECEIVED: number;
    readonly LOADING: number;
    readonly OPENED: number;
    readonly UNSENT: number;
};
export default class InterceptedXHR extends originalXHR {
    private requestDetails;
    constructor();
    open(method: string, url: string, async?: boolean, user?: string | null, password?: string | null): void;
    send(body?: Document | BodyInit | null): void;
}
//# sourceMappingURL=InterceptedXHR.d.ts.map