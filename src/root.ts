import { app } from './all'

// 通过import来执行注册
import * as Router from './router'
import * as Controller from './controller'
import * as Service from './service'

const inject: any = [Service.mySrvN, '$log']
class Run {
    constructor(srv: Service.mySrv, $log: ng.ILogService) {
        const Root = {
            [app.name]: [Router.name, Controller.main]
        }
        console.log('run', JSON.stringify(Root))
        srv.test()
        $log.warn('run warn')
    }
}
export const name = app.run(inject.concat([Run])).name
