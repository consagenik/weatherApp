import {Dimensions, StyleSheet} from 'react-native';

const windowWidth = Dimensions.get('window').width;

export default StyleSheet.create({
  mainContainer: {
    width: windowWidth - 48,
    // backgroundColor: COLORS.WHITE,
    backgroundColor: 'white',
    borderRadius: 8,
    overflow: 'hidden',

    shadowColor: 'black',
    shadowOffset: {width: 3, height: 1},
    shadowOpacity: 0.2,
    shadowRadius: 10,
    elevation: 24,
  },

  mainLine: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingRight: 16,
  },

  buttonsWrapper: {
    height: 44,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 20,
  },
});
