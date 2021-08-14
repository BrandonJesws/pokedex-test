import React from 'react';
import TypePokemon from '../app/components/TypePokemon';
import renderer from 'react-test-renderer';

let component;

describe('<IteTypePokemonmStatList />', () => {
	beforeEach(() => {
		component = renderer.create(<TypePokemon />);
	});

	it('Render TypePokemon', () => {
		expect(component).toBeDefined();
	})
});