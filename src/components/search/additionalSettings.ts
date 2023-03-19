import * as Yup from 'yup';

export interface FormValues {
  searchText: string;
  categories: string[];
  minPrice: number;
  maxPrice: number;
}

export const initialValues: FormValues = {
  searchText: '',
  categories: [],
  minPrice: 0,
  maxPrice: 100,
};

export const validationSchema = () => Yup.object({});
