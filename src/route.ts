

const app = angular.module(window.spa, [])
console.log(window.name)

interface Scope extends ng.IScope {
    vm: any
}

app.controller('main', ['$scope', ($scope: Scope) => {
    const vm = {
        spa: window.spa,
        text: 'lxing',
    }
    $scope.vm = vm
}])
