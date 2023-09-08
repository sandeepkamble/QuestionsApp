import React from "react"
import {Text, FlatList, TouchableOpacity,Linking,StyleSheet } from "react-native";

const CustomFlatList=({reactApiResponse,url,offset,})=>{
    return(
    <FlatList
      initialNumToRender={20}
      data={reactApiResponse}
      keyExtractor={(item) => item.question_id}
      renderItem={({item,index})=>{
        return(
                <TouchableOpacity onPress={()=>{
                                    Linking.openURL(item.link)
                                    .then(()=>{})
                                    .catch(()=>{})
                                    }} 
                                    style={styles.toucableStyle}>
                        <Text style={{fontSize:16,color:'black'}}>
                            {index+1}. {item.title}
                        </Text>
                </TouchableOpacity>
            )}
        }
    />)}

    const styles = StyleSheet.create({
        toucableStyle:{
            marginHorizontal:20,
            marginVertical:10,
            padding:5,
            elevation:2,
            justifyContent:'center'
        }
    })
      
export default CustomFlatList