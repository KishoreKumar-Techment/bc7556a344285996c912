import React, { Component } from 'react'
import { Text, View, StyleSheet } from 'react-native'

const DetailScreen = (props) => {

   // console.log(props.route.params)

    return (
            <View style={styles.containerStyle}>
            <Text style={styles.textStyle}> name - { props.route.params.data.name} </Text>
            <Text style={styles.textStyle}> nasa_jpl_url - { props.route.params.data.nasa_jpl_url} </Text>
            <Text style={styles.textStyle}> is_potentially_hazardous_asteroid - {props.route.params.data.is_potentially_hazardous_asteroid ? 'true' : 'false'} </Text>
            </View>
        )
}
    
const styles = StyleSheet.create({
    containerStyle: {
        paddingHorizontal: 20,
        paddingVertical:20
    },
    textStyle: {
        paddingTop:20,
        color: 'black',
        textAlign: 'center',
        fontSize: 20
    }
})   
    
export default DetailScreen
