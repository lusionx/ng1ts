import * as angular from 'angular'
import UIRouter from 'angular-ui-router'

const app = angular.module(window.spa, [UIRouter])
app.run([() => {
    console.log('app.run', window.spa)
}])

export default app.name
