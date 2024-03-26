import { useLoaderData } from "react-router";




const Newlist = () => {
    const Loaad = useLoaderData()
    console.log(Loaad);
    return (
        <div>
            <h2>hi</h2>
        </div>
    );
};

export default Newlist;