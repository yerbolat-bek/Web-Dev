import { Component } from "@angular/core";
import { DecimalPipe, DatePipe, CurrencyPipe } from "@angular/common";

@Component({
    selector: '',
    template: `
        <ul>
            <li>Number with "decimal" {{ num | number: '3.2-2'}}</li>
            <li>Date with "date" {{ num | date: 'medium '}}</li>
            <li>Cost with "currency" {{ num | currency}}</li>
        </ul>
    `,
    imports: [DecimalPipe, CurrencyPipe, DatePipe],
})
export class App{
    num = 103.1234;
    birthday = new Date(2023, 3, 2);
    cost = 4560.34;
}