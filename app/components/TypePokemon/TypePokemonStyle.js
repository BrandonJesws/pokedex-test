import { StyleSheet } from "react-native";
import { ApplicationStyles, metrics, font } from '../../styles';

export default StyleSheet.create({
	...ApplicationStyles,
	...font.style,
	containerType:{
		marginHorizontal: 2,
		height: 20,
		paddingHorizontal: 5,
		borderRadius: 5
	}
});