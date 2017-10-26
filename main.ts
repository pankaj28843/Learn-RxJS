import {Observable} from "rxjs/Observable";
import "rxjs/add/operator/map";
import "rxjs/add/operator/filter";

let numbers = [1, 2, 3, 45];
let source = Observable.create(observer => {
    let index = 0;
    let produceValue = () => {
        observer.next(numbers[index++]);

        if (index < numbers.length) {
            setTimeout(produceValue, 200);
        } else {
            observer.complete();
        }
    }

    produceValue();
}).map(n => n * 2).filter(n => n > 4);

source.subscribe(
    value => console.log(`value: ${value}`),
    error => console.log(`error: ${error}`),
    () => console.log(`complete`)
);
