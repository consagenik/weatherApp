import React, {useEffect, useRef} from 'react';
import {FlatList, Text, TouchableOpacity, View} from 'react-native';
import {ICity} from '../../entities';
import {useAppDispatch, useAppSelector} from '../../state/hooks';
import {setAllUserCities} from '../../state/slices/citySlice';

import styles from './CitiesList.styles';

interface CitiesListProps {
  searchedCity: ICity | undefined;
  clearSearch: () => void;
  handleSelectCity: (city: ICity) => void;
}

function _renderItem(
  {item}: {item: ICity | undefined},
  addToSelectedCities: () => void,
  removeFromSelectedCities: (id: string) => void,
  handleSelectCity: (city: ICity) => void,
) {
  return (
    <View
      style={{
        width: 200,
        height: 80,
        padding: 16,
        borderRadius: 16,
        backgroundColor: '#eee',
        flexDirection: 'row',
        justifyContent: 'space-between',
      }}>
      {item?.name ? (
        <TouchableOpacity onPress={() => handleSelectCity(item)}>
          <Text style={{color: 'black'}}>{item.name}</Text>
        </TouchableOpacity>
      ) : (
        <Text style={{color: 'black'}}>Not exist</Text>
      )}

      {item && (
        <>
          {item.isSelected ? (
            <TouchableOpacity
              onPress={() => removeFromSelectedCities(item.id)}
              activeOpacity={0.6}>
              {/* <View style={[styles.actionButton, styles.removeButton]}>
            <TrashIcon color={COLORS.WHITE} />
          </View> */}
              <Text style={{color: 'black'}}>Remove</Text>
            </TouchableOpacity>
          ) : (
            <TouchableOpacity
              onPress={() => addToSelectedCities()}
              activeOpacity={0.6}>
              {/* <View style={[styles.actionButton, styles.addButton]}>
            <PlusIcon color={COLORS.WHITE} />
          </View> */}
              <Text style={{color: 'black'}}>Add</Text>
            </TouchableOpacity>
          )}
        </>
      )}
    </View>
  );
}

export default function CitiesList({
  searchedCity,
  clearSearch,
  handleSelectCity,
}: CitiesListProps) {
  const dispatch = useAppDispatch();

  const {allUserCities} = useAppSelector(state => state.city);

  const [listChanged, setListChanged] = React.useState(false);

  const citiesListRef = useRef<ICity[]>([]);

  useEffect(() => {
    if (searchedCity) {
      const userCity = allUserCities.find(city => city.id === searchedCity.id);
      citiesListRef.current = [userCity || searchedCity];
    } else {
      citiesListRef.current = allUserCities;
    }
    setListChanged(!listChanged);
  }, [searchedCity]);

  function addToSelectedCities() {
    const newCitiesList = [
      ...allUserCities,
      {...citiesListRef.current[0], isSelected: true},
    ];

    citiesListRef.current = newCitiesList;
    dispatch(setAllUserCities(newCitiesList));
    clearSearch();
    setListChanged(!listChanged);
  }

  function removeFromSelectedCities(id: string) {
    const newCitiesList = citiesListRef.current.filter(city => city.id !== id);

    citiesListRef.current = newCitiesList;
    dispatch(setAllUserCities(newCitiesList));
    setListChanged(!listChanged);
  }

  return (
    <View style={styles.mainContainer}>
      <FlatList
        data={citiesListRef.current}
        renderItem={({item}) =>
          _renderItem(
            {item},
            addToSelectedCities,
            removeFromSelectedCities,
            handleSelectCity,
          )
        }
        keyExtractor={item => item.id}
      />
    </View>
  );
}
