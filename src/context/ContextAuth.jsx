import React, {useState, useContext} from "react"
import "./context.css"
import {createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword, onAuthStateChanged, signOut} from "firebase/auth"

const AuthContext = React.createContext()

export const AuthProvider = ({children})=>{

    const [createUser, setCreateUser] = useState({})
    const [loginUser, setLoginUser] = useState({})
    const[err, setErr] = useState()
    const[isAuth, setIsAuth] = useState(false)
    const[user, setUser] = useState()
    const auth = getAuth()

    const onChangeSignUp=(evt)=>{
        setCreateUser({
            ...createUser,
            [evt.target.name]: evt.target.value
        })
    }
    
    const onSubmitSignUp=(e)=>{
        e.preventDefault();  

        if(createUser.email!=="" && createUser.password!==""){
        createUserWithEmailAndPassword(auth, createUser?.email, createUser?.password)
        .then(()=> alert("Usuario Creado"))
        .catch((err)=>setErr(err.message))

    }else{ 
        alert("Llena los campos")
    }
}


    const onChangeLogIn=(evt)=>{
        setLoginUser({
            ...loginUser,
            [evt.target.name]: evt.target.value
        })
    }

    const onSubmitLogIn=(e)=>{
        e.preventDefault();
        if(loginUser.email!=="" && loginUser.password!==""){
        signInWithEmailAndPassword(auth, loginUser?.email, loginUser?.password)
        .then((userCredential)=> console.log(userCredential))
        
    }else{ 
        alert("Llena los campos")
    }
  }
    
  onAuthStateChanged(auth, (user)=>{
    if(user){
        setUser(user)
        setIsAuth(true)
    }else{
        setIsAuth(false)
    }
})


const logOut =()=>{
    signOut(auth)
    .then(()=>{
        alert(`Adiós ${user.email}`)
    })
}  

        return(
        <AuthContext.Provider value={{user, logOut}}> 
            {
                isAuth 
                ? children
                : <div>
                <form  className="form-auth">
        <h1>Crear Cuenta</h1>
        <input type="text" placeholder="Usuario" name="email" onChange={onChangeSignUp}/>            
        <input type="text" placeholder="Password" name="password" onChange={onChangeSignUp}/>
        
        <button type="submit" onClick={onSubmitSignUp}>Sign up</button>
        {err && <p>{`${err}`}</p>}
    </form>    
    <form  className="form-auth">
        <h1>Login</h1>
        <input type="text" placeholder="Usuario" name="email" onChange={onChangeLogIn}/>            
        <input type="text" placeholder="Password" name="password" onChange={onChangeLogIn}/>
        <button type="submit" onClick={onSubmitLogIn}>Log in</button>
        
    </form>
            </div>             
            }     
        </AuthContext.Provider>
        )    
    }
export function useDataUser(){
    return useContext(AuthContext).user
}


export function useLogOut(){
    return useContext(AuthContext).logOut
}

export default AuthContext