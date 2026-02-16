import { Component, inject } from "@angular/core";
import { CarService } from "./car.service";

@Component({
    selector: '',
    template: `<p>Car Listing: {{ dsipaly }}</p>`
})
export class App{
    carService = inject(CarService);

    display = this.carService.getCars().join(' ⭐️ ');
}