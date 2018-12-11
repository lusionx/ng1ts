import { app } from '../all'


export interface IStorageServ {
    get(k: string): string | null
    set(k: string, v: string): string
    drop(k: string): void
}


class localStorage implements IStorageServ {
    protected storage: Storage
    constructor(public $window: ng.IWindowService) {
        this.storage = $window.localStorage
    }
    get(k: string) {
        return this.storage.getItem(k)
    }
    set(k: string, v: string) {
        this.storage.setItem(k, v)
        return v
    }
    drop(k: string) {
        this.storage.removeItem(k)
    }
}
localStorage.$inject = ['$window']
app.service(localStorage.name, localStorage)
export const localStorageN = localStorage.name


class sessionStorage implements IStorageServ {
    protected storage: Storage
    constructor(public $window: ng.IWindowService) {
        this.storage = $window.sessionStorage
    }
    get(k: string) {
        return this.storage.getItem(k)
    }
    set(k: string, v: string) {
        this.storage.setItem(k, v)
        return v
    }
    drop(k: string) {
        this.storage.removeItem(k)
    }
}
sessionStorage.$inject = ['$window']
app.service(sessionStorage.name, sessionStorage)
export const sessionStorageN = sessionStorage.name
