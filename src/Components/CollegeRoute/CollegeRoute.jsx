import { useEffect, useState } from "react";
import './CollegeRoute.css'
import { Link } from "react-router-dom";


const CollegeRoute = () => {
    const [colleges, setColleges]=useState([])

    useEffect(()=>{
        fetch('http://localhost:5000/allColleges')
        .then(res=>res.json())
        .then(data=>{
            console.log(data)
            setColleges(data)
        })
    },[])
    return (
        <div>
            <div className="text-center font-extrabold text-4xl my-5 text-color">College list</div>
            <div className="grid md:grid-cols-3 sm:grid-cols-1  ms-12">
            {
                colleges.map(college=><div key={college._id}><div className="card  w-80 mt-5 m-1 bg-base-100 shadow-xl image-full ">
                <figure><img className="image-size" src={college.college_image} alt="Shoes" /></figure>
                <div className="card-body">
                  <h2 className="card-title">{college.college_name}</h2>
                  <p className=""><span className="font-bold ">Rating:</span>:{college.rating}</p>
                  <p><span className="font-bold ">Research:</span>{college.number_of_research}</p>
                  <p><span className="font-bold ">Admision Date:</span>{college.admission_date}</p>
                  <div className="card-actions justify-end">
                    <Link to={`/allColleges/${college._id}`} className="btn btn-color btn-circle">Details</Link>
                  </div>
                </div>
              </div></div>)
            }
           
            </div>
        </div>
        
    );
};

export default CollegeRoute;