import * as all from './all'

// 通过import来执行注册
import * as Router from './router'
import * as Service from './service'
import { IStorageServ, localStorageN } from './service/stroage'

const { app } = all

app.run([Service.mySrvN, '$log', all.shareV, (srv: Service.mySrv, $log: ng.ILogService, share: all.Share) => {
    const Root = {
        [app.name]: [Router.name]
    }
    console.log('run', JSON.stringify(Root))
    srv.test()
    $log.warn('run warn', share.ua)
}])

app.run([localStorageN, (storage: IStorageServ) => {
    storage.set('run', 'run' + Math.random())
}])
