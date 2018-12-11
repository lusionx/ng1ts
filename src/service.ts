import { app } from './all'

export class mySrv {
    constructor(protected $log: ng.ILogService) {
    }
    test() {
        this.$log.info('mySrv')
    }
}

app.service(mySrv.name, ['$log', mySrv])
export const mySrvN = mySrv.name
