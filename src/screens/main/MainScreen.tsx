import React from 'react';
import {ScrollView, Text, View} from 'react-native';

import styles from './MainScreen.styles';

export default function MainScreen({navigation}: any) {
  return (
    // <SafeAreaView style={styles.safeArea}>
    <ScrollView
      contentContainerStyle={styles.scrollView}
      showsVerticalScrollIndicator={false}>
      <View style={styles.contentWrapper}>
        <Text style={{color: 'black'}}>Main</Text>
      </View>
    </ScrollView>
  );
}
