import React, { Component } from "react";
import { StyleSheet, View } from "react-native";
import { MapView } from "expo";

export default class MaterialMapView extends Component {
  render() {
    return (
      <View style={[styles.container, this.props.style]}>
        <MapView customMapStyle={"undefined"} style={styles.MapView1} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white"
  },
  MapView1: {
    backgroundColor: "rgb(230,230,230)",
    width: 147,
    height: 212
  }
});
