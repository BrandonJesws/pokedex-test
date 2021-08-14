import React from 'react';
import ItemSimpleList from '../app/components/ItemSimpleList';
import renderer from 'react-test-renderer';

let component;

describe('<ItemSimpleList />', () => {
	beforeEach(() => {
		component = renderer.create(<ItemSimpleList />);
	});

	it('Render ItemSimpleList', () => {
		expect(component).toBeDefined();
	})
});