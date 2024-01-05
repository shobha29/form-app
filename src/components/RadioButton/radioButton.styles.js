import {StyleSheet} from 'react-native';
import {colors} from '../../utils/colors';
import {
  horizontalScale,
  moderateScale,
  normalizeFont,
  verticalScale,
} from '../../utils/dimensions';

const styles = StyleSheet.create({
  radioContainer: {
    marginBottom: verticalScale(20),
  },
  label: {
    left: horizontalScale(14),
    paddingHorizontal: horizontalScale(6),
    marginBottom: verticalScale(10),
  },
  labelText: {
    color: colors.neutral60,
  },
  redText: {
    color: colors.red,
  },
  radioItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: verticalScale(4),
    marginLeft: horizontalScale(4),
  },
  radioCircle: {
    width: moderateScale(16),
    height: moderateScale(16),
    borderRadius: moderateScale(8),
    borderColor: colors.brightGrey,
    borderWidth: moderateScale(2),
    marginRight: horizontalScale(10),
    alignItems: 'center',
    justifyContent: 'center',
  },
  selectedRadioCirle: {
    borderColor: colors.blue,
  },
  innerCircle: {
    width: moderateScale(8),
    height: moderateScale(8),
    borderRadius: moderateScale(4),
    backgroundColor: colors.blue,
  },
});

export default styles;
