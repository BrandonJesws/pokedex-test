import React from 'react';
import HeaderDetails from '../app/components/HeaderDetails';
import renderer from 'react-test-renderer';

let component;

describe('<HeaderDetails />', () => {
	beforeEach(() => {
		component = renderer.create(<HeaderDetails />);
	});

	it('Render HeaderDetails', () => {
		expect(component).toBeDefined();
	})
});