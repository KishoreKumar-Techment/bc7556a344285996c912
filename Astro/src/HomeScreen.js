import React, {useState} from 'react'
import { Text, View, TextInput, StyleSheet, TouchableOpacity, Alert} from 'react-native'


let apiKey = "KnACeCbujKOcuYDnn1kfW8Jld60aQbMTNdqqja6T"

const HomeScreen = ({navigation}) => {

    const [astroId, setAstroId] = useState('')
    const [isDisable, setIsDisable] = useState(true)

    randomAstroData = () => {
        fetch('https://api.nasa.gov/neo/rest/v1/neo/browse?api_key=' + apiKey)
            .then((res) => res.json())
            .then((response) => {
                
                let totalPage = response.page.size
                console.log('totalPage', totalPage)
                let randomNo = Math.floor(Math.random() * Math.floor(totalPage - 1))
                console.log('randomNo', randomNo)
                let astroId = response.near_earth_objects[randomNo].id
                console.log('astroId', astroId)
                astroDataById(astroId)
            }).catch((err) => {
                console.log(err)
        })
    }

    astroDataById = (id) => {
        console.log('click')
        fetch('https://api.nasa.gov/neo/rest/v1/neo/'+id+'?api_key=' + apiKey)
            .then((res) => res.json())
            .then((response) => {
                //console.log(response)
                navigation.navigate('Detail', {data:response})
            }).catch((err) => {
                console.log(err)
                Alert.alert('Please enter valid astro id')
        })
    }
    
    //

    return (
            <View style={styles.containerStyle}>
                <TextInput style={styles.inputStyles} placeholder='Enter Asteroid ID' onChangeText={(text) => {
                if (text.trim().length > 0) {
                    setIsDisable(false)
                    setAstroId(text)
                    
                } else { 
                    setIsDisable(true)
                }
                }} />
            <TouchableOpacity style={isDisable ? styles.disableButtonStyle : styles.buttonStyle}  disabled={isDisable} onPress={() => astroDataById(astroId)}>
                      <Text style={styles.textStyle}>Submit</Text>
                </TouchableOpacity>    
            <TouchableOpacity style={styles.buttonStyle} onPress={() => randomAstroData()}>
                      <Text style={styles.textStyle}>Random Asteroid</Text>
                </TouchableOpacity>
            </View>
        )
}

const styles = StyleSheet.create({
    containerStyle: {
        paddingHorizontal: 20,
        paddingVertical:20
    },
    inputStyles: {
        fontSize:20,
        padding:15,
        borderColor: 'black',
        borderWidth: 1,
        borderRadius: 10,
        height:50
    },
    buttonStyle: {
        borderRadius: 10,
        borderWidth: 1,
        backgroundColor: 'blue',
        marginTop: 20,
        height: 50,
        justifyContent: 'center',
        alignItems:'center'
    },
    disableButtonStyle: {
        borderRadius: 10,
        borderWidth: 1,
        backgroundColor: 'gray',
        marginTop: 20,
        height: 50,
        justifyContent: 'center',
        alignItems:'center'
    },
    textStyle: {
        color: 'white',
        textAlign: 'center',
        fontSize: 20,
        fontWeight:'bold'
    }
})

export default HomeScreen
