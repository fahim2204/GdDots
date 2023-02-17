
const NewsLetter = () => {
  return (
    <div id="newsletter" className="bg-gray-100 py-12">
      <div className="max-w-6xl mx-auto px-5">
        <div className="mb-8">
          <h3 className="text-4xl tracking-tight text-center">
            Join Our Newsletter
          </h3>
        </div>
        <form className="flex justify-center">
          <div className="max-w-3xl w-full">
            <input
              type="email"
              className="bg-white text-start border border-gray-300 text-gray-900 rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full py-4 px-5"
              placeholder="Submit Your Email Address"
            />
          </div>
          <button
            type="button"
            className="text-white hover:scale-105 bg-gradient-to-r from-orange-500 via-orange-500 to-orange-400 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300  font-medium rounded-lg text-sm px-5 py-0 text-center -ml-2  transition-all duration-300"
          >
            Subscribe
          </button>
        </form>
      </div>
    </div>
  );
};

export default NewsLetter;
