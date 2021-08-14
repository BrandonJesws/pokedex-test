import React from 'react';
import ItemStatList from '../app/components/ItemStatList';
import renderer from 'react-test-renderer';

let component;

describe('<ItemStatList />', () => {
	beforeEach(() => {
		component = renderer.create(<ItemStatList />);
	});

	it('Render ItemStatList', () => {
		expect(component).toBeDefined();
	})
});