import { Navigate, useLoaderData, useNavigate, useParams } from "react-router";
import { NavLink } from "react-router-dom";
import Bookdetails from "./Bookdetails";



const Carddetails = () => {
    const details = useLoaderData();
    const {id} = useParams()
    const idINt = parseInt(id)
    
    const books = details.filter(book => book.bookId === idINt )

    
    return (
        <div>
          {
             books.map(book => <Bookdetails key={book.id} book={book} ></Bookdetails> )
          }
        </div>
    );
};

export default Carddetails;

