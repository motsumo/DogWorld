import { Component, Input } from '@angular/core';
import { Breed } from 'src/app/shared/interfaces/breed';

@Component({
  selector: 'app-breed-info',
  templateUrl: './breed-info.component.html',
  styleUrls: ['./breed-info.component.scss'],
})
export class BreedInfoComponent {
  @Input() breed: Breed = {
    weight: {
      imperial: '',
      metric: '',
    },
    height: {
      imperial: '',
      metric: '',
    },
    id: 0,
    name: '',
    bred_for: '',
    breed_group: '',
    life_span: '',
    temperament: '',
    origin: '',
    reference_image_id: '',
    image: {
      id: '',
      width: 0,
      height: 0,
      url: '',
    },
  };
}
