import { View, Text, StyleSheet, Dimensions } from "react-native";
import React from "react";
import { BarChart } from "react-native-chart-kit";

const ChartData = {
    labels: ["Line 1", "Line 2", "Line 3", "Line 4", "Line 5"], // the values was taken as x axis in the chart
    datasets: [
      {
        data: [50, 95,28, 110,80], // the values was taken as y axis value
        colors: [ // the color will be seperate bar colors in the barchart
          (opacity = 1) => "#fca103",
          (opacity = 1) => "green",
          (opacity = 1) => "red",
          (opacity = 1) => "green",  
          (opacity = 1) => "#fca103",
        ],
      },
  
    ],
    
  };
  

const Barcharts = () => {
 
 
  return (
    <View style={styles.container}>
      <Text style={styles.styleee}>Capacity Utilization</Text>
      <BarChart
        data={ChartData} 
        yAxisLabel=""
        yAxisSuffix="" 
        width={500}
        height={400}
        
        chartConfig={{
          backgroundGradientFrom: "white", 
          backgroundGradientFromOpacity: 1,
          backgroundGradientTo: "white", 
          backgroundGradientToOpacity: 1,
          color: () => "black",
          barPercentage:1.4, 
          barRadius:9,  
          
          
          propsForBackgroundLines: { 
            stroke:'#e3e3e3',
            strokeDasharray: ""       
                                     
          },
          
         
        }}

        withInnerLines={true} 
        showBarTops={false} 
        withCustomBarColorFromData 
        flatColor 
        fromZero

      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },

  styleee: {
    fontSize: 20,
    fontStyle: "italic",
    fontWeight: "bold",
    alignItems: "center",
    textAlign: "center",
  },

});

export default Barcharts;
