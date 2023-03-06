import { useContext } from 'react'

import { DictionaryContext } from '../../context/dictionary.context'
import { nanoid } from 'nanoid'

import WordCard from '../word-card/word-card.component'

const Definition = () => {
    const {definition} = useContext(DictionaryContext)

    
    
  return (
    <>
       { definition &&
       definition.map(word => <WordCard searchedWord={word} key={nanoid()} />)}

    </>
  )
}

export default Definition