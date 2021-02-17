#!/usr/bin/env node
import React from "react";
import { View } from "react-native";

const IncredibleComponent = ({ style, children }) => {
  return <View style={{ borderRadius: 30, ...style }}>{children}</View>;
};

module.exports = IncredibleComponent;