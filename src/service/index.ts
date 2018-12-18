import { app, CONFIG, Resp400 } from '../all'
import { h5Account, ListData } from '../model'


export class mySrv {
    constructor(protected $log: ng.ILogService) {
    }
    test() {
        this.$log.log('mySrv', 'test')
    }
}
mySrv.$inject = ['$log']
app.service(mySrv.name, mySrv)


export class WeixinAccountDao {
    constructor(
        protected $http: ng.IHttpService, protected $q: ng.IQService,
        protected $rootScope: ng.IRootScopeService, protected $log: ng.ILogService, ) { }
    queryName(name: string, startIndex: number = 0, maxResults: number = 10) {
        const params = {
            startIndex, maxResults,
            nick_name_gte: name,
            sort: 'nick_name',
        }
        return this.$q<ListData<h5Account>>((res) => {
            this.$http.get<h5Account[]>(CONFIG.root + '/system/weixin_accounts', { params }).then((resp) => {
                res({ total: +resp.headers(CONFIG.headerTotal), hits: resp.data })
            }, (resp: ng.IHttpResponse<Resp400>) => {
                this.$log.warn(resp)
                this.$rootScope.$broadcast(CONFIG.errorName.http, resp)
            })
        })
    }
}
WeixinAccountDao.$inject = ['$http', '$q', '$rootScope', '$log']
app.service(WeixinAccountDao.name, WeixinAccountDao)
