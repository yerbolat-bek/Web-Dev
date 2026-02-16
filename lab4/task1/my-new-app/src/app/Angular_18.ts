import { Component } from "@angular/core";
import { ReactiveFormsModule, FormControl, FormGroup } from "@angular/forms";
import { Validators } from "@angular/forms";

@Component({
    selector: 'app-root',
    template: `
        <form [formGroup] = "profileForm" (ngSubmit) = "handleSubmit()">
        <label>
            Name
            <input type="text" formControlName = "name"></input>
        </label>
        <label>
            Email
            <input type="email" formControlName = "email"></input>
        </label>
        <button type="submit" [disabled] = "!profileForm.valid">Submit</button>
        </form>
     <h2>Profile Form</h2>
    <p>Name: {{ profileForm.value.name }}</p>
    <p>Email: {{ profileForm.value.email }}</p>
    `,
    imports: [ReactiveFormsModule],
})
export class App{
    profileForm = new FormGroup({
        name: new FormControl(' ', Validators.required),
        email: new FormControl(' ', [Validators.required, Validators.email]),
    });

    handleSubmit(){
        alert(
            this.profileForm.value.name + ' | ' + this.profileForm.value.email
        );
    }
}