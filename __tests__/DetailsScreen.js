import React from 'react';
import DetailsScreen from '../app/screens/DetailsScreen';
import renderer from 'react-test-renderer';

let component;

describe('<DetailsScreen />', () => {
	beforeEach(() => {
		component = renderer.create(<DetailsScreen />);
	});

	it('Render DetailsScreen', () => {
		expect(component).toBeDefined();
	})
});