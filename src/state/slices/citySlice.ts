import {PayloadAction, createSlice} from '@reduxjs/toolkit';
import {ICity} from '../../entities';

export interface CityState {
  selectedCity: ICity | undefined;
  allUserCities: ICity[];
}

const initialState: CityState = {
  selectedCity: undefined,
  allUserCities: [],
};

export const citySlice = createSlice({
  name: 'city',
  initialState,
  reducers: {
    setSelectedCity: (state, action: PayloadAction<ICity>) => {
      state.selectedCity = action.payload;
    },
    setAllUserCities: (state, action: PayloadAction<ICity[]>) => {
      state.allUserCities = action.payload;
    },
  },
  extraReducers: () => {},
});

const {actions, reducer} = citySlice;
// Extract and export each action creator by name
export const {setSelectedCity, setAllUserCities} = actions;
// Export the reducer, either as a default or named export
export default reducer;
