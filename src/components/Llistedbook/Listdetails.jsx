
import { IoLocationOutline } from "react-icons/io5";

import { IoMdPeople } from "react-icons/io";

import { MdOutlineFindInPage } from "react-icons/md";
import { NavLink } from "react-router-dom";

const Listdetails = ({da}) => {
    const {bookId,bookName,author,image,review,totalPages,rating,category,publisher,yearOfPublishing,tags} = da
    return (
        <div className="mt-8 lg:flex">
          
        <div className="lg:flex-1">
            <img src={image} className="lg:w-[300px] w-[150px] ml-20 lg:ml-0" alt="" />
          </div>

          <div className=" space-y-6 card bg-base-100">
            <h1 className="text-2xl font-extralight">{bookName}</h1>
            <h1 className="font-extralight">By: <span className=" font-bold text-xl">{author}</span> </h1>
            <div className="lg:flex justify-between">
                <h1 className="text-xl font-extralight lg:ml-24">Tags:  <span className="  space-x-4">
                {
                    tags.map(x=> <button className="btn  text-green-400 p-3 mt-5 lg:mt-0">{x}</button> )
                } </span> </h1>
                <span className="flex gap-4 mt-5 lg:mt-0"> <IoLocationOutline className="lg:text-5xl items-center ml-20 lg:ml-0 mt-5 lg:mt-0"></IoLocationOutline> Year of <br /> Publishing {yearOfPublishing} </span>
            </div>

            <div className="lg:flex gap-20">
                <h1 className="flex gap-2 ml-20 lg:ml-0"> <IoMdPeople className="text-3xl"></IoMdPeople> <span>Publisher:{publisher}</span> </h1>

                <h1 className="flex gap-2 ml-24 lg:ml-0 mt-5 lg:mt-0"> <MdOutlineFindInPage className="text-3xl"></MdOutlineFindInPage> <span>Pages:{totalPages}</span></h1>
            </div>

            <hr />

            <div className="lg:flex gap-24 grid grid-cols-1 ml-5 lg:ml-0">
                <button className="btn rounded-lg bg-sky-400 ">Category:{category}</button>

                <button className="btn rounded-lg bg-sky-400 ">Rating:{rating}</button>

                <NavLink to={`/detail/${bookId}`}> <button className="btn bg-green-400 text-white">View Details</button> </NavLink>

            </div>

          </div>
        </div>
    );
};

export default Listdetails;