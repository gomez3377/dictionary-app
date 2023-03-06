import { nanoid } from 'nanoid'
import { ReactComponent as PlayAudioIcon } from '../../assets/images/icon-play.svg'
import Meaning from '../meaning/meaning.component'

const WordCard = ({result}) => {
    const {word, phonetic, meanings, sourceUrls} = result
  return (
    <div className="word-container">
            <div className="word-info">
                <h1 className='word'>{word}</h1>
                <h4 className='pronounicination'>{phonetic}</h4>
            </div>
            <button className='audio'><PlayAudioIcon/></button>
           {meanings.map((meaning) => <Meaning key={nanoid()} meaning={meaning}/>)}
           <div className="source-list">
        <h5>Source</h5>
            <ul>{sourceUrls.map(url => <li key={nanoid()}><a href={url}>{url}</a></li>)}</ul>
      </div>
        </div>
  )
}

export default WordCard