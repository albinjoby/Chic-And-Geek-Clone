import Image from "next/image";
import localFont from "next/font/local";

const apple = localFont({
  src: "../../public/fonts/AppleGaramond-Light.ttf",
  variable: "--font-apple",
});

export default function Home() {
  return (
    <div className={`${apple.className}`}>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 relative overflow-hidden mb-10">
        <div>
          <h1 className="text-6xl p-11 md:text-9xl lg:p-20">
            <span className="block">Chic. </span>And Geek
          </h1>
          <p className="text-2xl lg:text-4xl p-10 pt-0">
            I am Nenad Grujicic, a multidisciplinary designer experienced in
            making brands and GUls look good, feel great, and work well.
          </p>
        </div>
        <div className="relative h-full">
          <div className="lg:absolute lg:right-0 lg:bottom-0">
            <Image
              className="w-full h-auto object-cover"
              src="/images/img1.jpg"
              width={700}
              height={500}
              alt="Image description"
            />
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 relative overflow-hidden">
        <div className="p-10">
          <div className="p-12 pb-0 pt-20 bg-gray-100 rounded-4xl">
            <Image
              className="bottom-0"
              src="/images/img2.gif"
              width={600}
              height={500}
              alt="Image description"
            />
          </div>
        </div>
        <div className="flex flex-col justify-center items-center text-center">
          <p className="text-4xl p-3 pb-9 md:p-10 pt-0 lg:pt-15 w-[90%] lg:w-[100%]">
            At the moment, I am crafting eye- catching, user-loved things at
            Pudding Studio.
          </p>
          <p className="p-3 text-xl lg:p-10 pt-0 w-[90%] lg:w-[100%]">
            Pudding is a small, family-run studio. It is formed by two of us, my
            spouse Jelena and me. The primary focus for our studio is close
            collaboration with product startups and their progressive growth.
          </p>
        </div>
      </div>
      <div className="text-center p-5 lg:p-45 mt-30">
        <h2 className="text-5xl md:text-7xl">
          I helped TextNow establish its brand presence while making it widely
          recognizable.
        </h2>
      </div>
      <div className="mt-10 mb-10 md:mt-20 flex justify-center items-center">
        <div className="w-[90%] aspect-square md:w-[80%] lg:h-[90vh] rounded-2xl overflow-hidden">
          <div
            className="w-full h-full relative"
            style={{
              backgroundColor: "#899ef5",
              backgroundImage:
                "radial-gradient(circle at 0 100%, #ff9061 47%, #fff0 52%), radial-gradient(circle at 100% 0, #ffade4, #d2ffbc00 66%)",
            }}
          >
            <div className="absolute -right-20 top-1/2 -translate-y-1/2 px-4 py-4 rounded-3xl border border-white/30 bg-white/20 backdrop-blur-xl shadow-lg">
              <Image
                className="w-auto h-[120px] md:h-[160px] lg:h-[200px] "
                src="/images/img3.png"
                width={345}
                height={100}
                alt="image"
                style={{
                  filter: "drop-shadow(0 4px 6px rgba(0,0,0,0.1))",
                  objectFit: "contain",
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
