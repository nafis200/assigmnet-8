
import { IoLocationOutline } from "react-icons/io5";

import { IoMdPeople } from "react-icons/io";

import { MdOutlineFindInPage } from "react-icons/md";

const Listdetails = ({da}) => {
    const {bookId,bookName,author,image,review,totalPages,rating,category,publisher,yearOfPublishing,tags} = da
    return (
        <div className="mt-8 flex">
          
          <div className="flex-1">
            <img src={image} className="w-[300px]" alt="" />
          </div>

          <div className=" space-y-6">
            <h1 className="text-2xl font-extralight">{bookName}</h1>
            <h1 className="font-extralight">By: <span className=" font-bold text-xl">{author}</span> </h1>
            <div className="flex justify-between">
                <h1 className="text-xl font-extralight ml-24">Tags: <span className="  space-x-4">
                {
                    tags.map(x=> <button className="btn text-green-400 p-3">{x}</button> )
                } </span> </h1>
                <span className="flex gap-4"> <IoLocationOutline className="text-5xl items-center"></IoLocationOutline> Year of <br /> Publishing {yearOfPublishing} </span>
            </div>

            <div className="flex gap-20">
                <h1 className="flex gap-2"> <IoMdPeople className="text-3xl"></IoMdPeople> <span>Publisher:{publisher}</span> </h1>

                <h1 className="flex gap-2"> <MdOutlineFindInPage className="text-3xl"></MdOutlineFindInPage> <span>Pages:{totalPages}</span></h1>
            </div>

            <hr />

            <div className="flex gap-24">
                <button className="btn rounded-lg bg-sky-400 ">Category:{category}</button>

                <button className="btn rounded-lg bg-sky-400 ">Rating:{rating}</button>

                <button className="btn bg-green-400 text-white">View Details</button>

            </div>

          </div>

        </div>
    );
};

export default Listdetails;