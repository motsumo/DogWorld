import { AddNewBreedFormField } from './interfaces/breed';

export const CONSTANTS = {
  API_URL: 'https://api.thedogapi.com/v1',
  API_KEY:
    'live_Dsy6wXDhJ2LHBRxs9o0ylJxiZ4UUjLX4vmNstu1ruwcEVLBhUUe5p44N79JNGEfa',
};

export const addNewBreedFormModel: Array<AddNewBreedFormField> = [
  {
    name: 'name',
    inputLabel: 'Breed name:',
    placeholder: 'Breed name:',
    required: true,
  },
  {
    inputLabel: 'Breed for:',
    placeholder: 'Breed for:',
    name: 'bred_for',
    required: true,
  },
  {
    inputLabel: 'Life span:',
    placeholder: 'Life span:',
    name: 'life_span',
    required: false,
  },
  {
    inputLabel: 'Temperament:',
    placeholder: 'Temperament:',
    name: 'temperament',
    required: false,
  },
  {
    inputLabel: 'Image URL:',
    placeholder: 'Image URL:',
    name: 'imageUrl',
    required: false,
  },
  {
    name: 'weight',
    inputLabel: 'Weight:',
    placeholder: 'Weight:',
    required: false,
  },
  {
    name: 'height',
    inputLabel: 'Height:',
    placeholder: 'Height:',
    required: false,
  },
];
