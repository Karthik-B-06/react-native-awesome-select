import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

export default props => {
  const [data, setData] = useState(props.data);

  const onPress = i => {
    const newData = [...data];
    newData[i].selected ? newData[i].selected = false : (newData[i].selected = true);
    props.onValueChange(newData);
    setData(newData);
  };

  return (
    <View style={styles.container}>
      {data.map((item, i) => {
        return (
          <TouchableOpacity
            key={i}
            onPress={() => onPress(i)}
            activeOpacity={0.9}
            style={[
              item.selected
                ? [styles.activeSelect, props.activeStyle]
                : [styles.inactiveSelect, props.inactiveStyle],
              styles.select
            ]}
          >
            <Text
              style={
                item.selected
                  ? [styles.activeSelect, props.activeStyle]
                  : [styles.inactiveSelect, props.inactiveStyle]
              }
            >
              {item.name}
            </Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    flexWrap: "wrap"
  },
  select: {
    borderStyle: "solid",
    borderWidth: 2,
    borderRadius: 5,
    borderColor: "transparent",
    padding: 8,
    marginTop: 8,
    marginBottom: 8,
    marginRight: 8
  },
  activeSelect: {
    backgroundColor: "#2b49f0",
    color: "white",
    textTransform: "capitalize"
  },
  inactiveSelect: {
    backgroundColor: "#dcdee8",
    color: "black",
    textTransform: "capitalize"
  }
});
