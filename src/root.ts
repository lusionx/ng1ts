import { app } from './all'

// 通过import来执行注册
import * as Router from './router'
import * as Controller from './controller'


export const name = app.run([() => {
    const Root = {
        [app.name]: [Router.name, Controller.name]
    }
    console.log('run', JSON.stringify(Root))
}]).name
