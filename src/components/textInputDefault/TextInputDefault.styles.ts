import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  fieldAndErrorContainer: {
    flex: 1,
  },

  inputFieldContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    height: 44,
    paddingHorizontal: 16,
  },
  disabledFieldContainer: {
    backgroundColor: '#eee',
    borderColor: '#eee',
  },

  iconWrapper: {
    marginRight: 8,
  },

  fieldWrapper: {
    flex: 1,
  },
  field: {
    color: '#000',
  },
});
