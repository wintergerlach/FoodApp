import React from 'react';
import {View, TextInput, StyleSheet,} from 'react-native';
import { Feather } from '@expo/vector-icons'; 

const SearchBar = ({term, onTermChange, onTermSubmit}) =>{
    return <View style={styles.background}>
        <Feather name="search" style={styles.icon} />
        <TextInput 
            autoCapitalize='none'
            autoCorrect={false}
            style = {styles.input}
            placeholder="Search"
            value ={term}
            onChangeText={onTermChange}
            onEndEditing={onTermSubmit}
        />
    </View>
};

const styles = StyleSheet.create({
    background:{
        marginTop: 10,
        backgroundColor: '#f0eeee',
        height: 50,
        borderRadius: 5,
        marginHorizontal: 15,
        flexDirection:'row'
    },
    input:{
        flex: 1,
        fontSize: 18
    },
    icon:{
        fontSize: 35,
        color:"black",
        alignSelf:'center',
        marginHorizontal: 15
    }
});

export default SearchBar;