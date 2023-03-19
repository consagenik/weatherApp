import React, {useEffect, useRef, useState} from 'react';
import {ScrollView, View} from 'react-native';
import {Api} from '../../api';
import {CitiesList, Search} from '../../components';
import {ICity} from '../../entities';
import {useDebounce} from '../../hooks/useDebounce';
import {useAppDispatch} from '../../state/hooks';
import { setSelectedCity } from '../../state/slices/citySlice';

import styles from './CitiesScreen.styles';

export default function CitiesScreen({navigation}: any) {
  const dispatch = useAppDispatch();

  const [searchParams, setSearchParams] = useState<string>('');
  const [citiesFiltered, setCitiesFiltered] = useState<boolean>(false);

  const searchedCityRef = useRef<ICity>();

  const debouncedSearchParams = useDebounce(searchParams, 500);

  useEffect(() => {
    if (searchParams && debouncedSearchParams) {
      searchCities(debouncedSearchParams);
    } else {
      searchedCityRef.current = undefined;
      setCitiesFiltered(!citiesFiltered);
    }
  }, [debouncedSearchParams]);

  async function searchCities(searchParams: string) {
    const res = await Api.searchCities(searchParams);

    if (res.statusCode >= 200 && res.statusCode < 300) {
      searchedCityRef.current = res.data;
    } else {
      searchedCityRef.current = undefined;
    }
    setCitiesFiltered(!citiesFiltered);
  }

  function handleSelectCity(city: ICity) {
    dispatch(setSelectedCity(city));
    navigation.navigate('main');
  }

  return (
    // <SafeAreaView style={styles.safeArea}>
    <ScrollView
      contentContainerStyle={styles.scrollView}
      showsVerticalScrollIndicator={false}>
      <View style={styles.contentWrapper}>
        <Search handleChange={setSearchParams} />
        <CitiesList
          searchedCity={searchedCityRef.current}
          clearSearch={() => setSearchParams('')}
          handleSelectCity={handleSelectCity}
        />
      </View>
    </ScrollView>
  );
}
