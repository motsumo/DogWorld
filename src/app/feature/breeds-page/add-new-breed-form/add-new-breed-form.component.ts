import {
  Component,
  EventEmitter,
  OnInit,
  Output,
  ViewChild,
} from '@angular/core';
import { NgForm } from '@angular/forms';
import { addNewBreedFormModel } from 'src/app/shared/constants';
import { AddNewBreedFormField } from 'src/app/shared/interfaces/breed';

@Component({
  selector: 'app-add-new-breed-form',
  templateUrl: './add-new-breed-form.component.html',
  styleUrls: ['./add-new-breed-form.component.scss'],
})
export class AddNewBreedFormComponent implements OnInit {
  @ViewChild('addNewBreedForm') form!: NgForm;
  @Output() closeModal = new EventEmitter();

  // eslint-disable-next-line @angular-eslint/no-empty-lifecycle-method, @typescript-eslint/no-empty-function
  ngOnInit(): void {
    console.log(this.form);
  }

  addNewBreedFormModel: Array<AddNewBreedFormField> = addNewBreedFormModel;

  onSubmit(addNewBreedForm: NgForm) {
    console.log(addNewBreedForm.value);
    this.closeModal.emit();
  }
}
