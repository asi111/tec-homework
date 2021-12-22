import React from 'react'
import { UserContext } from './context/UserContext'
import Level2 from './level2'

export default function Level1() {

    const user ={
        name:"qwe",
        email:"qwe@qwe.com",
        password:12345
    }
    return (
        <div>
            <h2>level 1</h2>
            <UserContext.Provider value={user}>
                <Level2/>
            </UserContext.Provider>
            
        </div>
    )
}
