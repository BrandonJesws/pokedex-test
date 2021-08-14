import color from '../styles/color';

export function getColorTypePokemonBackGround ({ type = 'normal' }) {
	return color.typesBackGround[type];
}
export function getColorTypePokemon ({ type = 'normal' }) {
	return color.types[type];
}
