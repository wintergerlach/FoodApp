import React, {useState} from 'react';
import {View, Text, StyleSheet, ScrollView} from 'react-native';
import SearchBar from '../components/SearchBar';
import useResults from '../hooks/useResults';
import ResultsList from '../components/ResultsList';


const SearchScreen = () =>{
    const [term, setTerm] = useState('')
    const[searchApi, results, error] = useResults();

    const filterResultsByPrice=(price)=>{
        return results.filter(result=>{
            return result.price === price;
        });
    };

    return <>
        <SearchBar 
            term={term} 
            onTermChange={newTerm =>setTerm(newTerm)}
            onTermSubmit={()=>searchApi(term)}
        />
        {error ? <Text>{error}</Text>: null}
        <ScrollView>
            <ResultsList 
                title = "Cost Effective"
                results={filterResultsByPrice('$')}
            />
            <ResultsList 
                title = "Bit Pricier"
                results={filterResultsByPrice('$$')}
            />
            <ResultsList 
                title = "Big Spender"
                results={filterResultsByPrice('$$$')}
            />
        </ScrollView>
    </>
};

const styles = StyleSheet.create({});

export default SearchScreen;