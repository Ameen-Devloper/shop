import Image from "next/image";
import heroImage from "../../public/hero.png"
import img1 from "../../public/versace.png"
import img2 from "../../public/zara-logo-1 1.png"
import img3 from "../../public/gucci.png"
import img4 from "../../public/calvin.png"
import img5 from "../../public/prada.png"
import ProductCard from "@/components/ProductCard";
import productImage1 from "../../public/image 8.png";
import casualImage from "../../public/image 11.png"
import formalImage from "../../public/image 13.png"
import PartyImage from "../../public/image 12.png"
import gymImage from "../../public/image 14.png"
import SliderSection from "@/components/SiderSection"

export default function Home() {
  const products = [
    {
      id: 1,
      title: "T-shirt with Tape Details",
      price: 120,
      originalPrice: null,
      discount: null,
      rating: 4.5,
      image: productImage1,
    },
    {
      id: 2,
      title: "Skinny Fit Jeans",
      price: 240,
      originalPrice: 260,
      discount: "20%",
      rating: 3.5,
      image: productImage1,
    },
    {
      id: 3,
      title: "Checkered Shirt",
      price: 180,
      originalPrice: null,
      discount: null,
      rating: 4.5,
      image: productImage1,
    },
    {
      id: 4,
      title: "Sleeve Striped T-shirt",
      price: 130,
      originalPrice: 160,
      discount: "30%",
      rating: 4.5,
      image: productImage1,
    },
  ];



  return (
    <>
      <div className="min-h-auto bg-[#F2F0F1] ">
        <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 px-4 md:px-14 py-4">
          <div className="flex justify-center items-start flex-col gap-6">
            <h1 className="font-integrl text-4xl md:text-6xl  font-black leading-10 md:leading-14">FIND CLOTHES THAT MATCHES YOUR STYLE</h1>
            <p className="text-[#A9A8A8] font-roboto">
              Browse through our diverse range of meticulously crafted garments, designed to bring out your individuality and cater to your sense of style.
            </p>
            <div>
              <button className="bg-black px-10 py-2 md:px-14 md:py-3 rounded-4xl text-white text-lg border-2 border-black hover:bg-transparent hover:text-black transition-all duration-500 cursor-pointer">Shop Now</button>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 w-full">
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
          <div className="flex justify-center items-center">
            <Image src={heroImage} height={500} width={500} alt="hero Image" />
          </div>
        </div>
      </div>
      <div className="bg-black">
        <div className="container mx-auto grid grid-cols-2 md:grid-cols-2 lg:grid-cols-5 gap-8 py-8 place-items-center px-14">
          <Image src={img1} height={160} width={160} alt="vaersace logo" className="h-[150] w-[150] lg:h-lg lg:w-lg object-cover" />
          <Image src={img2} height={120} width={120} alt="Zara logo" className="h-[20] w-[20] lg:h-[150] lg:w-[150] object-cover" />
          <Image src={img3} height={180} width={180} alt="prada logo" className="h-[150] w-[150] lg:h-xl lg:w-xl object-cover" />
          <Image src={img4} height={180} width={180} alt="gucii logo" className="h-[150] w-[150] lg:h-xl lg:w-xl object-cover" />
          <Image src={img5} height={180} width={180} alt="aclvin logo" className="h-[150] w-[150] lg:h-xl lg:w-xl object-cover col-span-full lg:col-span-1 mx-auto" />
        </div>
      </div>
      <div className="container mx-auto px-14">
        <h2 className="text-center my-20 font-integrl text-5xl text-black font-black">New Arrivals</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {
            products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))
          }
        </div>
        <div className="flex justify-center items-center my-18 ">
          <button className="border border-black rounded-4xl py-2 px-16">View All</button>
        </div>
      </div>
      <div className="container mx-auto py-8 px-8  bg-[#F2F0F1]  rounded-3xl">
        <h2 className="text-center pb-18 pt-12 font-integrl text-3xl lg:text-5xl text-black font-black">Browse by dress style</h2>
        <div className=" grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="relative">
            <Image
              src={casualImage}
              alt="Casual"
              className="rounded-2xl w-full h-[150px] md:h-full object-cover"
              width={500}
              height={500}
            />
            <h2 className="absolute left-10 top-2 text-3xl lg:text-4xl font-bold text-black">Casual</h2>
          </div>
          <div className="md:col-span-2 relative">
            <Image
              src={formalImage}
              alt="Formal"
              className="rounded-2xl w-full h-full object-cover "
              width={1000}
              height={500}
            />
            <h2 className="absolute left-10 top-2 text-3xl lg:text-4xl font-bold text-black">Formal</h2>
          </div>
          <div className="md:col-span-2 relative">
            <Image
              src={PartyImage}
              alt="Party"
              className="rounded-2xl w-full h-full object-cover"
              width={1000}
              height={500}
            />
            <h2 className="absolute left-10 top-2 text-3xl lg:text-4xl font-bold text-black">Party</h2>
          </div>
          <div className="relative">
            <Image
              src={gymImage}
              alt="gym"
              className="rounded-2xl w-full h-[150px] md:h-full object-cover"
              width={500}
              height={500}
            />
            <h2 className="absolute left-10 top-2 text-3xl lg:text-4xl font-bold text-black">Gym</h2>
          </div>
        </div>
      </div>
      <div className="container mx-auto px-14 mt-14">
        <SliderSection />
      </div>
    </>
  );
}
