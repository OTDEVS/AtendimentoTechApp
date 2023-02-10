import React from "react";
import { StyleSheet } from "react-native";
import Icon from 'react-native-vector-icons/Ionicons';

export const IoniconsPack = {
    name: 'ionicons',
    icons: createIconsMap(),
  };
  
  function createIconsMap() {
    return new Proxy({}, {
      get(target, name) {
        return IconProvider(name);
      },
    });
  }
  
  const IconProvider = (name) => ({
    toReactElement: (props) => Ionicons({ name, ...props }),
  });
  
  function Ionicons({ name, style, size }) {
    const { height, tintColor, ...iconStyle } = StyleSheet.flatten(style);
    return (
      <Icon name={name} size={size ? size : height} color={tintColor} style={iconStyle} />
    );
  }