import React, { useEffect, useState } from 'react';
import { FlatList, Text, View, TextInput, ActivityIndicator } from 'react-native';
import { getPokemonsLimitOffset, getDetailsByUrl, getPokemonDetailsById } from '../../services/PokemonApiService';
import { normalizePokemonsInfo } from '../../utilities/normalize';
import PokemonCard from '../../components/PokemonCard';
import styles from './HomeScreenStyle';

export default function HomeScreen({ navigation }) {

  const [pokemonsData, setPokemonsData] = useState([]);
  const [pokemonData, setpokemonData] = useState(null);
  const [offset, setOffset] = useState(0);
  const [idPokemonSearch, setIdPokemonSearch] = useState('');
  const limit = 5;

  function changeIdSearch (numId) {
    if (numId) {
      const id = Math.abs(Math.trunc(numId)).toString();
      setIdPokemonSearch(id);
    } else {
      setIdPokemonSearch(null);
    }
  }

  const getPokemonsDetails = async (data) => {
    const pokemonsDetails = await Promise.all(data.map(async pokemon => {
      let pokemonDetails = await getDetailsByUrl({url: pokemon.url})
      return normalizePokemonsInfo({ data: pokemonDetails });
    }))
    setPokemonsData(pokemonsData.concat(pokemonsDetails));
  }

  /** Information on a set of pokemons is requested and then their details are requested. */
  async function fetchDataPokemons() {
    let response = await getPokemonsLimitOffset({ limit, offset });
    await getPokemonsDetails(response.results);
  }

  /** Information is requested for a single pokemon */
  async function fetchDataPokemon() {
		let response = await getPokemonDetailsById({ id: idPokemonSearch });
		const dataNormalize = normalizePokemonsInfo({ data: response });
    setpokemonData([dataNormalize]);
	};

  useEffect(() => {
    fetchDataPokemons();
  }, [offset]);

  useEffect(() => {
    if(idPokemonSearch){
      fetchDataPokemon();
    } else {
      setpokemonData(null);
    }
  }, [idPokemonSearch]);

  return (
    <View style={styles.flex1}>
      <View style={[styles.flex1, styles.smallMarginTop, styles.marginHorizontal]}>
        <View style={styles.smallMarginBottom}>
          <Text style={styles.subtitleBold }>Select any pokemon to see its details.</Text>
          <TextInput 
            onChangeText={numId => {
              changeIdSearch(numId);
            }}
            value={idPokemonSearch}
            placeholder="Insert a pokemon id to search"
            keyboardType="numeric"
            style={styles.inputSearch}
          />
        </View>
        <FlatList
          data={pokemonData || pokemonsData}
          keyExtractor={item => item.id.toString()}
          renderItem={({item}) => <PokemonCard
                                    key={item.name}
                                    id={item.id.toString()}
                                    name={item.name}
                                    sprit={item.sprit}
                                    types={item.types}
                                    navigation={navigation}
                                  />}
          ListEmptyComponent={() => <ActivityIndicator size="large" color="#4490DB" />}
          refreshing={true}
          numColumns={1}
          onEndReachedThreshold={0.25}
          onEndReached={() => {
            if (!idPokemonSearch) {
              setOffset(offset + limit);
            }
          }}
        />
      </View>
    </View>
  );
}
