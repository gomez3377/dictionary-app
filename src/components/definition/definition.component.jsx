import { useContext } from "react";

import { DictionaryContext } from "../../context/dictionary.context";
import { nanoid } from "nanoid";

import WordCard from "../word-card/word-card.component";
import Error from "../error/error.component";

const Definition = () => {
    const { definition } = useContext(DictionaryContext);

  return (
    <>
      {definition &&
  (Array.isArray(definition) 
    ? definition.map((result) => (
   <WordCard result={result} key={nanoid()} />
   )
   )
   : (<Error result={definition}/>)
   
   ) }
    </>
  );
};

export default Definition;
