import { Button } from "@material-tailwind/react";

const Banner = () => {
  return (
    <>
      <section className="bg-fuchsia-200 w-full h-1/3 flex flex-column">
        {/* Text Background */}
        <div className="text-left ml-36 transform translate-y-1/4">
          <p className="text-xl font-medium ">Smart Products</p>
          <h1 className="text-7xl my-3">Summer Offer 2024 Collection</h1>
          <Button
            className="rounded-none border-2 border-black bg-transparent hover:bg-fuchsia-600 transition
                        duration-300
                        ease-in-out"
          >
            Shop Now
          </Button>
        </div>
        <div>
          <img src="./image/single-slide-hm1-2.png" className="h-auto" />
        </div>
      </section>
    </>
  );
};

export default Banner;
