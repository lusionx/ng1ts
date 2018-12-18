import * as moment from "moment"
import { app, Scope } from '../all'
import { WeixinAccountDao } from '../service'


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


homeCtr.$inject = ['$scope', WeixinAccountDao.name]
function homeCtr($scope: Scope<Vm>, dao: WeixinAccountDao) {
    const vm: any = {}
    $scope.vm = vm
    dao.queryName('首').then(ls => {
        vm.list = ls
    })
}
app.controller(homeCtr.name, homeCtr)
export const home = homeCtr.name
