import { useContext } from "react";
import { AuthContext } from "../Providers/AuthProvider/AuthProvider";
import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";



const ApplyForm = () => {
   const data=useLoaderData()
   console.log('heloooooooooo', data)
    const {user}=useContext(AuthContext)
  

  const handleRegister = event => {
      event.preventDefault();
      const form = event.target;
      const collegeName = form.collegeName.value;
      const name = form.name.value;
      const email = form.email.value;
      const phoneNumber =  form.phoneNumber.value;
      const subject = form.subject.value;
      const dateOfBirth = form.dateOfBirth.value;
      const photo = form.photo.value;
      const userdata={
        collegeName,name,phoneNumber,subject,dateOfBirth,  photo, email
      }


      console.log(collegeName, name)
      fetch('http://localhost:5000/userInfo',{
        method:"POST",
        headers:{
            'content-type':'application/json'
        },
        body:JSON.stringify(userdata)
      })
      .then(res=>res.json())
      .then(data=>{
        console.log(data)
        if(data.insertedId){
            Swal.fire({
                position: 'top-end',
                icon: 'success',
                title: 'Your work has been saved',
                showConfirmButton: false,
                timer: 1500
              })
        }
      })
      
      form.reset();

  }
    


    return (
        
            <div className="hero min-h-screen bg-base-200 py-6">
  <div className="">
    
    <div className="card w-full max-w-sm shadow-2xl bg-base-100">
    <div className="text-center ">
      <h1 className="text-2xl  text-color mt-4 font-bold">Application Form</h1>
    </div>
      <form onSubmit={handleRegister}  className="card-body">
        
      <div className="form-control">
          <label className="">
            <span className="label-text text-color">College Name</span>
          </label>
          <input type="text" name="collegeName" placeholder="College Name" className="text-color input input-bordered" defaultValue={data?.college_name} readOnly />
        </div>
      <div className="form-control">
          <label className="">
            <span className="label-text text-color">Candidate Name</span>
          </label>
          <input type="text" name="name" placeholder="name" className="text-color input input-bordered" defaultValue={user?.displayName} readOnly  />
        </div>
        <div className="form-control">
          <label className="">
            <span className="label-text text-color">Email</span>
          </label>
          <input type="email" name="email" placeholder="email" className="text-color input input-bordered"defaultValue={user?.email} readOnly  />
        </div>
        <div className="form-control">
        <label className="">
            <span className="label-text text-color">Phone Number</span>
          </label>
          <input type="text" name="phoneNumber" placeholder="Phone Number" className="text-color input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="">
            <span className="label-text text-color">Subject</span>
          </label>
          <input type="text" name="subject" placeholder="Subject Name" className="text-color input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="">
            <span className="label-text text-color">Date Of Birth</span>
          </label>
          <input type="date" name="dateOfBirth" placeholder="Date Of Birth" className="text-colorinput input-bordered"required />
        
        </div>
        <div className="form-control">
          <label className="">
            <span className="label-text text-color">Photo URL</span>
          </label>
          <input type="text"name="photo" placeholder="Photo URL" className=" text-color input input-bordered" required/>
        </div>
    
        <div className="form-control mt-6">
          <button className="btn btn-color ">Submit</button>
        </div>
      </form>
    </div>
  </div>
</div>
       
    );
};

export default ApplyForm;