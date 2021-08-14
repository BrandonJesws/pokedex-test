import React from 'react';
import { Text, View } from 'react-native';
import styles from "./TypePokemonStyle";
import color from '../../styles/color';
import { getColorTypePokemon } from '../../utilities/colorTypePokemon';

export default function TypePokemon({type}) {

  const backgroundColor = getColorTypePokemon({ type });

  return (
    <View style={[styles.containerType ,{ backgroundColor }]}>
    	<Text style={[styles.flex1, styles.capitalize, styles.whiteColor]}>{type}</Text>
    </View>
  );
}