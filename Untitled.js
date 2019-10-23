import React, { Component } from "react";
import { StyleSheet, View, Text } from "react-native";
import MaterialCardBasic from "../components/MaterialCardBasic";
import MaterialMapView from "../components/MaterialMapView";
import MaterialButtonViolet from "../components/MaterialButtonViolet";
import MaterialButtonDanger from "../components/MaterialButtonDanger";
import Svg, { Ellipse } from "react-native-svg";

export default class Untitled extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.textStackStack}>
          <View style={styles.textStack}>
            <Text style={styles.text}>
              Start from scratch{"\n"}
              {"\n"}or{"\n"}
              {"\n"}Drag and drop a Sketch file
            </Text>
            <MaterialCardBasic style={styles.materialCardBasic} />
            <MaterialMapView style={styles.materialMapView2} />
          </View>
          <View style={styles.rect}>
            <MaterialButtonViolet style={styles.materialButtonViolet} />
          </View>
          <MaterialButtonDanger style={styles.materialButtonDanger} />
        </View>
        <View style={styles.ellipseStack}>
          <Svg viewBox="0 0 190.35 93.08" style={styles.ellipse}>
            <Ellipse
              strokeWidth={1}
              fill="rgba(230, 230, 230,1)"
              stroke="rgba(230, 230, 230,1)"
              cx={95}
              cy={47}
              rx={95}
              ry={46}
            />
          </Svg>
          <MaterialMapView style={styles.materialMapView} />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  text: {
    color: "#121212",
    position: "absolute",
    fontSize: 24,
    fontFamily: "roboto-regular",
    textAlign: "center",
    left: 0,
    top: 159
  },
  materialCardBasic: {
    top: 56,
    left: 36,
    width: 359,
    height: 282,
    position: "absolute"
  },
  materialMapView2: {
    top: 0,
    left: 87,
    width: 147,
    height: 212,
    position: "absolute"
  },
  textStack: {
    top: 102,
    left: 11,
    width: 395,
    height: 338,
    position: "absolute"
  },
  rect: {
    top: 0,
    left: 0,
    width: 154,
    height: 208,
    backgroundColor: "rgba(230, 230, 230,1)",
    position: "absolute"
  },
  materialButtonViolet: {
    width: 100,
    height: 36,
    marginTop: 74,
    marginLeft: 36
  },
  materialButtonDanger: {
    top: 155,
    left: 179,
    width: 100,
    height: 36,
    position: "absolute"
  },
  textStackStack: {
    width: 406,
    height: 440,
    marginTop: 85,
    marginLeft: 34
  },
  ellipse: {
    top: 0,
    left: 0,
    width: 190,
    height: 93,
    position: "absolute"
  },
  materialMapView: {
    top: 0,
    left: 7,
    width: 147,
    height: 212,
    position: "absolute"
  },
  ellipseStack: {
    width: 190,
    height: 212,
    marginTop: 27,
    marginLeft: 89
  }
});
