const Footer = () => {
  return (
    <>
      <img src="./src/assets/wave.svg" alt="" />
      <div
        className="container flex flex-row justify-around w-full py-10 mx-auto font-semibold font-Inter"
        id="contact"
      >
        <div className="w-full text-2xl">
          <h1 className="mb-10 text-center">Social Media</h1>
          <div className="flex flex-row justify-center space-x-6 w-100 h-14">
            <img src="./src/assets/social/linkedin.png" alt="" />
            <img src="./src/assets/social/github.png" alt="" />
            <img src="./src/assets/social/instagram.png" alt="" />
          </div>
        </div>
        <div className="w-full">
          <h2 className="mb-4 text-2xl text-center">
            If you have any suggestions, please let me know
          </h2>
          <textarea
            type="text"
            className="w-full p-4 border rounded-md border-dark-green h-36"
            placeholder=" suggestion ..."
          />
          <button
            className="p-2 px-10 text-white rounded-md bg-dark-green"
            onClick={() => alert("Thank you for your suggestion")}
          >
            Send
          </button>
        </div>
      </div>
    </>
  );
};

export default Footer;
