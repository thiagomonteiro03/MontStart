import React, { FC } from 'react';
import { StyleSheet, TextInput, TextStyle } from 'react-native';

interface ShadowTextInputProps {
  value: string;
  onChangeText: (text: string) => void;
  placeholder?: string;
  style?: TextStyle;
}

const ShadowTextInput: FC<ShadowTextInputProps> = ({ value, onChangeText, placeholder = 'Nome do Evento', style }) => {
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
    fontWeight: 'bold',
    margin: 24,
    height: 60,
    width: 300,
    backgroundColor: '#E8E8E8',
    paddingHorizontal: 8,
    borderRadius: 8,
  },
});

export default ShadowTextInput;