import { app, ShareV, RootScope, ngName } from './all'
import './filter'
import './directive'
// 通过import来执行注册
import * as Router from './router'
import { StateService } from '@uirouter/angularjs'

const { $state } = ngName.uiRouter
run.$inject = [ngName.$log, ShareV.name, $state, ngName.$rootScope, ngName.$location]
function run($log: ng.ILogService, share: ShareV, $state: StateService, $rootScope: RootScope, $location: ng.ILocationService) {
    $rootScope.share = share
    $log.info('run', JSON.stringify({ [app.name]: [Router.name] }))
    $log.warn('run warn', share.ua)
    if ($location.path().length <= 1) $state.go('home')
}
app.run(run)
