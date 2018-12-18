import * as angular from 'angular'
export const app = angular.module(window.spa, ['ui.router'])


export interface Share {
    ua: string
}
export const shareV = 'shareV'
app.value(shareV, { ua: 'ua from win' } as Share)


export interface Scope<T> extends ng.IScope {
    vm: T
}
