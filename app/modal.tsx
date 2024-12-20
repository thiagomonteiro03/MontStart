import { ThemedText } from '@/components/ThemedText'
import { ThemedView } from '@/components/ThemedView'
import React, { Component } from 'react'
import { Text, StyleSheet, View } from 'react-native'

export default class modal extends Component {
  render() {
    return (
      <ThemedView>
        <ThemedText> textInComponent </ThemedText>
      </ThemedView>
    )
  }
}

const styles = StyleSheet.create({})
