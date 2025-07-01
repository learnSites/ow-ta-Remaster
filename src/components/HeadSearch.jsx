import './HeadSearch.css';
import Profile from './popupProfile';
import Menu from './menu';

export default function HeadSearch(){
    return(
        <div className="header">
            <Menu />
            <div className='searchDiv'>
                <input className='inputFields' type="text" placeholder='Search' />
            </div>
            <Profile/>
        </div>
    )
}
