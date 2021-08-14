import React from 'react';
import PokemonCard from '../app/components/PokemonCard';
import renderer from 'react-test-renderer';

let component;

describe('<PokemonCard />', () => {
	beforeEach(() => {
		component = renderer.create(<PokemonCard />);
	});

	it('Render PokemonCard', () => {
		expect(component).toBeDefined();
	})
});