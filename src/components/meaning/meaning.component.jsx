import { nanoid } from "nanoid";

const Meaning = ({ meaning }) => {
  const { partOfSpeech, definitions, synonyms } = meaning;
  return (
    <div>
      <h3>{partOfSpeech}</h3>

      <div className="meaining-list">
        <h4>Meaning</h4>
        <ul>
          {definitions.map((meaning) => (
            <li key={nanoid()}>{meaning.definition}</li>
          ))}
        </ul>
      </div>
      <div className="synonyms-list">
        <h4>Synonyms</h4>
        <ul>
          {synonyms.map((synonym) => (
            <li>{synonym}</li>
          ))}
        </ul>
      </div>
     
    </div>
  );
};

export default Meaning;
