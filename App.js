import { ImageBackground, StyleSheet, Text, View, Image } from 'react-native';

export default function App() {
  return (
   <ImageBackground source={require("./assets/A-React.png")}>
      <View style={styles.container}>
          <Text style={{fontSize: 30, color: "white", textAlign: 'center'}}>
            React Native
          </Text>      

          <Text>
            React Native is a framework for building mobile applications with JavaScript and React.
          </Text>
          <Image source={require("./assets/react1.png")} style={styles.img}/>
        </View>
   </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container:{
    padding: 20,
    paddingTop:60,
    backgroundColor: '#9eb198',
    height: "100%"    
  },
text:{
  fontSize: 18,
  color: "#ffffff",
  marginTop: 20,
  borderWidth: 1,
  borderColor: "#ffffff",
  padding:10,
  borderRadius:10,
  backgroundColor:"#ffffff10",
  width:"100"}
});

// assignment do an article that the scrollable
