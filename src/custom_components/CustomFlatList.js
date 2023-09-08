import React from "react"
import { View,Text, SafeAreaView, FlatList, TouchableOpacity,Linking,ActivityIndicator } from "react-native";

const CustomFlatList=({reactApiResponse,url,offset,})=>{
    return(
    <FlatList
      initialNumToRender={20}
      data={reactApiResponse}
      keyExtractor={(item) => item.question_id}
      maxToRenderPerBatch={20}
      // onEndReached={()=>{
          // setShowLoader(true);
          //   fetch("https://api.stackexchange.com/2.3/questions?page=1&pagesize=50&fromdate=1683504000&todate=1694044800&order=asc&sort=activity&tagged=react&site=stackoverflow")
          //     .then((newQuestions) => {
          //       setShowLoader(false);
                
          //         setReactApiResponse(
          //           [...reactApiResponse, ...newQuestions.items] || [],
          //         )
              
          //     })
          //     .catch((error) => {
          //       setShowLoader(false);
          //       console.log(error, '---->er');
          //     });
      // }}
      renderItem={({item,index})=>{
        return(
                <TouchableOpacity onPress={()=>{
                                    Linking.openURL(item.link)
                                    .then(()=>{})
                                    .catch(()=>{})
                                    }} 
                                    style={{marginHorizontal:20,marginVertical:10,padding:5,elevation:2,justifyContent:'center'}}>
                        <Text style={{fontSize:16,color:'black'}}>
                            {index+1}. {item.title}
                        </Text>
                </TouchableOpacity>
            )}
        }
    />)}
      
export default CustomFlatList