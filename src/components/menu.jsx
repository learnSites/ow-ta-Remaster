import './menu.css';
import React,{useState, useEffect, useRef} from 'react';

export default function Menu(){
    let [open , setOpen] = useState(false);
    let popupRdf = useRef(null);

    useEffect(()=>{
        function handleOpen(event){
            if(popupRdf.current && !popupRdf.current.contains(event.target)){
                setOpen(false);
            }
        }

        document.addEventListener('mousedown' , handleOpen);
        return (()=>{
            document.removeEventListener('mousedown',handleOpen);
        });
    },[]);

    return(
        <div ref={popupRdf} onClick={() =>{setOpen(true)}} className='headMenu'>
            <span></span>
            <span></span>
            <span></span>
            {open && (
                <div className='popupMenu'>
                    <div>hi bro</div>
                </div>
            )}
        </div>

    );
}