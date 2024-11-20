import React from 'react'
import { View, Text ,StyleSheet, Alert } from 'react-native'
import { PieChart } from "react-native-gifted-charts";

        
const DonutCharts = () => {
    const pieData = [
        {value: 30, color: '#b01ac4', text: '20%'},
        {value: 50, color: '#449416', text: '60%'},
        {value: 20, color: '#ad740a', text: '20%'},
        {value: 30, color: '#c21723', text: '20%'}
    ];
    
    const handlePress = (data: { value: number;  text: string }) => {
      if (data) {
        Alert.alert('Segment Clicked',` Label: ${data.text}\nValue: ${data.value}`);
      } else {
        Alert.alert('No data found');
      }
    };
    return(
        <View>
            <Text style={styles.styleee}> Cost Distribution</Text>
            <PieChart
            donut
            showText
            textColor="black"
            radius={160}
            textSize={20}
            showTextBackground
            textBackgroundRadius={26}      
            data={pieData}
            onPress={handlePress}
            />
    </View>
    )
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
  

export default DonutCharts;