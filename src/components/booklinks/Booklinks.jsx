

const Booklinks = () => {
    return (
        <div className="grid grid-cols-2 gap-20">
            
            <div className="mt-5">
            <h3 className="text-2xl font-semibold flex ml-40 mb-5"> Web_development</h3>
            <iframe src="https://en.wikipedia.org/wiki/Web_development" width={600} height={400} frameborder="0"></iframe>
            </div>

            <div className="mt-5">
            <h3 className="text-2xl font-semibold flex ml-40 mb-5">python programming</h3>
            <iframe src="https://en.wikipedia.org/wiki/Python_(programming_language)" width={600} height={400} frameborder="0"></iframe>
            </div>

            <div className="mt-5">
            <h3 className="text-2xl font-semibold flex ml-40 mb-5">Java programming</h3>
            <iframe src="https://en.wikipedia.org/wiki/Java_(disambiguation)" width={600} height={400} frameborder="0"></iframe>
            </div>

            <div className="mt-5">
            <h3 className="text-2xl font-semibold flex ml-40 mb-5">Javascript programming</h3>
            <iframe src="https://en.wikipedia.org/wiki/JavaScript" width={600} height={400} frameborder="0"></iframe>
            </div>

           
        </div>
    );
};

export default Booklinks;

