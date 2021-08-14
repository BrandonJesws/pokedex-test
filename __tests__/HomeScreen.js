import React from 'react';
import HomeScreen from '../app/screens/HomeScreen';
import renderer from 'react-test-renderer';

let component;

describe('<HomeScreen />', () => {
	beforeEach(() => {
		component = renderer.create(<HomeScreen />);
	});

	it('Render HomeScreen', () => {
		expect(component).toBeDefined();
	})
});