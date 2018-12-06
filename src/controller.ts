import * as moment from "moment"
import app from './app'


interface Scope extends ng.IScope {
    vm: any
}

const SELF = 'mainCtr'
const inject: any = ['$scope']
function controller($scope: Scope) {
    const vm = {
        spa: window.spa,
        text: 'lxing',
        now: moment().format(),
    }
    $scope.vm = vm
}

app.controller(SELF, inject.concat([controller]))

export default SELF
