import { app, ShareV } from './all'
import './filter'
import './directive'
// 通过import来执行注册
import * as Router from './router'
import { StateService } from '@uirouter/angularjs'


run.$inject = ['$log', ShareV.name, '$state']
function run($log: ng.ILogService, share: ShareV, $state: StateService) {
    $log.info('run', JSON.stringify({ [app.name]: [Router.name] }))
    $log.warn('run warn', share.ua)
    $state.go('home')
}
app.run(run)
