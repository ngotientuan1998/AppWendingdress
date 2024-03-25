import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import styles from './style'

const index = ({uri_image,ti}) => {
  return (
    <View style={styles.khung}>
        <Image source={{uri: uri_image}} style={{height:200,width:150}}></Image>
      <Text>{ti}</Text>
    </View>
  )
}

export default index

