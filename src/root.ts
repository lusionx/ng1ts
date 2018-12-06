import app from './app'

// 通过import来执行注册
import Router from './router'
import Controller from './controller'
const Root = {
    [app.name]: [Router, Controller]
}
export default Root

app.run([() => {
    console.log('run', JSON.stringify(Root))
}])
