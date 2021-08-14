import React, { useEffect, useState } from 'react';
import { View, SafeAreaView, SectionList, ActivityIndicator } from 'react-native';
import HeaderDetails from '../../components/HeaderDetails';
import TitleList from '../../components/TitleList';
import { getPokemonDetailsById, getDetailsByUrl } from '../../services/PokemonApiService';
import { getColorTypePokemonBackGround } from '../../utilities/colorTypePokemon';
import { getItemList } from '../../utilities/itemsList';
import { normalizeDetails } from '../../utilities/normalize';
import styles from './DetailsScreenStyle';

export default function DetailsScreen({ route }) {

	const idPokemon = route?.params.idPokemon;
	const [dataPokemon, setDataPokemon] = useState();
	
	const backgroundColor = dataPokemon ? getColorTypePokemonBackGround({ type: dataPokemon.types[0]?.type.name }) : '#FFF';


	const getAbilitiesDetails = async (data) => {
		const { abilities } = data;
		const abilitiesDetails = await Promise.all(abilities.map(async ability => {
			let abilityDetails = await getDetailsByUrl({url: ability.ability.url})
			return abilityDetails;
		}));
		const normalizeData = normalizeDetails({ data: { ...data, abilityData: abilitiesDetails }});
		setDataPokemon(normalizeData);
	}

	/** The pokemon data is requested and then the data of its abilities is requested */
	async function fetchData() {
		let response = await getPokemonDetailsById({ id: idPokemon });
		await getAbilitiesDetails(response);
	};

	useEffect(() => {
		fetchData();
	}, []);

  return (
	  <View style={styles.flex1}>
		  {
		  	dataPokemon ? (
				<View style={[styles.flex1, { backgroundColor }]}>
					<HeaderDetails
						id={idPokemon}
						name={dataPokemon.name}
						sprit={dataPokemon.sprit}
						types={dataPokemon.types}
					/>
					<SafeAreaView style={styles.containerDetailsInfo}>
						<SectionList
							sections={dataPokemon.listData}
							keyExtractor={(item, index) => item.name + index}
							renderItem={({ item }) => {
								return getItemList({ type: item.typeItem, data: item });
							}}
							ItemSeparatorComponent={() => <View style={{ height: 5, width: "100%" }}/>}
							SectionSeparatorComponent={() => <View style={{ height: 15, width: "100%" }}/>}
							renderSectionHeader={({ section: { title } }) => <TitleList title={title}/>}
						/>
					</SafeAreaView>
				</View>
			  ) : (
				<View style={[styles.flex1, styles.contentCenter]}>
					<ActivityIndicator size="large" color="#4490DB" />
				</View>
			  )
		  }
	  </View>
  );
}
