import {useContext} from 'react'
import { UserContext } from './context/UserContext'


export default function Level4() {
    console.log(useContext(UserContext));
    console.log(UserContext);
    const val = useContext(UserContext)
    console.log(val);
    return (
        <div>
            <h2>level 4</h2>
            <p>{val.name},{val.email},{val.password}</p>
            
        </div>
    )
}
