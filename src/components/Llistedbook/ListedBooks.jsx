import { useEffect, useState } from "react";
import { useLoaderData } from "react-router";
import { getBooks } from "../utility/Localstorage";

const ListedBooks = () => {
    const Loaders = useLoaderData()
    const [data, setData] = useState([])
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
    
    return (
        <div>
            <h1 className="text-2xl">hellow listed books:{data.length}</h1>
        </div>
    );
};

export default ListedBooks;