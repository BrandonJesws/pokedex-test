import React from 'react';
import { Text, View, Image, TouchableOpacity } from 'react-native';
import TypePokemon from '../TypePokemon';
import styles from "./PokemonCardStyle";
import { getColorTypePokemonBackGround } from '../../utilities/colorTypePokemon';

export default function PokemonCard({
  id,
  name ,
  sprit,
  types,
  navigation
}) {

  const firstTypeName = types ? types[0]?.type?.name : 'normal';
  const backgroundColor = getColorTypePokemonBackGround({ type : firstTypeName });

  return (
    <TouchableOpacity
      style={[styles.card, styles.bigMarginTop, { backgroundColor }]}
      onPress={() => {
        navigation.navigate('Details', { idPokemon: id, name })
      }}
    >
      <View style={styles.infoCard}>
        <View style={styles.flex1}>
          <Text style={[styles.bodyBold, styles.blackColor]}>{`# ${id}`}</Text>
        </View>
        <View style={styles.flex1}>
          <Text style={[ styles.titleBold, styles.whiteColor, styles.capitalize]}>{name}</Text>
        </View>
        <View style={styles.typesContainer}>
          {
            types?.map(type => {
              return <TypePokemon key={type.type.name} type={type.type.name} />
            })
          }
        </View>
      </View>
      <View style={[styles.flex1, styles.itemsFlexEnd]}>
        <Image style={styles.imagePokemon} source={{uri: sprit}}></Image>
      </View>
    </TouchableOpacity>
  );
}