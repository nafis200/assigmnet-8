import { Navigate, useLoaderData, useNavigate, useParams } from "react-router";
import { NavLink } from "react-router-dom";



const Carddetails = () => {
    const details = useLoaderData();
    const {id} = useParams()
    const idINt = parseInt(id)
    
    const books = details.filter(book => book.bookId === idINt )
    
    return (
        <div>

          <div>
            
            
        </div>  

        </div>
    );
};

export default Carddetails;

