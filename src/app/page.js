import Image from "next/image";
import heroImage from "../../public/hero.png"
export default function Home() {
  return (
    <>
      <div className="min-h-auto bg-[#F2F0F1] ">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 px-4 md:px-14 py-4">
          <div className="flex justify-center items-start flex-col gap-6">
            <h1 className="font-integrl text-4xl md:text-6xl  font-black leading-10 md:leading-14">FIND CLOTHES THAT MATCHES YOUR STYLE</h1>
            <p className="text-[#A9A8A8] font-roboto">
              Browse through our diverse range of meticulously crafted garments, designed to bring out your individuality and cater to your sense of style.
            </p>
            <div>
              <button className="bg-black px-10 py-2 md:px-14 md:py-3 rounded-4xl text-white text-lg border-2 border-black hover:bg-transparent hover:text-black transition-all duration-500 cursor-pointer">Shop Now</button>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 ">
              <div className="">
                <h2 className="font-bold font-roboto text-4xl">
                  200+
                </h2>
                <p className="text-[#A9A8A8] font-roboto">International Brands</p>
              </div>

              <div >
                <h2 className="font-bold font-roboto text-4xl">
                  2,000+
                </h2>
                <p className="text-[#A9A8A8] font-roboto">High Quality Products</p>
              </div>

              <div className="col-span-full md:col-span-1 mx-auto ">
                <h2 className="font-bold font-roboto text-4xl ">
                  30,000+
                </h2>
                <p className="text-[#A9A8A8] font-roboto">Happy Coustmers</p>
              </div>

            </div>
          </div>
          <div>
            <Image src={heroImage} height={500} width={500} alt="hero Image" />
          </div>
        </div>
      </div>
    </>
  );
}
