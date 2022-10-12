import { useEffect } from "react";
import { useRef } from "react";


export const MenuClose = ()=>{
    const menuBtn = useRef();
    const burgerTabBtn1 = useRef();
    const burgerTabBtn2 = useRef();
    useEffect(()=>{
        console.log(menuBtn.current)
        menuBtn.current.style.right = '-650px';
        menuBtn.current.style.transition = '0.5s';
        setTimeout(() => {
            burgerTabBtn1.current.style.display = 'block';
            burgerTabBtn2.current.style.display = 'block';
        }, 300);
    })
    return {menuBtn, burgerTabBtn1, burgerTabBtn2}
}