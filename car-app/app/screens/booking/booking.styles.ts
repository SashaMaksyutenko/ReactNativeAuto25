import {StyleSheet} from 'react-native';
import {colors} from '../../theme/colors';
import {scale} from '../../theme/scale';
import {typography} from '../../theme/typography';
export const createStyles = () =>
  StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: colors.background,
    },
    main: {
      flex: 1,
      paddingHorizontal: scale(18),
    },
    switchContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      backgroundColor: colors.white,
      paddingVertical: scale(12),
      paddingHorizontal: scale(12),
      elevation: 10,
      overflow: 'hidden',
      borderRadius: scale(10),
    },
    bookTitle: {
      fontFamily: typography.semiBold,
      color: colors.black,
    },
    bookText: {
      color: colors.placeholder,
    },
    inputContainer: {
      columnGap: scale(4),
    },
  });