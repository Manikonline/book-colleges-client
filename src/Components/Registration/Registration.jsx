
import  { useContext, useState } from 'react';

import './Registration.css'
import { AuthContext } from '../Providers/AuthProvider/AuthProvider';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet';



const Registration = () => {
 const location=useLocation()
 const navigate=useNavigate()
 const from=location?.state?.from?.pathname ||'/'
  const{createUser,updateUserData}=useContext(AuthContext)
  const [error, setError]=useState('');
  

  const handleRegister = event => {
      event.preventDefault();
      const form = event.target;
      const name = form.name.value;
      const photo = form.photo.value;
      const email = form.email.value;
      const password = form.password.value;

      console.log(name, photo, email, password)
      setError('');
      form.reset();

      createUser(email, password)
      .then(result=>{
          const loggedUser=result.user
          console.log(loggedUser)
          updateUserData(result.user, name, photo)
          navigate(from,{replace:true})

      })
      .catch(error=>{
          console.log(error)
          setError(error.message)
      })


     
  }
    


    return (
        
            <div className="hero min-h-screen bg-base-200">
               <Helmet>
                <meta charSet="utf-8" />
                <title>Registation-Book college</title>
                <link rel="canonical" href="http://mysite.com/example" />
            </Helmet>
  <div className="">
    <div className="text-center ">
      <h1 className="text-2xl mt-1 font-bold">Registration Now!</h1>
    </div>
    <div className="card w-full max-w-sm shadow-2xl bg-base-100">
      <form onSubmit={handleRegister}  className="card-body">
      <div className="form-control">
          <label className="label">
            <span className="label-text text-white">Name</span>
          </label>
          <input type="text" name="name" placeholder="name" className="text-black input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text text-white">Email</span>
          </label>
          <input type="email" name="email" placeholder="email" className="text-black input input-bordered"required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text text-white">Password</span>
          </label>
          <input type="password" name="password" placeholder="password" className="text-black input input-bordered"required />
        
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text text-white">Photo URL</span>
          </label>
          <input type="text"name="photo" placeholder="Photo URL" className=" text-black input input-bordered" required/>
        </div>
        <div className='text-red-600'>
          {error}
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-color ">Registration</button>
        </div>
              <label className="label">
                <p>Already have an account?<Link className='new-user-btn color ' to='/login'>Login</Link></p>
              </label>
      </form>
    </div>
  </div>
</div>
       
    );
};

export default Registration;