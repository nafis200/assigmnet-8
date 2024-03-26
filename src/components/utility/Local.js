
const getwish = ()=>{
    const storedBooks = localStorage.getItem('wish-list')
    if(storedBooks){
       return JSON.parse(storedBooks)
    }
    else{
       return []
    }
}



const setwish = id =>{
   const stored = getBooks();
   const exist = stored.find(book => book === id)
   if(!exist){
       stored.push(id)
       localStorage.setItem('wish-list',JSON.stringify(stored))
   }
}

export{getwish,setwish}