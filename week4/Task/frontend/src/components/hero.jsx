export default function Hero() {
    return (
      <div className="bg-gradient-to-r from-blue-700 to-blue-500 text-white text-center py-24 px-6">
        <h1 className="text-5xl font-extrabold">
          Welcome to{" "}
          <span className="text-red-300 drop-shadow-md">MyCart</span>
        </h1>
        <p className="mt-4 text-lg opacity-90">
          Unlock Top Deals on Must-Have Products – Shop Smart, Save Big!
        </p>
        <button className="mt-6 px-6 py-3 bg-orange-400 hover:bg-orange-500 text-white font-semibold rounded-lg shadow-md transition duration-300">
          Shop Now
        </button>
      </div>
    );
  }