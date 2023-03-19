import React from 'react';
import {View} from 'react-native';
import {TextInputDefault} from '..';

import styles from './Search.styles';

interface SearchProps {
  handleChange: (text: string) => void;
}

export default function Search({handleChange}: SearchProps) {
  return (
    <View style={styles.mainContainer}>
      <View style={styles.mainLine}>
        <TextInputDefault
          placeholder="Search..."
          placeholderTextColor={'#C4C4C4'}
          autoCapitalize="none"
          // autoCompleteType="email"
          keyboardType="default"
          keyboardAppearance="dark"
          returnKeyType="search"
          returnKeyLabel="search"
          onChangeText={text => handleChange(text)}
        />
      </View>
    </View>
  );
}
