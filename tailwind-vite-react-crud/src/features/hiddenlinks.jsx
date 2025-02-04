import { Navigate } from "react-router"

export const ShowOnLogin = ({children})=>{
    if(sessionStorage.getItem("minicred") !=null){
        return children
    }
    else return null

}

export const ShowOnLogout = ({children})=>{
    if(sessionStorage.getItem("minicred") ==null){
        return children
    }
    else return null
}

export const Protected = ({children})=>{
    if(sessionStorage.getItem("minicred") !=null){
        let obj = JSON.parse(sessionStorage.minicred)
        if(obj.isLoggedIn && obj.role=="1") return children
        else return <Navigate to='/login' replace={true}/>
    }
    else return <Navigate to='/login' replace={true}/>
}

export const ProtectedAdmin = ({children})=>{
    if(sessionStorage.getItem("minicred") !=null){
        let obj = JSON.parse(sessionStorage.minicred)
        if(obj.isLoggedIn && obj.role=="0") return children
        else return <Navigate to='/' replace={true}/>
    }
    else return <Navigate to='/login' replace={true}/>
}