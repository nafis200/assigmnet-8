import { useEffect, useState } from "react";
import { useLoaderData } from "react-router";
import { getBooks, getwish } from "../utility/Localstorage";
import { IoIosArrowDropdown } from "react-icons/io";
import { NavLink } from "react-router-dom";
import Listdetails from "./Listdetails";

const ListedBooks = () => {

  const Loaders = useLoaderData();
  const [data, setData] = useState([]);
  const [listdata, setListdata] = useState([]);
  const [display,setDisplay] = useState([])
  const [display1,setDisplay1] = useState([])
  const [tog, setTog] = useState(true)
  useEffect(() => {
    const stored = getBooks();
    if (Loaders.length > 0) {
      const Books = [];
      for (const id of stored) {
        const finds = Loaders.find((job) => job.bookId === id);
        if (finds) {
          Books.push(finds);
        }
      }
      setData(Books);
      setDisplay(Books)
    }
  }, []);

  useEffect(() => {
    const stored1 = getwish();
    if (Loaders.length > 0) {
      const Books1 = [];
      for (const id of stored1) {
        const finds1 = Loaders.find((job) => job.bookId === id);
        if (finds1) {
          Books1.push(finds1);
        }
      }
      setListdata(Books1);
      setDisplay1(Books1)
    }
  }, []);

  
    const showall = (check) =>{
       if(tog){
          let dataBooks = [...data]
          if(check === 'rating'){
              dataBooks.sort((a,b)=> b.rating - a.rating);
          }
          else if(check === 'pages'){
              dataBooks.sort((a,b)=>b.totalPages - a.totalPages);
          }
          else if('year'){
              dataBooks.sort((a,b)=>b.yearOfPublishing-a.yearOfPublishing )
          }
          setDisplay(dataBooks)
          
       } 
       else{
        let dataBooks = [...data]
        if(check === 'rating'){
            dataBooks.sort((a,b)=> b.rating - a.rating);
        }
        else if(check === 'pages'){
            dataBooks.sort((a,b)=>b.totalPages - a.totalPages);
        }
        else if('year'){
            dataBooks.sort((a,b)=>b.yearOfPublishing-a.yearOfPublishing )
        }
        setDisplay1(dataBooks)
       }
    }
 


  return (
    <div>

      <h1 className="text-4xl bg-gray-200 p-5">Books</h1>

      <section>
        <div className="dropdown dropdown-bottom ">
          <div tabIndex={0} role="button" className="btn m-1 bg-green-400 text-center lg:w-[100px] p-2 text-white">
            <span className=" flex items-center gap-2">Sort By <IoIosArrowDropdown className="lg:text-2xl"></IoIosArrowDropdown> </span>
          </div>
          <ul
            tabIndex={0}
            className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <a onClick={()=>showall('rating')}>Rating</a>
            </li>
            <li>
              <a onClick={()=>showall('pages')}>Number of pages</a>
            </li>
            <li>
              <a onClick={()=>showall('year')}>Publishing Year</a>
            </li>
          </ul>
        </div>
      </section>

     <section className="flex gap-5 mb-3 mt-10 lg:mt-0">
        <div onClick={()=>setTog(!tog)}>
            <NavLink className={
                tog === true && 'bg-green-500 lg:p-4'
            }> <span className="">Read books</span> </NavLink>
        </div>

        <div onClick={()=>setTog(!tog)}>
            <NavLink className={
                tog === false && 'bg-green-500 lg:p-4'
            }>WishList books</NavLink>
        </div>
     </section>
     <hr />

     {
        tog === true ? display.map(da => <Listdetails da={da}></Listdetails>) : display1.map(da => <Listdetails da={da}></Listdetails>)
     }
     

    </div>
  );
};

export default ListedBooks;
