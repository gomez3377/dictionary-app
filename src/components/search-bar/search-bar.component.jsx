import { useContext, useState } from 'react';
import { ReactComponent as SearchIcon } from '../../assets/images/icon-search.svg'
import { DictionaryContext } from '../../context/dictionary.context';


const SearchBar = () => {

const {setWord} = useContext(DictionaryContext)

const [searchWord, setSearchWord] = useState("")

const handleChange = (e) => {
    e.preventDefault();
    setSearchWord(e.target.value)
}

const getDefinition = () => {
    setWord(searchWord)
    setSearchWord('')
}

  return (
    <div>

        <input type="text" name="word"  value={searchWord} onChange={handleChange} />
        <button type="submit" onClick={getDefinition}><SearchIcon/></button>
    </div>
  )
}

export default SearchBar