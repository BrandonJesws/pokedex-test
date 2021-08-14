import React from 'react';
import TitleList from '../app/components/TitleList';
import renderer from 'react-test-renderer';

let component;

describe('<TitleList />', () => {
	beforeEach(() => {
		component = renderer.create(<TitleList />);
	});

	it('Render TitleList', () => {
		expect(component).toBeDefined();
	})
});