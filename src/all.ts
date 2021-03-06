import * as angular from 'angular'
export const app = angular.module(window.spa, ['ui.router'])


export class ShareV {
    ua: string = 'ua from win'
    bview = {
        tabbar: 'view/b-tabbar.html',
    }
}
app.value(ShareV.name, new ShareV)

export const CONFIG = {
    root: '/api',
    headerTotal: 'X-Content-Record-Total',
    errorName: {
        http: 'errorHttp',
    }
}

export const ngName = {
    $http: '$http',
    $location: '$location',
    $log: '$log',
    $q: '$q',
    $rootScope: '$rootScope',
    $scope: '$scope',
    uiRouter: {
        $state: '$state',
        $stateParams: '$stateParams',
        $stateProvider: '$stateProvider',
    },
}

export interface RootScope extends ng.IRootScopeService {
    /** set on app.run */
    share: ShareV
}

export interface Scope<T> extends ng.IScope, RootScope {
    vm: T
    fns: {
        [k: string]: Function
    }
}

export interface Resp400 {
    code?: string
    message?: string
}
