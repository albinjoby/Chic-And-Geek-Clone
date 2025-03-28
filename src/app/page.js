import Image from "next/image";
import localFont from "next/font/local";
import Carousel from "./components/Carousel";

const apple = localFont({
  src: "../../public/fonts/AppleGaramond-Light.ttf",
  variable: "--font-apple",
});
const myriad = localFont({
  src: "../../public/fonts/MyriadPro-Light.otf",
  variable: "--font-myriad",
});

const images = [
  { id: 1, url: "/images/comp1.svg" },
  { id: 2, url: "/images/comp2.svg" },
  { id: 3, url: "/images/comp3.svg" },
  { id: 4, url: "/images/comp4.svg" },
  { id: 5, url: "/images/comp5.svg" },
  { id: 6, url: "/images/comp6.svg" },
  { id: 7, url: "/images/comp7.svg" },
  { id: 8, url: "/images/comp8.svg" },
  { id: 9, url: "/images/comp9.svg" },
];

export default function Home() {
  return (
    <main className={`${apple.className}`}>
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
            className="w-full h-full relative hidden"
            style={{
              backgroundColor: "#899ef5",
              backgroundImage:
                "radial-gradient(circle at 0 100%, #ff9061 47%, #fff0 52%), radial-gradient(circle at 100% 0, #ffade4, #d2ffbc00 66%)",
            }}
          >
            <div
              style={{ right: "calc(90% - 100%)" }}
              className="absolute  top-1/2 -translate-y-1/2 px-4 py-4 rounded-3xl border border-white/30 bg-white/20 backdrop-blur-xl shadow-lg"
            >
              <Image
                className="w-auto h-[100] md:h-[160px] lg:h-[200px] "
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
          <div className="w-full h-full bg-gray-100 flex items-center justify-center">
            <svg
            style={{ width: "10vw", height: "10vh" }}
              width="72"
              height="65"
              viewBox="0 0 72 65"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M404.570618,499.863642 C406.474912,499.863642 408.183324,501.185372 408.873941,503.191938 C409.997088,506.458726 412.779941,508.611248 415.880971,508.611248 L426.729941,508.611248 C427.430882,508.611248 428,509.250504 428,510.038562 C428,523.005528 419.052676,532.841212 408.016559,532.841212 L400.514,532.841212 L399.989882,532.842555 C395.182294,532.86646 390.286294,533.297555 384.624235,538.269251 C381.592426,540.931566 378.938512,542.500161 376.663312,542.975306 C375.959856,543.121959 375.284459,542.600347 375.153456,541.810677 C375.1232,541.62669 375.124656,541.438942 375.157744,541.256028 C376.120374,535.909106 375.369456,533.012576 372.904912,532.564291 C363.330288,530.825137 356,521.775362 356,510.038562 C356,509.250504 356.5688,508.611248 357.2708,508.611248 L367.943344,508.611248 C371.044426,508.611248 373.826512,506.458726 374.9504,503.191938 C375.640912,501.185372 377.349456,499.863642 379.253141,499.863642 L404.570618,499.863642 Z M425.594353,493.540134 C425.808765,494.508097 425.555176,495.054151 424.832794,495.17972 L414.467176,496.219236 C412.589618,496.407629 410.802059,495.244881 409.967441,493.291335 C408.607647,490.109906 405.698,488.216794 402.640382,488.52361 L377.671894,491.026272 C374.614171,491.332256 372.035644,493.776149 371.178791,497.179303 C370.653032,499.268785 369.069456,500.769237 367.191209,500.95763 L357.76832,501.901822 C357.697506,501.903407 357.603808,501.908967 357.486504,501.919281 C356.366406,502.019413 355.879312,501.52031 356.025226,500.421971 C357.573054,490.229915 364.63415,482.156725 373.676424,481.249894 L405.266794,478.083565 C414.334824,477.175147 422.533824,483.761339 425.594353,493.540134 Z"
                transform="translate(-356 -478)"
                fillRule="evenodd"
              />
            </svg>
          </div>
        </div>
      </div>
      <div className="flex flex-col m-10 mb-30">
        <div>
          <h2 className="text-center text-4xl md:text-5xl mb-10">
            In my spare time, I am collecting vintage - retro computers and
            video game consoles.
          </h2>
          <p className={`text-center ${myriad.className}`}>
            And for the last two years, I have been obsessed with MiSTer FPGA.
            MiSTer FPGA is an open-source project that aims to preserve old
            consoles, arcades, and personal computers: from the Super Nintendo
            to the Amiga and all the way to Yugoslavia&apos;s first computer -
            Galaksija. Since our studio has a retro corner where this wonderful
            device is located (along with many other retro consoles, macs, pvms,
            and crts), I wanted to enhance it with prints of the illustrations I
            have made.
          </p>
        </div>
      </div>
      <div className="flex flex-col md:flex-row-reverse mb-20">
        <div>
          <div className="w-[300px]">
            <div className="ml-10 md:pt-10 md:ml-0 md:mr-12 border-b-2 border-black/50 md:border-none inline-flex md:w-[150px]">
              <Image
                className="w-[150px] pb-10"
                src="/images/rank.png"
                width={150}
                height={100}
                alt="image"
              />
            </div>
          </div>
        </div>
        <div>
          <h2 className="text-5xl p-10 pr-5 md:pl-15">
            And not just recognizable but better in every way!
          </h2>
          <p className={`${myriad.className} p-10 pt-0 md:pl-15`}>
            After developing a new visual identity, I continued working on
            product design. From the new user onboarding to the new navigation
            and user portal to the integrated webshop, as well as coming up with
            many ideas and improvements, some of which are already producing
            excellent results.
          </p>
        </div>
      </div>
      <div className="bg-black text-white md:m-10 md:rounded-2xl">
        <div className="flex flex-col md:flex-row">
          <div className="p-10 md:pr-0 md:pt-15">
            <Image
              className="md:size-50 lg:size-35"
              src="/images/medal.svg"
              alt="images"
              height={150}
              width={100}
            />
          </div>
          <div className="p-10 pt-0 md:pt-15">
            <h2 className="text-4xl md:text-6xl">Statement of the jury</h2>
            <p className="text-gray-300 mt-5 md:text-2xl">
              This elaborate website integrates all of the company&apos;s
              product communication into a single portal, thus providing a
              seamless customer experience. The site&apos;s design is of
              superior quality and reflects the brand&apos;s core values down to
              the last detail, from the standpoint of form, content and
              technical realisation.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
