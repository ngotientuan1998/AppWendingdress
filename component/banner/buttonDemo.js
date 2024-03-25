import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'

const buttonDemo = ({children,styles,onpress,ref}) => {
  return (
    <TouchableOpacity onPress={onpress} ref={ref} style={styles}>
        <Text >{children}</Text>
    </TouchableOpacity>
  )
}

export default buttonDemo