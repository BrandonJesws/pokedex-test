import { StyleSheet } from "react-native";
import { ApplicationStyles, metrics, font } from '../../styles';

export default StyleSheet.create({
	...ApplicationStyles,
	...font.style,
	card:{
		height: 100,
		borderRadius: 10,
		flexDirection: "row",
	},
	infoCard: {
		flex: 2,
		paddingLeft: metrics.bigSpace,
		paddingTop: metrics.baseSpace,
		paddingBottom: metrics.baseSpace 
	},
	typesContainer: {
		flex: 2,
		flexDirection: 'row',
		top: 10
	},
	imagePokemon: {
		height: 100,
		width: 100,
		bottom: 15
	},
	headerCard:{
		flex: 1,
		flexDirection: 'row',
		paddingTop: 8
	},
	numberPokemon:{
		flex:1
	},
	namPokemon:{
		flex: 5,
		color: 'white',
		backgroundColor: "red"
	}
});