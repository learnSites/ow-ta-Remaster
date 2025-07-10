import './popup.css';

export default function Popups({action}){
    
    return(
        <>
            <div className={action}>
                <div className='topSection'>
                    <div style={{height: '100px'}}>
                        <img className='profileSrc' src="/asset/fun.jpg" alt="" />
                    </div>
                    <div className='linkWords'>
                        Profile
                    </div>
                    <div className='lineEnd'></div>
                    <div className='linkWords'>
                        Security management
                    </div>
                    <div className='lineEnd'></div>
                    <div className='linkWords'>
                        Settings
                    </div>
                    <div className='lineEnd'></div>
                    <div className='linkWords'>
                        Privacy Policy
                    </div>
                </div>
                <div className='bottomSection'>
                    <div>
                        <button className='anotherLog'>Login Another Account</button>
                    </div>
                    <div style={{height: '32px'}}>
                        <button className='logOut'>Logout</button>
                    </div>
                </div>
            </div>
        </>
    );
}