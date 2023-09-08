import React, { useEffect, useState } from "react";
import CustomFlatList from "../custom_components/CustomFlatList";
import { View,Text, SafeAreaView, FlatList, TouchableOpacity,Linking,ActivityIndicator } from "react-native";
const ReactScreen=()=>{
    const [reactApiResponse,setReactApiResponse] = useState([])
    const [showLoader, setShowLoader] = useState(false);
    const [newUrl,setUrl] = useState("https://reqres.in/api/users?page=2")
    useEffect(()=>{
      setShowLoader(true)
      fetch(newUrl)
        .then((response) => response.json())
        .then((responseData) => {
        setShowLoader(false)
          const { data } = responseData;
          setReactApiResponse(data);
        })
        .catch((error) => {
          setShowLoader(false)
          console.error('Error fetching data:', error);
        });
        console.log("react");
    },[])
   
return(
    <SafeAreaView>
    <View style={{height:'100%',width:'100%',backgroundColor:'white'}}>
    {showLoader ? (
        <View
          style={{alignItems: 'center', justifyContent: 'center', flex: 0}}>
          <ActivityIndicator size={30} color='blue' />
        </View>
      ):<CustomFlatList reactApiResponse={reactApiResponse} url={newUrl}/>}
    
      
        
    
    </View>
    
    </SafeAreaView>
)
}
export default ReactScreen;