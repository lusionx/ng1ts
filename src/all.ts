import * as angular from 'angular'
export const app = angular.module(window.spa, ['ui.router'])


export class ShareV {
    ua: string = 'ua from win'
}
app.value(ShareV.name, new ShareV)


export const CONFIG = {
    root: '/api',
    headerTotal: 'X-Content-Record-Total',
    errorName: {
        http: 'errorHttp',
    }
}



export interface Scope<T> extends ng.IScope {
    vm: T
    fns: {
        [k: string]: Function
    }
}

export interface Resp400 {
    code?: string
    message?: string
}
