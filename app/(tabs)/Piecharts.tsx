import { View, Text, useWindowDimensions,StyleSheet, Dimensions } from "react-native";
import React from "react";
import { PieChart } from "react-native-chart-kit";

const data = [ // this set of array is used to display the whole data in the pie chart
  {
    name: "Refined Sugar", // display name 
    percentage:45, // display percentage
    color: "green", // the colour of the chart for this property
    legendFontColor: "black", // legend font color denotes the color outside the piechart
    legendFontSize: 15, // legend font size denotes the name of outside the piechart
  },
  {
    name: "Raw Sugar",
    percentage:45,
    color: "yellow",
    legendFontColor: "black",
    legendFontSize: 15,
  },
  {
    name: "Molasses",
    percentage:10,
    color: "red",
    legendFontColor: "black",
    legendFontSize: 15,
  },

];

const Piecharts = () => {
    const screenWidth=Dimensions.get('window').width
  return (
    <View >
      <Text style={styles.styleee}>Revenue Breakdown</Text>
      <PieChart
        data={data}
        width={screenWidth -40} // call the window width or manual width
        height={220} //denotes the height of the pie chart
        
        chartConfig={{
            color:(opacity)=>'rgba(225,225,225,${opacity})'
           
        }}
        
        accessor={"percentage"}  //our pie chart was showing percentage of sugar canes ..so here i mentioned percentage
        backgroundColor={"transparent"}
        paddingLeft={"15"}
        center={[0,0]} //used to set a position of the chat(x,y) axis
        absolute
        avoidFalseZero={true} //to avoid rounded value = 0
        hasLegend={true} //to show the legend content near to the ui
        
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
  

export default Piecharts;
