import { app } from '../all'


export class mySrv {
    constructor(protected $log: ng.ILogService) {
    }
    test() {
        this.$log.log('mySrv')
    }
}
mySrv.$inject = ['$log']
app.service(mySrv.name, mySrv)
export const mySrvN = mySrv.name
