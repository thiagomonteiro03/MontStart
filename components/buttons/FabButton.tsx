import React, { Component } from 'react'
import { ThemedView } from '../../ThemedView'
import { StyleSheet, TouchableWithoutFeedback, ViewStyle } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

interface FabButtonProps {
    style?: ViewStyle,
    action: () => void;
  }

export default class FabButton extends Component<FabButtonProps> {
  render() {
    return (
      <ThemedView style={[styles.container, this.props.style]}>
        <TouchableWithoutFeedback onPress={this.props.action}>
            <ThemedView style={styles.button}>
                <MaterialIcons name="add" size={35} color="white" />
            </ThemedView>
        </TouchableWithoutFeedback>
      </ThemedView>
    )
  }
}

const styles = StyleSheet.create({
    container:{
        alignItems: 'center',
        position: 'absolute'
    },
    button: {
        position: 'absolute',
        width: 60,
        height: 60,
        backgroundColor: '#99a9fa',
        borderRadius: 60/2,
        justifyContent: 'center',
        alignItems: 'center',
    }
});
