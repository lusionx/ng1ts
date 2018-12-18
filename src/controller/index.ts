import * as moment from "moment"
import { app, Scope, CONFIG } from '../all'
import { WeixinAccountDao } from '../service'
import { StateService, StateParams } from "@uirouter/angularjs";


function mainCtr($scope: Scope<{ text: string, now: any }>) {
    $scope.vm = {
        text: 'lxing',
        now: moment(),
    }
}
mainCtr.$inject = ['$scope']
app.controller(mainCtr.name, mainCtr)
export const main = mainCtr.name


homeCtr.$inject = ['$scope', WeixinAccountDao.name, '$state', '$stateParams']
function homeCtr($scope: Scope<{ q: string, list?: any[] }>, dao: WeixinAccountDao, $state: StateService, $stateParams: StateParams) {
    $scope.vm = { q: $stateParams['q'] }
    if ($scope.vm.q) {
        dao.queryName($scope.vm.q, 5).then(data => {
            $scope.vm.list = data.hits
        })
    }
    $scope.fns = {
        search: () => {
            $state.go('home', { q: $scope.vm.q })
        }
    }
}
app.controller(homeCtr.name, homeCtr)
export const home = homeCtr.name
