import { View, Text , StyleSheet } from "react-native";
import React from "react";


import Barcharts from "./Barcharts";
import BezierChart from "./Beziercharts";
import Piecharts from "./Piecharts";
import DonutCharts from "./Donutcharts";


const index = () => {
  return (
    <View style={styles.container}>
     
      <Barcharts/>
      <BezierChart/>
      <Piecharts/>
      <DonutCharts/>


    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor:'#fff',
    alignItems:'center',
    justifyContent:'center',
    height:'auto',
    width:'auto'
  },
});

export default index
