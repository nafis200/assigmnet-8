

const Booklinks = () => {
    return (
        <div className="lg:grid grid-cols-1 lg:grid-cols-2 gap-20">
            
            <div className="mt-5">
            <h3 className="text-2xl font-semibold flex lg:ml-30  ml-20 mb-5"> Web_development</h3>
            <iframe src="https://en.wikipedia.org/wiki/Web_development" className="ml-5 lg:ml-0" lg:width={600} height={400} frameborder="0"></iframe>
            </div>

            <div className="mt-5">
            <h3 className="text-2xl font-semibold flex lg:ml-30 ml-20 mb-5">python programming</h3>
            <iframe src="https://en.wikipedia.org/wiki/Python_(programming_language)" lg:width={600} height={400} frameborder="0" className="ml-5 lg:ml-0"></iframe>
            </div>

            <div className="mt-5">
            <h3 className="text-2xl font-semibold flex lg:ml-30 ml-20 mb-5">Java programming</h3>
            <iframe src="https://en.wikipedia.org/wiki/Java_(disambiguation)" lg:width={600} height={400} frameborder="0" className="ml-5 lg:ml-0"></iframe>
            </div>

            <div className="mt-5">
            <h3 className="text-2xl font-semibold flex lg:ml-30 ml-20 mb-5">Javascript programming</h3>
            <iframe src="https://en.wikipedia.org/wiki/JavaScript" className="ml-5 lg:ml-0" lg:width={600} height={400} frameborder="0"></iframe>
            </div>

           
        </div>
    );
};

export default Booklinks;


