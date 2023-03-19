import {Dimensions, StyleSheet} from 'react-native';

// import {COLORS} from '../../../constants';

const {width: windowWidth, height: windowHeight} = Dimensions.get('window');

export default StyleSheet.create({
  scrollView: {
    flexGrow: 1,
    // backgroundColor: COLORS.WHITE,
  },

  contentWrapper: {
    flex: 1,
    paddingTop: 24,
    paddingBottom: 112,
    paddingHorizontal: 24,
    width: windowWidth,
    minHeight: windowHeight - 80 - 30,
    // backgroundColor: COLORS.SCREEN_BG,
    alignItems: 'center',
    gap: 24,
  },

  productsList: {
    height: 233,
  },
  center: {
    justifyContent: 'center',
  },
});
