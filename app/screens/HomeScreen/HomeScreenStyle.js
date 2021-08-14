import { StyleSheet } from 'react-native';
import { color, metrics, font } from '../../styles';
import { ApplicationStyles } from '../../styles';

export default StyleSheet.create({
	...ApplicationStyles,
	...font.style,
	inputSearch:{
		marginTop: metrics.smallSpace,
		borderRadius: metrics.tinySpace,
		borderColor: "#999",
		borderWidth: 1,
		height: metrics.doubleSpace,
		paddingHorizontal: metrics.smallSpace
	},
});