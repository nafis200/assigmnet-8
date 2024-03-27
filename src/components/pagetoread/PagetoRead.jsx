import { useLoaderData } from "react-router";

import React, { useEffect, useState } from 'react';
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid } from 'recharts';
import { getBooks } from "../utility/Localstorage";

const colors = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', 'red', 'pink'];

const getPath = (x, y, width, height) => {
    return `M${x},${y + height}C${x + width /3},${y + height} ${x + width /2},${y + height / 3}
    ${x + width / 2}, ${y}
    C${x + width / 2},${y + height / 3} ${x + (2 * width) / 3},${y + height} ${x + width}, ${y + height}
    Z`;
  };
  
  const TriangleBar = (props) => {
    const { fill, x, y, width, height } = props;
  
    return <path d={getPath(x, y, width, height)} stroke="none" fill={fill} />;
  };


const PagetoRead = () => {
    const Loaders = useLoaderData();
    const [data,setData] = useState([]);

    useEffect(()=>{
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
        }
    },[])
    
    return (
        <div className="mt-8">
            
            <BarChart
      width={1200}
      height={500}
      data={data}
      margin={{
        top: 20,  
        bottom: 5,
      }}
    >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="bookName" />
      <YAxis />
      <Bar dataKey="totalPages" fill="#8884d8" shape={<TriangleBar />} label={{ position: 'top' }}>
        {data.map((entry, index) => (
          <Cell key={`cell-${index}`} fill={colors[index % 20]} />
        ))}
      </Bar>
    </BarChart>

        </div>
    );
};


export default PagetoRead;



