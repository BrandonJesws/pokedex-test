import React from 'react';
import ProgressLine from '../app/components/ProgressLine';
import renderer from 'react-test-renderer';

let component;

describe('<ProgressLine />', () => {
	beforeEach(() => {
		component = renderer.create(<ProgressLine />);
	});

	it('Render ProgressLine', () => {
		expect(component).toBeDefined();
	})
});