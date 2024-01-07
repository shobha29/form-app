import {StyleSheet} from 'react-native';
import {colors} from '../../utils/colors';
import {
  horizontalScale,
  moderateScale,
  normalizeFont,
  verticalScale,
} from '../../utils/dimensions';

const styles = StyleSheet.create({
  fieldContainer: {
    borderColor: '#DFE0E3',
    borderWidth: moderateScale(1),
    borderRadius: moderateScale(8),
    paddingHorizontal: horizontalScale(8),
    marginBottom: verticalScale(18),
    maxHeight: verticalScale(80),
  },
  label: {
    position: 'absolute',
    top: -verticalScale(12),
    left: horizontalScale(14),
    paddingHorizontal: horizontalScale(6),
    backgroundColor: colors.white,
  },
  labelText: {
    textAlign: 'center',
    color: colors.neutral60,
  },
  redText: {
    color: colors.red,
  },
  multiLine: {
    height: verticalScale(100),
    maxHeight: verticalScale(100)
  },
  inputTextStyle: {
    color: colors.black,
  },
});

export default styles;
