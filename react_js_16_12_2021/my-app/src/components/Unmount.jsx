import React,{useEffect} from 'react'

export default function Unmount() {

    useEffect(() => {
        return () => {
            console.log("unmount");
        }
    },[])
    return (
        <div>
            <p>hello</p>
            
        </div>
    )
}
