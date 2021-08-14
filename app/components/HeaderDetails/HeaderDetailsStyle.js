import { StyleSheet } from "react-native";
import { ApplicationStyles, metrics, font } from '../../styles';

export default StyleSheet.create({
	...ApplicationStyles,
	...font.style,
	containerSprit:{
		justifyContent: 'flex-end',
		alignItems: 'flex-end',
		flex: 4
	},
	imageSprit: {
		width: 130,
		height: 130,
		bottom: metrics.doubleSpace,
	},
	containerInfo:{
		flex: 5,
		paddingLeft: 10
	},
	flexTwo: {
		flex: 2
	}
});