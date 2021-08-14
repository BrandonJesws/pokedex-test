import React from 'react';
import { Text, View } from 'react-native';
import ProgressLine from '../ProgressLine';
import styles from "./ItemStatListStyles";

export default function ItemStatList({name, progress, stat}) {

  return (
    <View style={[styles.flex1, styles.row, styles.paddingLeft]}>
		<View style={{ flex: 3 }}>
			<Text style={[styles.bodyBold, styles.capitalize]}>{name}</Text>
		</View>
		<View style={[styles.contentCenter,{ flex: 4 }]}>
			<ProgressLine progress={progress}/>
		</View>
		<View style={[styles.flex1, styles.itemsFlexEnd]}>
			<Text>{stat}</Text>
		</View>
	</View>
  );
}