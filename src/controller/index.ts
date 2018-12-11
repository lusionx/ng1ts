import * as moment from "moment"
import { app, Scope } from '../all'


interface Vm {
    spa: string
    text: string
    now: string
}
const inject: any = ['$scope']
function mainCtr($scope: Scope<Vm>) {
    $scope.vm  = {
        spa: window.spa,
        text: 'lxing',
        now: moment().format(),
    }
}
app.controller(mainCtr.name, inject.concat([mainCtr]))
export const main = mainCtr.name
