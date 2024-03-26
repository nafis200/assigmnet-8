import Booktags from "./Booktags";



const Bookdetails = ({book}) => {
    const {bookId,bookName,author,image,review,totalPages,rating,category,tags,publisher,yearOfPublishing} = book
    return (
        <div className="mt-20">
          
         <section className="flex gap-4">

           <div className="flex-1">
              <img src={image} alt="" />
           </div>   

           <div className=" space-y-2 flex-1">
             <p className="text-3xl">{bookName}</p>
             <p className="font-extralight">By:{author}</p>
             <hr />
             <p className="font-extralight p-3">{category}</p>
             <hr />
             <p> <span className="text-2xl">Review:</span>{review} </p>
             <p className="flex"><span className="text-2xl font-bold mr-5 mt-2 mb-5">Tags: </span> <span className="flex font-extralight gap-5 items-center mt-1">
                 {
                    tags.map(data=> <Booktags data={data}></Booktags>)
                 }
                </span></p>
                <hr />
               <div className=" space-y-3">
                <p className="mt-5 flex justify-start"> <span className="font-extralight">Number of pages: </span> <span>  {totalPages}</span> </p>
                <p className="flex justify-start"> <span className="font-extralight">Publisher: </span> <span>  {publisher}</span> </p>                
                <p className="flex justify-start"> <span className="font-extralight">Year of Publishing: </span> <span>  {yearOfPublishing}</span> </p>                
                <p className="flex justify-start"> <span className="font-extralight">Rating: </span> <span>  {rating}</span> </p>                

               </div>
              
              <div className=" flex gap-5">
              <button className="btn p-4 text-center mt-8 w-[100px]">Read</button>
          <button className="btn p-4 text-center bg-blue-500 mt-8 w-[100px] text-white">Wishlist</button>
         
              </div>

           </div>
             
         </section>  

        </div>
    );
};

export default Bookdetails;


