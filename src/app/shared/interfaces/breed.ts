export interface Breed {
  weight: {
    imperial: string;
    metric: string;
  };
  height: {
    imperial: string;
    metric: string;
  };
  id: number;
  name: string;
  bred_for: string;
  breed_group?: string;
  life_span: string;
  temperament: string;
  origin?: string;
  reference_image_id: string;
  country_code?: string;
  image: {
    id: string;
    width: number;
    height: number;
    url: string;
  };
}

export interface AddNewBreedFormField {
  name: string;
  inputLabel: string;
  placeholder: string;
  required: boolean;
}
