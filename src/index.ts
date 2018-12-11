import * as all from './all'

// 通过import来执行注册
import * as Router from './router'
import * as Service from './service'

const { app } = all

const inject: any = [Service.mySrvN, '$log', all.shareV]
class Run {
    constructor(srv: Service.mySrv, $log: ng.ILogService, share: all.Share) {
        const Root = {
            [app.name]: [Router.name]
        }
        console.log('run', JSON.stringify(Root))
        srv.test()
        $log.warn('run warn', share.ua)
    }
}
export const name = app.run(inject.concat([Run])).name
