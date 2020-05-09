import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

export default (props) => {
  const [data, setData] = useState(props.data);

  function handlePress(i) {
    const _data = [...data];
    _data[i].isActive = !_data[i].isActive;
    handleDataChange(_data);
  };

  function handleDataChange(data) {
    setData(data);
    props.onValueChange(data);
  }

  function handleStyles(isActive) {
    return isActive ? [styles.activeSelect, props.activeStyle] : [styles.inactiveSelect, props.inactiveStyle];
  }

  return (
    <View style={styles.container}>
      {data.map((item, i) => {
        return (
          <TouchableOpacity
            key={i}
            onPress={() => handlePress(i)}
            activeOpacity={0.9}
            style={[ handleStyles(item.isActive), styles.select ]}
          >
            <Text style={handleStyles(item.isActive)}>{item.name}</Text>
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
