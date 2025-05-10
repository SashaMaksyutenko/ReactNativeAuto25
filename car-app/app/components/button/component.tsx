import {Text, Pressable} from 'react-native';
import React from 'react';
import {createStyles} from './button.styles';
import {IButtonProps} from './IButton.props';
const Button = ({text, textStyles, buttonStyles,onPress}: IButtonProps) => {
  const styles = createStyles();
  return (
    <Pressable onPress={onPress} style={[styles.container, buttonStyles]}>
      <Text style={[styles.text, textStyles]}>{text}</Text>
    </Pressable>
  );
};
export default Button;
