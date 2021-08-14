import { StyleSheet } from 'react-native';
import { color, metrics, font } from '../../styles';
import { ApplicationStyles } from '../../styles';

export default StyleSheet.create({
	...ApplicationStyles,
	...font.style,
	containerDetailsInfo: {
		flex: 2,
		backgroundColor: color.white,
		borderTopStartRadius: metrics.baseSpace,
		borderTopEndRadius: metrics.baseSpace,
		padding: metrics.baseSpace
	}
});