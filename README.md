## React-native-awesome-select

A multiselect component with zero dependencies.

![demo](https://raw.githubusercontent.com/mustafa-turk/resources/master/demo.gif)

## Install

`npm install react-native-awesome-select`

## Usage

```javascript
import React, { Component } from "react";
import { View } from "react-native";
import AwesomeSelect from "react-native-awesome-select";

const data = [
  {
    name: "First item",
    selected: false
  },
  {
    name: "Second item",
    selected: false
  }
];

export default function App() {
  return (
    <View>
      <AwesomeSelect
        data={data}
        onValueChange={value => console.log(value)}
      />
    </View>
  );
}
```

## Props

| Prop          | Type     | Optional | Default   | Description                                           |
| ------------- | -------- | -------- | --------- | ----------------------------------------------------- |
| data          | array    | No       | undefined | Data array that will be passed and displayed          |
| onValueChange | function | Yes      |           | Callback called when value has been changed           |
| activeStyle   | style    | Yes      |           | The style applied to the elements with active state   |
| inactiveStyle | style    | Yes      |           | The style applied to the elements with inactive state |
