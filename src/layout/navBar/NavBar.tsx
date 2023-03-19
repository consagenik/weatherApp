import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';

import styles from './NavBar.styles';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {INavBar} from '../../entities';
import {useAppSelector} from '../../state/hooks';

const titles: Record<string, string> = {
  cities: 'Cities',
  selectDay: 'Select day',
};

function NavBarTitle({title}: {title: string}) {
  return (
    <View style={styles.navBarTitleContainer}>
      <Text style={styles.navBarTitle}>{title}</Text>
    </View>
  );
}

export default function NavBar({
  titleKey = 'main',
  arrowBack = false,
  navigation,
}: INavBar) {
  const insets = useSafeAreaInsets();
  const {selectedCity, allUserCities} = useAppSelector(state => state.city);

  return (
    <View
      style={[
        styles.mainContainer,
        {paddingTop: insets.top, height: insets.top ? 45 + insets.top : 60},
      ]}>
      <View style={styles.main}>
        {/* Go back button */}
        {arrowBack ? (
          <TouchableOpacity
            style={styles.topSpace}
            onPress={() => navigation.goBack()}>
            {/* <RoundArrowLeftIcon /> */}
            <Text style={{color: 'black', fontSize: 20, fontWeight: 'bold'}}>
              {'<'}
            </Text>
          </TouchableOpacity>
        ) : (
          <View style={styles.topSpace} />
        )}

        <NavBarTitle
          title={
            titleKey === 'main'
              ? selectedCity?.name ||
                allUserCities?.[0].name ||
                'No selected city'
              : titles[titleKey]
          }
        />

        {titleKey === 'main' ? (
          <TouchableOpacity
            style={styles.topSpace}
            onPress={() => navigation.navigate('cities')}>
            {/* <RoundArrowLeftIcon /> */}
            <Text style={{color: 'black', fontSize: 20, fontWeight: 'bold'}}>
              {'+'}
            </Text>
          </TouchableOpacity>
        ) : (
          <View style={styles.topSpace} />
        )}
      </View>

      {/* {!internetConnection.internetConnectionExist && (
        <View style={styles.internetConnectionWrapper}>
          <Text style={styles.internetConnectionText}>
            Internet connection not exist
          </Text>
        </View>
      )} */}
    </View>
  );
}
