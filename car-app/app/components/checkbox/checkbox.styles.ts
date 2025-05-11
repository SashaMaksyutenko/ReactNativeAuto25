import {StyleSheet} from 'react-native';
import {colors} from '../../theme/colors';
import {scale} from '../../theme/scale';
import {FontSize} from '../../theme/font-size';

export const createStyles = () =>
  StyleSheet.create({
    container: {
      backgroundColor: colors.checkBoxBg,
      alignSelf: 'flex-start',
      borderRadius: scale(4),
      height: scale(22),
      width: scale(22),
      alignItems: 'center',
      justifyContent: 'center',
    },
  });
