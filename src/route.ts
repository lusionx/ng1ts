
import * as moment from "moment"
import * as angular from 'angular'
import { StateProvider, Ng1StateDeclaration } from 'angular-ui-router'


const inject: any = ['$stateProvider']
function config($stateProvider: StateProvider) {
    const hello: Ng1StateDeclaration = {
        name: 'hello',
        url: '/hello',
        template: '<h3>hello world!</h3>'
    }
    $stateProvider.state(hello)
    const about: Ng1StateDeclaration = {
        name: 'hello',
        url: '/hello',
        template: '<h3>hello world!</h3>'
    }
    $stateProvider.state(about)
}
angular.module(window.spa).config(inject.concat([config]))

const SELF = 'Route'
export default SELF
