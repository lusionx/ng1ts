import { app } from './all'
import { StateProvider, Ng1StateDeclaration } from '@uirouter/angularjs'
import * as Controller from './controller'


Router.$inject = ['$stateProvider']
function Router($stateP: StateProvider) {
    $stateP.state('home', {
        url: '/home?q',
        controller: Controller.home,
        templateUrl: 'view/home.html',
    })

    const hello: Ng1StateDeclaration = {
        name: 'hello',
        url: '/hello',
        controller: Controller.main,
        template: `<h3>hello world! {{vm.text}} {{vm.now | mmt:"YYYY-MM-DD"}}</h3>`
    }
    $stateP.state(hello)
    const about: Ng1StateDeclaration = {
        name: 'about',
        url: '/about',
        controller: Controller.main,
        template: '<h3>Its the UI-Router hello world app! {{vm.text}} {{vm.now}}</h3>'
    }
    $stateP.state(about)
}
app.config(Router)
const SELF = Router.name
export { SELF as name }
