import { View, Text, StyleSheet, Image,TouchableOpacity } from "react-native";
import React, {useState,useEffect} from "react";
//import { TouchableOpacity } from "react-native-gesture-handler";
import { scale } from "react-native-size-matters";
const MenuContainer = ({ title, imageSrc, type, changeTypes }: any) => {
    const [bgColor,setBgColor] = useState("")
    useEffect(() => {
        if(title.toLowerCase() === type) setBgColor("lightgrey");
        else setBgColor("white");
    }, [type])
    const handlePress = () => {
        changeTypes(title.toLowerCase())
    }
    const styles1 = StyleSheet.create({
        imageContainer: {
            width: scale(66),
            height: scale(66),
            borderRadius: scale(scale(88)/2),
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: bgColor   
        }
    })
  return (
    <TouchableOpacity style={styles.container} onPress={handlePress}>
        <View style={styles1.imageContainer}>
            <Image source={imageSrc} style={styles.imageStyles}/>
        </View>
        <Text style={styles.titleStyles}>{title}</Text>
    </TouchableOpacity>
  );
};

export default MenuContainer;

const styles = StyleSheet.create({
    container:{
        alignItems: 'center',
        justifyContent: 'center',
        rowGap: scale(8)//scale(8),
    },

    imageStyles:{
        width: '100%',
        height: '100%',
        resizeMode: 'contain',
    },
    titleStyles:{
        color: '#00BCC9',
        fontSize: scale(14),
        fontWeight: '700'
    },

})
