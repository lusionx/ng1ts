import * as all from './all'

// 通过import来执行注册
import * as Router from './router'
import { StateService } from '@uirouter/angularjs'
import { mySrv } from './service'


const { app } = all

run.$inject = [mySrv.name, '$log', all.shareV, '$state']
function run(srv: mySrv, $log: ng.ILogService, share: all.Share, $state: StateService ) {
    const Root = {
        [app.name]: [Router.name]
    }
    $log.info('run', JSON.stringify(Root))
    srv.test()
    $log.warn('run warn', share.ua)
    $state.go('home')
}
app.run(run)
