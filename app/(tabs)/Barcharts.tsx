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
  // const {width}=useWindowDimensions(); //to get window width
 
  return (
    <View style={styles.container}>
      <Text style={styles.styleee}>Capacity Utilization</Text>
      <BarChart
        data={ChartData} //imported chart data from the data for barchart file
        yAxisLabel="" //  lablel to show the lables in the yaxis
        yAxisSuffix="" //  lablel to show the lables in the xaxis
        width={500} //whole barchart width // also we can use window dimension width
        height={400}//whole barchart height
        
        chartConfig={{
          backgroundGradientFrom: "white", //background color value 1
          backgroundGradientFromOpacity: 1,
          backgroundGradientTo: "white", // background color value 2
          backgroundGradientToOpacity: 1,
          color: () => "black",
          barPercentage:1.4, //to set the width of the bar /size of the whole bar
          barRadius:9,  // to get a rounded border at the top and bottom of the bar (whole bar)
          
          
          propsForBackgroundLines: { 
            stroke:'#e3e3e3', //light line
            strokeDasharray: ""       // by default the background lines will be dashed lines...
                                      //by using this property we can turn dashed lines into solid straight lines
          },
          
         
        }}

        withInnerLines={true} // will display inner lines in the chart
        showBarTops={false} // if true will show the percentage at the top of the bar
        withCustomBarColorFromData 
        flatColor // used to get a perfect colour for the bar
        fromZero // denotes the y axis value start from 0
       

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
