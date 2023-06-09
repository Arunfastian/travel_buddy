import { View, Text, TouchableOpacity,Image,StyleSheet } from 'react-native'
import FontAwsome from 'react-native-vector-icons/FontAwesome5'
import React from 'react'
const ItemsCardContainer = ({imageSrc,title,location}:any) => {
  return (
    <View>
        <TouchableOpacity style={styles.container}>
            <Image source={{uri:imageSrc}} style={styles.imageStyles}/>
        <Text style={styles.titleText}>
          {title.length > 14 ? `${title.slice(0,14)}...` : title}
        </Text>
        <View style={{flexDirection: 'row',columnGap: 2,}}>
          <FontAwsome name='map-marker-alt'/>
          <Text style={styles.locationText}>
            {location.length > 18 ? `${location.slice(0,18)}...` : location}
          </Text>
        </View>

        </TouchableOpacity>

    </View>
  )
}

export default ItemsCardContainer

const styles = StyleSheet.create({
    imageStyles:{
        width:'100%',
        height: 140,
        resizeMode: 'contain',
        borderRadius: 4,
    },
    container:{
      elevation: 5,
      width: 140,
      backgroundColor: 'white',
      borderColor: 'grey',
      marginBottom: 2,
      paddingBottom: 4,
      paddingHorizontal: 2,
    },
    titleText:{
      color: '#428288',
      fontSize: 14,
      fontWeight: 'bold',
    },
    locationText:{
      color: '#428288',
      fontSize: 12,
      fontWeight: 'bold',
    }
})