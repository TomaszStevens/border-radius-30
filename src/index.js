#!/usr/bin/env node
import { View } from "react-native";

const Component = () => {
  return(
    <View style={{ borderRadius: 30, width: 50, height: 50, backgroundColor: "red" }}/>
    );
};

module.exports.component = Component;