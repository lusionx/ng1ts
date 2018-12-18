import * as all from './all'
import './filter'
// 通过import来执行注册
import * as Router from './router'
import { StateService } from '@uirouter/angularjs'


const { app } = all

run.$inject = ['$log', all.shareV, '$state']
function run($log: ng.ILogService, share: all.Share, $state: StateService ) {
    const Root = {
        [app.name]: [Router.name]
    }
    $log.info('run', JSON.stringify(Root))
    $log.warn('run warn', share.ua)
    $state.go('home')
}
app.run(run)
