import { useEffect, useState } from "react";
import { useLoaderData } from "react-router";
import { getBooks, getwish } from "../utility/Localstorage";

const ListedBooks = () => {
    const Loaders = useLoaderData()
    const [data, setData] = useState([])
    const[listdata,setListdata] = useState([])
    useEffect(()=>{
         const stored = getBooks()
         if(Loaders.length > 0){
             const Books = [];
             for(const id of stored){
                const finds = Loaders.find(job => job.bookId === id)
                if(finds){
                    Books.push(finds);
                }
             }
             setData(Books)
         }
    },[])

    useEffect(()=>{
        const stored1 = getwish()
         if(Loaders.length > 0){
             const Books1 = [];
             for(const id of stored1){
                const finds1 = Loaders.find(job => job.bookId === id)
                if(finds1){
                    Books1.push(finds1);
                }
             }
             setListdata(Books1)
         }
    },[])
    
    return (
        <div>
            <h1 className="text-2xl">hellow listed books:{data.length}</h1>
            <h1 className="text-2xl">List data:{listdata.length}</h1>
        </div>
    );
};

export default ListedBooks;