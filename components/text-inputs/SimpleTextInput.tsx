import React, { FC } from 'react';
import { StyleSheet, TextInput, TextStyle, ViewStyle } from 'react-native';

interface SimpleTextInputProps {
  value: string;
  onChangeText: (text: string) => void;
  placeholder?: string;
  style?: TextStyle;
}

const ShadowTextInput: FC<SimpleTextInputProps> = ({ value, onChangeText, placeholder = 'Nome do Evento', style }) => {
  return (
    <TextInput
      style={[styles.input, style]}
      placeholder={placeholder}
      value={value}
      onChangeText={onChangeText}
    />
  );
};

const styles = StyleSheet.create({
  input: {
    fontSize: 18,
    height: 60,
    width: 300,
    
  },
});

export default ShadowTextInput;