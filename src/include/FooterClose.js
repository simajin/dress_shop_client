import { useState } from "react";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";



export const FooterClose = ()=>{
    const { pathname } = useLocation();
    const [a,setA] = useState(0);
    const onChange = (e)=>{
        console.log(e.target)
    }
    useEffect(()=>{
        setA(0);
    },[pathname])
    return {a,onChange}
}