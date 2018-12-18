import { app } from '../all'


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
    constructor(protected $http: ng.IHttpService, protected $rootScope: ng.IRootScopeService, protected $q: ng.IQService) { }
    queryName(name: string, startIndex: number = 0, maxResults: number = 10) {
        const params = {
            startIndex, maxResults,
            nick_name_gte: name,
            sort: 'nick_name',
        }
        return this.$q<any>((res, rej) => {
            this.$http.get('/api/system/weixin_accounts', { params }).then((resp) => {
                res(resp.data)
            }, rej)
        })
    }
}
WeixinAccountDao.$inject = ['$http', '$rootScope', '$q']
app.service(WeixinAccountDao.name, WeixinAccountDao)
