import React from 'react';
import { Text, View } from 'react-native';
import styles from "./ItemSimpleListStyle";

export default function ItemSimpleList({name, value, style}) {

  return (
    <View style={[style, styles.paddingLeft]}>
		<Text style={[styles.bodyBold, styles.capitalize]}>{name}: </Text>
		<Text style={[styles.body, styles.smallPaddingHorizontal]}>{value}</Text>
	</View>
  );
}