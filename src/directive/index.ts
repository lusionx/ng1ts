import { app } from '../all'
import * as weui from 'weui.js'

weuiSearchBar.$inject = ['$log']
function weuiSearchBar($log: ng.ILogService) {
    const directive: ng.IDirective = {
        restrict: 'A',
        link: (scope: ng.IScope, ele: JQLite, attrs: ng.IAttributes) => {
            weui.searchBar(ele)
        },
    }
    return directive
}
app.directive(weuiSearchBar.name, weuiSearchBar)
