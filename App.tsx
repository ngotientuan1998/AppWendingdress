import { StyleSheet, Text, View,Button } from 'react-native'
import React from 'react'
import { Mytheme ,useTheme } from './Themes/Theme'
import Images from './component/banner'
const App = () => {
  
  return (
    <Mytheme > 
      <View style={styles.backgroud}>
      
      <Toglle></Toglle>
      </View>
      
    </Mytheme>
  )
} 
const Toglle =()=>{
  
  const {Theme,toggleTheme} =useTheme()
  return (
    <View style={{
      backgroundColor: Theme==='light'?'blue':"yellow",
    }} >
      <Images uri_image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTf4wi5Q3Gyhh5VjNIxhKkdGPxN10dfZdnQgA&usqp=CAU" ti='Tuấn'></Images>
        <Text  style={{ 
              color: Theme==='light'?'yellow':"blue",
        }}>Demo Theme</Text>
        <Button title='Đổi giao diện' onPress={toggleTheme} />
    </View>
  );
 
}

export default App

const styles = StyleSheet.create({
  backgroud:{
    backgroundColor: 'yellow'
  }
})