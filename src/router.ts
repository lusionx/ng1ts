import { app } from './all'
import { StateProvider, Ng1StateDeclaration } from 'angular-ui-router'
import * as Controller from './controller'


const inject: any = ['$stateProvider']
function Router($stateProvider: StateProvider) {
    const hello: Ng1StateDeclaration = {
        name: 'hello',
        url: '/hello',
        controller: Controller.main,
        template: '<h3>hello world! {{vm.text}} {{vm.now}}</h3>'
    }
    $stateProvider.state(hello)
    const about: Ng1StateDeclaration = {
        name: 'about',
        url: '/about',
        controller: Controller.main,
        template: '<h3>Its the UI-Router hello world app! {{vm.text}} {{vm.now}}</h3>'
    }
    $stateProvider.state(about)
}

app.config(inject.concat([Router]))
const SELF = Router.name
export { SELF as name }
