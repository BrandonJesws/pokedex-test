import React from 'react';
import { Text } from 'react-native';
import styles from "./TitleListStyle";

export default function HeaderDetails({ title }) {

  return (
    <Text style={[styles.bigBold , styles.colorGray]}>{title}</Text>
  );
}