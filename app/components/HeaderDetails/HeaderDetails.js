import React from 'react';
import { Text, View, Image } from 'react-native';
import TypePokemon from '../TypePokemon';
import styles from "./HeaderDetailsStyle";

export default function HeaderDetails({
  id,
  name ,
  sprit,
  types,
}) {

  return (
    <View style={[styles.flex1, styles.row]}>
		<View style={styles.containerSprit}>
			<Image style={styles.imageSprit} source={{uri: sprit}}></Image>
		</View>
		<View style={styles.containerInfo}>
			<View style={[styles.flexTwo, styles.flexEnd]}>
				<Text style={[styles.subtitleBold]}>{`# ${id}`}</Text>
			</View>
			<View style={styles.flex1}>
				<Text style={[ styles.bigBold, styles.whiteColor, styles.capitalize]}>{name}</Text>
			</View>
			<View style={[styles.flexTwo, styles.row]}>
				{
					types?.map(type => {
						return <TypePokemon key={type.type.name} type={type.type.name} testID="type-pokemon"/>
					})
				}
			</View>
		</View>
	</View>
  );
}