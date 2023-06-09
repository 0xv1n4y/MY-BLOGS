import { useState,useEffect } from "react";

const useWindowSize=()=>{
    const [windowsize,setWindowSize]=useState({
        width:undefined,
        height:undefined
    });
    useEffect(()=> {
        const windowResize=()=>{
            setWindowSize({
                width:window.innerWidth,
                height:window.innerHeight
            })
        }
        windowResize();
            window.addEventListener('resize',windowResize);

            const cleanup=()=>{
                console.log("You clen up")
                window.removeEventListener('resize' ,windowResize)
            }
            return cleanup;
    },[])
    return windowsize;
    
}

export default useWindowSize;
