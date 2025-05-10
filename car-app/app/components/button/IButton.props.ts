import {TextStyle, ViewStyle} from 'react-native';

export interface IButtonProps {
  onPress: (e:any) => void;
  text: string;
  buttonStyles?: ViewStyle;
  textStyles?: TextStyle;
}
