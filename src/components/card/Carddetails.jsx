import { Navigate, useLoaderData, useNavigate, useParams } from "react-router";
import { NavLink } from "react-router-dom";



const Carddetails = () => {
    const details = useLoaderData();
    const {id} = useParams()
    console.log(details,id);
    return (
        <div>
            <h1>hellow details</h1>
           

        </div>
    );
};

export default Carddetails;

