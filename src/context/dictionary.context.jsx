import { createContext, useEffect, useState } from "react";




export const DictionaryContext = createContext({
    definition:"",
    word:"",
    setWord:() => {}
})


export const DictionaryProvider = ({ children }) => {
    const [word, setWord] = useState("")
    const [definition, setDefinition] = useState()
    const url  ='https://api.dictionaryapi.dev/api/v2/entries/en/'
    useEffect(()=> {
        
        if(word) {

            fetch(`${url}${word}`)
            .then((response) => response.json())
            .then((data) => setDefinition(data))
        }
    }, [word])


    const value ={
        word,
        setWord,
        definition
    }
console.log(definition)

    return <DictionaryContext.Provider value={value}>{children}</DictionaryContext.Provider>
}