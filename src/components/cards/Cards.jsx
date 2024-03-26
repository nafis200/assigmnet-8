import Singlecard from "../card/Singlecard";




const Cards = ({lod}) => {
    return (
        <div className="lg:grid lg:grid-cols-3 lg:gap-6 mt-12">
            {
               lod.map(data=> <Singlecard key={data.id} data={data}></Singlecard> )
            }
        </div>
    );
};

export default Cards;

