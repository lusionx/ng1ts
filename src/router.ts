
import * as moment from "moment"
import app from './app'

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
        name: 'about',
        url: '/about',
        template: '<h3>Its the UI-Router hello world app!</h3>'
    }
    $stateProvider.state(about)
}
app.config(inject.concat([config]))

const SELF = 'Route'
export default SELF
