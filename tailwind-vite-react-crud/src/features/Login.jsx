import React, { useRef,useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { Link, useLocation, useNavigate } from 'react-router'
import { toast } from 'react-toastify'

const Login = () => {
  const location = useLocation()
  const redirect = useNavigate()
  console.log(location)
  const {register,trigger,formState: { errors }, handleSubmit,getValues ,setFocus} = useForm()

   const loginUser =async()=>{
    let {email,password} =getValues()
   try{
    const res = await fetch(`${import.meta.env.VITE_BASE_URL}/users?email=${email}`)//query string
    const data = await res.json()
    if(data.length==0) toast.error("invalid credentials")
    else if(data[0].password != password )toast.error("invalid credentials")
    else {
        toast.success("loggedIn successfully")
        let obj= {isLoggedIn:true , email:email , username:data[0].username, role: data[0].role}
        sessionStorage.setItem("minicred",JSON.stringify(obj))
        if(data[0].role=="1") 
          // redirect('/')
        location?.state ? redirect(location.state.path)  : redirect('/')
        else if(data[0].role=="0") redirect('/admin')
    } 
   }
   catch(err){toast.error(err.message)}
  }
  useEffect(()=>{    
    setFocus('email')
  },[])
  return (
    <div className="flex min-h-full flex-1 flex-col mt-15 justify-center px-6 py-12 lg:px-8">
    <div className="sm:mx-auto sm:w-full sm:max-w-sm">
      <h2 className="text-center text-2xl/9 font-bold tracking-tight text-gray-900">
      Login Page
      </h2>
    </div>

    <div className="mt-5 sm:mx-auto sm:w-full sm:max-w-sm">
      <form className="space-y-6" onSubmit={handleSubmit(loginUser)}>
        <div>
          <label htmlFor="email" className="block text-sm/6 font-medium text-gray-900">
            Email address
          </label>
          <div className="mt-2">
            <input name="email" type="text"
                {...register("email" , {required:"email is required" , 
              pattern:{value:/^[\w\.]+\@[\w]+\.[a-zA-Z]{3}$/ , message:"Invalid Email"}
               })} 
            onBlur={()=>trigger('email')}
            className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
           
           />
           {errors.email && <span className='text-red-700'>{errors.email.message}</span>}
          </div>
        </div>
        <div>
          <label htmlFor="password" className="block text-sm/6 font-medium text-gray-900">
            Password
          </label>
          <div className="mt-2">
            <input name="password" type="password"
            className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
            {...register("password" , {required:"password is required" })} 
            onBlur={()=>trigger('password')}
           />
            {errors.password && <span className='text-red-700'>{errors.password.message}</span>}
          </div>
        </div>
       
        <div>
          <button
            type="submit"
            className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm/6 font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            Sign in
          </button>
        </div>
      </form>

      <p className="mt-10 text-center text-sm/6 text-gray-500">
        not a member?&nbsp;
        <Link to='/register' className="font-semibold text-indigo-600 hover:text-indigo-500">
         create account
        </Link>
      </p>
    </div>
  </div>
  )
}

export default Login
