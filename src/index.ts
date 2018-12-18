import { app, ShareV } from './all'
import './filter'
// 通过import来执行注册
import * as Router from './router'
import { StateService } from '@uirouter/angularjs'


run.$inject = ['$log', ShareV.name, '$state']
function run($log: ng.ILogService, share: ShareV, $state: StateService) {
    const Root = {
        [app.name]: [Router.name]
    }
    $log.info('run', JSON.stringify(Root))
    $log.warn('run warn', share.ua)
    $state.go('home')
}
app.run(run)
