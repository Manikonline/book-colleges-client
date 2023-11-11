import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import './Admission.css'
import { Helmet } from "react-helmet";

const Admission = () => {
    const [collegesInfo, setCollegesInfo] = useState([])


    useEffect(() => {
        fetch('https://book-college-server-1neisge2c-manikonline.vercel.app/allColleges')
            .then(res => res.json())
            .then(data => {
                console.log(data)
                setCollegesInfo(data)
            })
    }, [])
    return (
        <div>
             <Helmet>
                <meta charSet="utf-8" />
                <title>Admission-Book college</title>
                <link rel="canonical" href="http://mysite.com/example" />
            </Helmet>
            <div className="text-center">
                <h3 className="font-extrabold text-color text-4xl py-2">College list</h3>
                <p className="text-center color">Choice your college...</p>
                <p className="background-color my-2 pt-1"><marquee behavior="" direction="">To apply to the college of your choosing, click on the college name.  ----  ---- ---- ---- To apply to the college of your choosing, click on the college name.</marquee></p>
            </div>
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead className="background-color">
                        <tr>
                            <th className="color text-2xl font-bold">#</th>
                            <th className="color text-2xl font-bold">College Name</th>
                           
                        </tr>
                    </thead>
                    <tbody>
                        {
                            collegesInfo.map((collegeInfo,index)=><><tr>
                                <th className="text-color font-bold">{index+1}</th>
                                <td className="text-color font-extrabold hover-effect"><Link to={`/applyForm/${collegeInfo?._id}`}>{collegeInfo.college_name}</Link></td>
                              
                            </tr></>)
                        }
                      
                      
                      
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Admission;
