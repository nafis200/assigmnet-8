



const getBooks = ()=>{
     const storedBooks = localStorage.getItem('book-list')
     if(storedBooks){
        return JSON.parse(storedBooks)
     }
     else{
        return []
     }
}

const getwish= ()=>{
    const storedBooks = localStorage.getItem('wish-list')
    if(storedBooks){
       return JSON.parse(storedBooks)
    }
    else{
       return []
    }
}



const savebooks = id =>{
    const stored = getBooks();
    const exist = stored.find(book => book === id)
    if(!exist){
        stored.push(id)
        localStorage.setItem('book-list',JSON.stringify(stored))
    }
}


const savewish = id=>{
    const stored = getwish();
    const exist = stored.find(book => book === id)
    if(!exist){
        stored.push(id)
        localStorage.setItem('wish-list',JSON.stringify(stored))
    }
}

export{savebooks,getBooks,getwish,savewish}