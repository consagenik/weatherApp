import {Dimensions, StyleSheet} from 'react-native';

// import {COLORS, FONT_FAMILY} from '../../../../constants';

const windowWidth = Dimensions.get('window').width;

export default StyleSheet.create({
  mainContainer: {
    position: 'relative',
    width: windowWidth,
    justifyContent: 'center',

    backgroundColor: '#FFFFFF',

    shadowColor: '#000000',
    shadowOffset: {width: 3, height: 1},
    shadowOpacity: 0.2,
    shadowRadius: 10,
    elevation: 24,
  },
  main: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 16,
  },
  topSpace: {padding: 10},
  emptySpace: {
    width: 18,
    paddingRight: 26,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 14,
    lineHeight: 22,
    letterSpacing: 6.5,
    color: '#000000',
    // fontFamily: FONT_FAMILY.BALOO,
    // fontFamily: FontFamily.MULLER,
  },
  internetConnectionWrapper: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    height: 40,
    // backgroundColor: COLORS.ORANGE,
    paddingHorizontal: 26,
    alignItems: 'center',
    justifyContent: 'center',
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  internetConnectionText: {
    // color: COLORS.WHITE,
    fontWeight: 'bold',
    fontSize: 16,
  },
  rightPart: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  navBarTitleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  navBarTitle: {
    marginLeft: 6,
    color: '#000000',
    fontSize: 18,
    fontWeight: 'bold',
    // fontFamily: FONT_FAMILY.SHARE_BOLD,
  },
});
