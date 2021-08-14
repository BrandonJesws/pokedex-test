const getAbilityEnglish = effectEntries => {
	const effectEntrie = effectEntries.find(effect => effect.language.name === "en");
	return effectEntrie.effect;
}

export function normalizePokemonsInfo ({ data }) {
	const { id, name, sprites, types } = data;
	
	return {
        id,
        name,
        sprit: sprites.other['official-artwork'].front_default,
        types,
    };
}

export function normalizeDetails ({ data }) {
	const { name,
			sprites,
			types,
			base_experience,
			height,
			weight,
			stats,
			abilityData
		} = data;

	return {
		name,
		sprit: sprites.other['official-artwork'].front_default,
		types,
		listData: [
			{
				title: "Information",
				data: [
					{
						name: "Base Experience",
						value: base_experience,
						typeItem: "simple_row",
					},
					{
						name: "Height",
						value: height,
						typeItem: "simple_row",
					},
					{
						name: "Weight",
						value: weight,
						typeItem: "simple_row",
					},
				]
			},
			{
				title: "Base Stats",
				data: stats.map(item => {
					const name = item.stat.name;
					const progress = Math.trunc(item.base_stat / 2);
					const value = item.base_stat;
					const typeItem = "stat";
	
					return { name, progress, value, typeItem };
				})
			},
			{
				title: "Abilities",
				data: abilityData.map(item => {
					const name = item.name;
					const value = getAbilityEnglish(item.effect_entries);
					const typeItem = "simple_column";
	
					return { name, value, typeItem };
				})
			},
		],
	}
}