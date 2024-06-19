import { useState } from "react"
import {auth,googleProvider} from "../config/firebase"
import {createUserWithEmailAndPassword,signInWithPopup,signOut} from 'firebase/auth'


export const Auth = ()=>{
const [email,setEmail] = useState("");
const [password,setPassword] = useState("");

// console.log(auth?.currentUser?.photoURL); To get uses's pfp
    const signIn = async ()=>{
        try{
        await createUserWithEmailAndPassword(auth,email,password)
    }catch(e){
        console.error(e)
    }
    };
    const signInWithGoogle = async()=>{
        try{
            await signInWithPopup(auth,googleProvider)
        }catch(e){
            console.error(e)
        }
    }
    const signOut = async()=>{
        try{
            await signInWithPopup(auth)
        }catch(e){
            console.error(e)
        }
    }
    return(
        <div>
            <input placeholder="Email" onChange={(e)=>setEmail(e.target.value)}/>
            <input placeholder="Password" type="password" onChange={(e)=>setPassword(e.target.value)}/>
            <button onClick={signIn}>Sign In</button>
            <button onClick={signInWithGoogle}>Sign In with Google</button>
            <button onClick={signOut}>Log Out</button>
        </div>
    )
}