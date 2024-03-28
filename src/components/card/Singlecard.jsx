import { FaRegStar } from "react-icons/fa";
import { NavLink } from "react-router-dom";

const Singlecard = ({data}) => {
    const {bookName,author,image,rating,bookId} = data;
    
    
    return (
        <div>

           {/* card1 */}
          <NavLink to ={`/detail/${bookId}`}>
          <div className="card w-96 bg-base-100 shadow-xl">
        <figure>
          <img
            src={image}
            alt="Shoes" className="lg:h-[450px] h-[200px]"
          />
        </figure>
        <div className="card-body">
          <div className="lg:flex justify-start gap-4 -ml-6">
            <span className="badge bg-green-400 p-4 text-white mr-2 lg:mr-0">
              Young Adult
            </span>
            <span className="badge bg-green-400 p-4 text-white">Identity</span>
          </div>
          <p className="lg:text-3xl text-2xl font-bold -ml-6">{bookName}</p>
          <p className="font-extralight lg:-ml-40">
            By:<span>{author}</span>
          </p>
          <hr />
          <div className="card-actions justify-between">
            <div className="text-extralight lg:-ml-4">Fiction</div>
            <div className="">
              <span className="flex items-center gap-2">
                {rating}
                <FaRegStar />
              </span>
            </div>
          </div>
        </div>
      </div>  
          </NavLink>
        

        </div>
    );
};

export default Singlecard;