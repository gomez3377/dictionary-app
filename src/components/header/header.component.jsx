import { ReactComponent as Logo } from '../../assets/images/logo.svg'
import { ReactComponent as DownArrow } from '../../assets/images/icon-arrow-down.svg'
import { ReactComponent as Moon } from '../../assets/images/icon-moon.svg'

const Header = () => {
  return (
    <div>
        <Logo/>
        <div className="font-selector">
        <div>Sans Serif</div>
        <DownArrow/>

        </div>
        <div className="dark-mode-element-container">
        <div className="dark-mode-button-container">
          <div className='dark-mode-button'></div>
        </div>
        <Moon/>
        </div>
    </div>
  )
}

export default Header