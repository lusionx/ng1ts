import * as moment from "moment"
import { app } from './all'


interface Scope extends ng.IScope {
    vm: any
}

const inject: any = ['$scope']
function mainCtr($scope: Scope) {
    const vm = {
        spa: window.spa,
        text: 'lxing',
        now: moment().format(),
    }
    $scope.vm = vm
}

const SELF = mainCtr.name
app.controller(SELF, inject.concat([mainCtr]))
export { SELF as name}
