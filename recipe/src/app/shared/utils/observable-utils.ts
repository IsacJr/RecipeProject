import { Subscription } from 'rxjs';


export const unsubscribeObservables = ( subscriptionList:Subscription[] ) => {
    subscriptionList.forEach( s => {
        s.unsubscribe();
    });
}