import React,{useEffect,useState} from "react";
import CustomFlatList from "../custom_components/CustomFlatList";
import {View,Text, SafeAreaView, FlatList, TouchableOpacity,Linking,ActivityIndicator  } from "react-native";
const ReactNativeScreen=()=>{
    const [reactApiResponse,setReactApiResponse] = useState([])
    const [showLoader, setShowLoader] = useState(false);
    const r = "https://api.stackexchange.com/2.3/questions?page=1&pagesize=100&fromdate=1683504000&todate=1694044800&order=asc&sort=activity&tagged=react_native&site=stackoverflow"
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
  <View style={{height:'100%',width:'100%',backgroundColor:'white',}}>
  
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
export default ReactNativeScreen;