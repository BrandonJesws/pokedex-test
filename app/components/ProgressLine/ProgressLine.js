import React from 'react';
import { View } from 'react-native';
import styles from './ProgressLineStyle';

export default function ProgressLine({ progress }) {

  return (
	<View style={[ styles.progressLine, { width: `${progress}%` } ]}></View>						
  );
}