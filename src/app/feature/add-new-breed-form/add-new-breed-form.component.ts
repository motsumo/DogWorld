import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-add-new-breed-form',
  templateUrl: './add-new-breed-form.component.html',
  styleUrls: ['./add-new-breed-form.component.scss'],
})
export class AddNewBreedFormComponent {
  form: FormGroup = new FormGroup({
    name: new FormControl(''),
    bred_for: new FormControl(''),
    life_span: new FormControl(''),
    temperament: new FormControl(''),
    imageUrl: new FormControl(''),
    weight: new FormControl(''),
    height: new FormControl(''),
  });
}
