import {StyleSheet} from 'react-native';
import {colors} from '../../theme/colors';
import {scale} from '../../theme/scale';
import {FontSize} from '../../theme/font-size';
import {typography} from '../../theme/typography';
export const createStyles = () =>
  StyleSheet.create({
    card: {
      backgroundColor: colors.white,
      borderWidth: 1,
      borderColor: colors.border,
      borderRadius: scale(10),
    },
    person: {
      width: scale(32),
      height: scale(32),
    },
    reviewTitle: {
      fontSize: FontSize.FONT_14Px,
      color: colors.black,
      fontFamily: typography.semiBold,
    },
    frcg: {
      flexDirection: 'row',
      alignItems: 'center',
      columnGap: scale(10),
    },
  });