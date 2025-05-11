import {StyleSheet} from 'react-native';
import {colors} from '../../theme/colors';
import {scale} from '../../theme/scale';
import {FontSize} from '../../theme/font-size';
import {typography} from '../../theme/typography';

export const createStyles = () =>
  StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: colors.background,
      paddingHorizontal: scale(12),
    },
    carLogo: {
      height: scale(38),
      width: scale(38),
    },
    flexRow: {
      flexDirection: 'row',
      alignItems: 'center',
      columnGap: scale(12),
      paddingVertical: scale(12),
    },
    titleStyle: {
      fontSize: FontSize.FONT_24Px,
      color: colors.black,
    },
    textContainer: {
      paddingTop: scale(38),
      marginBottom: scale(12),
    },
    textStyle: {
      color: colors.black,
      fontSize: FontSize.FONT_26Px,
    },
    textRemember: {
      fontSize: FontSize.FONT_12Px,
      color: colors.placeholder,
      fontWeight: '500',
    },
    inputContainer: {
      rowGap: scale(6),
    },
    colG2: {
      columnGap: scale(2),
      justifyContent: 'space-between',
      flexDirection: 'row',
      alignItems: 'center',
      marginTop: scale(16),
    },
    forgotContainer: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      paddingVertical: scale(12),
      flex: 1,
    },
    outlineButton: {
      backgroundColor: colors.outlineButtonBg,
      borderWidth: 1,
      borderColor: colors.button,
    },
    outlineButtonText: {
      color: colors.black,
      fontWeight: '600',
    },
    buttonText: {
      fontWeight: '600',
    },
    buttonContainer: {
      marginTop: scale(12),
      rowGap: scale(14),
    },
    borderContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      columnGap: scale(12),
      marginTop: scale(18),
    },
    orText: {
      fontSize: FontSize.FONT_12Px,
      width: scale(15),
      color: colors.placeholder,
    },
    orBorder: {
      height: 1,
      flex: 1,
      backgroundColor: colors.border,
    },
    buttonStyle: {
      flexDirection: 'row',
      columnGap: scale(12),
    },
    iconButtonStyle: {
      backgroundColor: colors.outlineButtonBg,
      borderWidth: 1,
      borderColor: colors.button,
      flexDirection: 'row',
      columnGap: scale(8),
    },
    mt14: {
      marginTop: scale(14),
    },
    haveAccountContainer: {
      alignItems: 'center',
      marginTop: scale(28),
      paddingBottom: scale(28),
    },
    dontHaveText: {
      color: colors.placeholder,
      fontFamily: typography.regular,
    },
  });
