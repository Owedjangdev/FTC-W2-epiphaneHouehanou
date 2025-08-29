const Button = () => {
  return (
    <div className="mt-8 flex justify-center gap-4">
      <button className="bg-[#7C5CFC] hover:bg-purple-700 text-white font-semibold w-[187px] h-[52px] rounded-full transition duration-300">
        Get a Free Demo
      </button>
      <button className=" hidden md:flex bg-[#1A202C] text-center w-[141px] h-[52px] border-white hover:bg-white hover:text-gray-800 text-white font-semibold py-3 px-6 rounded-full transition duration-300">
        See Pricing
      </button>
    </div>
  );
};

export default Button;
