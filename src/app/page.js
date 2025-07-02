import Image from "next/image";
import heroImage from "../../public/hero.png"
import img1 from "../../public/versace.png"
import img2 from "../../public/zara-logo-1 1.png"
import img3 from "../../public/gucci.png"
import img4 from "../../public/calvin.png"
import img5 from "../../public/prada.png"
import ProductCard from "@/components/ProductCard";
import productImage1 from "../../public/image 8.png"

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
      <div className="bg-black">
        <div className="container mx-auto grid grid-cols-2 md:grid-cols-5 py-8 place-items-center">
          <Image src={img1} height={180} width={180} alt="vaersace logo" />
          <Image src={img2} height={80} width={80} alt="Zara logo" />
          <Image src={img3} height={180} width={180} alt="prada logo" />
          <Image src={img4} height={180} width={180} alt="gucii logo" />
          <Image src={img5} height={180} width={180} alt="aclvin logo" />
        </div>
      </div>
      <div className="container mx-auto px-14">
        <h2 className="text-center my-20 font-integrl text-5xl text-black font-black">New Arrivals</h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          {
            products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))
          }
        </div>
      </div>
      <div className="h-screen"></div>
    </>
  );
}
