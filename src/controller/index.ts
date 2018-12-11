import * as moment from "moment"
import { app, Scope } from '../all'


interface Vm {
    spa: string
    text: string
    now: string
}
function mainCtr($scope: Scope<Vm>) {
    $scope.vm = {
        spa: window.spa,
        text: 'lxing',
        now: moment().format(),
    }
}
mainCtr.$inject = ['$scope']
app.controller(mainCtr.name, mainCtr)
export const main = mainCtr.name
