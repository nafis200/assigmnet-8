

import { FaRegStar } from "react-icons/fa";

const Card = () => {
    return (
        <div>
          
          {/* card1 */}
          <div className="card w-96 bg-base-100 shadow-xl">
  <figure><img src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes" /></figure>
  <div className="card-body">
   <div className="flex justify-start gap-4 -ml-6">
   <span className="badge bg-green-400 p-4 text-white">
       Young Adult
    </span>
    <span className="badge bg-green-400 p-4 text-white">Identity</span>
   </div>
    <p className="text-3xl font-bold -ml-6">The cather in rayer</p>
    <p className="font-extralight -ml-40">By:<span>Awlad Hossain</span></p>
    <hr/>
    <div className="card-actions justify-between">
      <div className="text-extralight -ml-4">Fiction</div> 
      <div className=""><span className="flex items-center gap-2">5.00<FaRegStar /></span> </div>
    </div>
  </div>
</div>

        </div>
    );
};

export default Card;