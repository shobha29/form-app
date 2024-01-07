import {StyleSheet} from 'react-native';
import {colors} from '../../utils/colors';
import {
  horizontalScale,
  moderateScale,
  normalizeFont,
  verticalScale,
} from '../../utils/dimensions';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
    paddingHorizontal: horizontalScale(16),
  },
  formHeader: {
    fontSize: normalizeFont(24),
    fontWeight: 'bold',
    textAlign: 'center',
    margin: moderateScale(20),
    color: colors.black,
  },
  addTaskBtn: {
    alignItems: 'center',
    marginVertical: verticalScale(10),
  },
  disableBtn: {
    backgroundColor: colors.neutral60,
  },
  addBtnText: {
    backgroundColor: colors.blue,
    color: colors.white,
    paddingHorizontal: horizontalScale(10),
    paddingVertical: verticalScale(4),
    borderRadius: moderateScale(4),
    fontSize: normalizeFont(16),
    fontWeight: '700',
  },
});

export default styles;
