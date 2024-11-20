import React from "react";
import { StyleSheet, View ,Text} from "react-native";
import { LineChart } from "react-native-chart-kit";
import { Dimensions } from "react-native";
import { bezierChartData } from "./Datas/Dataforbezirchart"; // Import data

// const screenWidth = Dimensions.get("window").width;

const BezierChart = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.styleee}>Output Graph</Text>
      <LineChart
        data={bezierChartData}
        width={550 } // Adjust for padding width / also we can use dimensions
        height={300}
        // yAxisLabel="$"
        yAxisSuffix="ton"
        // yAxisInterval={1} // Optional: interval between horizontal lines
        chartConfig={{
          backgroundColor: "#e26a00",
          backgroundGradientFrom: "white",
          backgroundGradientTo: "#53c962",
          // decimalPlaces: 2, // Optional: precision for y-values
          color: (opacity = 1) => 'rgba(255, 255, 255, ${opacity})',
          labelColor: (opacity = 1) =>' rgba(255, 255, 255, ${opacity})',
          style: {
            borderRadius: 16,
          },
          propsForDots: {
            r: "6",
            strokeWidth: "2",
            stroke: "#ffa726",
          },
          propsForBackgroundLines:{
            stroke:'#e3e3e3', //get light color lines
            strokeDasharray:'',// get background lines
          }
        }}
        bezier={true}
        fromZero
        withInnerLines={true}
        style={styles.chart}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    marginVertical: 20,
  },
  chart: {
    marginVertical: 8,
    borderRadius: 16,
  },
  styleee: {
    fontSize: 20,
    fontStyle: "italic",
    fontWeight: "bold",
    alignItems: "center",
    textAlign: "center",
  },
});


export default BezierChart;