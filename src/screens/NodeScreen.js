import React, { useState,useEffect } from "react";
import { View,Text, SafeAreaView, FlatList, TouchableOpacity,Linking,ActivityIndicator } from "react-native";
import CustomFlatList from "../custom_components/CustomFlatList";
import styles from "../styles/CustomStyle";
const NodeScreen=()=>{
    const [reactApiResponse,setReactApiResponse] = useState([])
    const [showLoader, setShowLoader] = useState(false);
    
    const [newUrl,setUrl] = useState("https://api.stackexchange.com/2.3/questions?page=1&pagesize=100&fromdate=1683504000&todate=1694044800&order=asc&sort=activity&tagged=node.js&site=stackoverflow")
    useEffect(()=>{
      setShowLoader(true)
      fetch(newUrl)
        .then((response) => response.json())
        .then((responseData) => {
        setShowLoader(false)
          const { items } = responseData;
          setReactApiResponse(items);
        })
        .catch((error) => {
          setShowLoader(false)
          console.error('Error fetching data:', error);
        });
        console.log("react");
    },[])

return(
        <SafeAreaView>
          <View style={styles.safeAreaStyle}>
              {showLoader ? (
                <View
                  style={styles.mainViewStyle}>
                  <ActivityIndicator size={30} color='blue' />
                </View>
              ):<CustomFlatList reactApiResponse={reactApiResponse} url={newUrl}/>}
          </View>
        </SafeAreaView>
    )
}
export default NodeScreen;