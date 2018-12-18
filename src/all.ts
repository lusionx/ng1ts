import * as angular from 'angular'
export const app = angular.module(window.spa, ['ui.router'])


export class ShareV {
    ua: string = 'ua from win'
}
app.value(ShareV.name, new ShareV)


export const CONFIG = {
    headerTotal: 'X-Content-Record-Total'
}


export interface Scope<T> extends ng.IScope {
    vm: T
}
