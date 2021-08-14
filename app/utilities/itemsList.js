import React from 'react';
import ItemSimpleList from "../components/ItemSimpleList";
import ItemStatList from "../components/ItemStatList";
import { ApplicationStyles } from '../styles';

export function getItemList ({ type, data }) {
	const { name, value } = data;

	if (type === 'simple_row') {
		return <ItemSimpleList name={name} value={value} style={ApplicationStyles.row}/>
	}
	if (type === 'simple_column') {
		return <ItemSimpleList name={name} value={value} />
	}
	 if (type === 'stat') {
		const { progress } = data;
		return <ItemStatList name={name} progress={progress} stat={value} />
	}

	 return <ItemSimpleList name={name} value={value} />
}
