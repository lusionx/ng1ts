import { app } from './all'
import * as moment from 'moment'


app.filter('mmt', () => {
    return (input: any, fmt?: string) => {
        const tt = moment.isMoment(input) ? input : moment(input)
        return tt.format(fmt)
    }
})
