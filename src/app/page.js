import Image from "next/image";
import localFont from "next/font/local";
import plane1 from "/public/images/plane1.svg";
import plane2 from "/public/images/plane2.svg";
import plane3 from "/public/images/plane3.svg";
import plane4 from "/public/images/plane4.svg";
import plane5 from "/public/images/plane5.svg";
import lowes from "/public/images/lowes.svg";
import ipad from "/public/images/ipad.svg";

const apple = localFont({
  src: "../../public/fonts/AppleGaramond-Light.ttf",
  variable: "--font-apple",
});
const myriad = localFont({
  src: "../../public/fonts/MyriadPro-Light.otf",
  variable: "--font-myriad",
});

const cameras = [
  { model: "FUJI X-E4", icon: "/images/fuji.svg" },
  { model: "MJU-1", icon: "/images/mju.svg" },
  { model: "NIKON F100", icon: "/images/nikon.svg" },
  { model: "IPHONE 13", icon: "/images/iphone.svg" },
];

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
      {/* ------ intro1 ------ */}
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
      {/* ------ intro2 ------ */}
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
      {/* ------ para ----- */}
      <div className="text-center p-5 lg:p-45 mt-30">
        <h2 className="text-5xl md:text-7xl">
          I helped TextNow establish its brand presence while making it widely
          recognizable.
        </h2>
      </div>
      {/* ------ mac dock ------- */}
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
      {/* ----- vintage computer collash ----- */}
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

      {/* ------- app sotre ------ */}
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

      {/* ---------- plane ---------- */}
      <div className="flex m-5 lg:m-10 mt-30">
        <div className="w-fill md:w-1/2 flex flex-col p-0 md:p-5 md:pt-0 pt-0 gap-5 md:gap-10">
          <div className="md:hidden bg-gray-200 p-8 lg:p-12 rounded-2xl text-center">
            <p className="text-2xl md:text-3xl lg:text-4xl">
              Airplanes, helicopters, Mars rovers, and artificial intelligence
              under the same roof -well organized and visually consistent.
            </p>
          </div>
          <Image
            className="w-fit"
            src={plane1}
            alt="Plane illustration"
            width={300}
            height={300}
          />
          <Image
            className="w-fit"
            src={plane3}
            alt="Plane illustration"
            width={300}
            height={300}
          />
          <Image
            className="w-fit"
            src={plane4}
            alt="Plane illustration"
            width={300}
            height={300}
          />
        </div>
        <div className="hidden md:flex w-1/2 flex-col p-5 pt-0 gap-10">
          <div className="bg-gray-200 p-8 lg:p-12 rounded-2xl text-center">
            <p className="text-2xl md:text-3xl lg:text-4xl">
              Airplanes, helicopters, Mars rovers, and artificial intelligence
              under the same roof -well organized and visually consistent.
            </p>
          </div>
          <Image
            className="w-fit"
            src={plane2}
            alt="Plane illustration"
            width={300}
            height={300}
          />
          <Image
            className="w-fit"
            src={plane5}
            alt="Plane illustration"
            width={300}
            height={300}
          />
        </div>
      </div>

      {/* ------- medal ------- */}
      <div className="bg-black text-white md:m-10 md:mb-30 md:rounded-2xl">
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

      {/* ------ sports and car ------ */}
      <div className="border-b-1 border-black/10 mt-12 mb-15">
        <div className="flex flex-col gap-10 p-5 pb-0 md:p-10">
          <p className="text-2xl md:text-4xl lg:text-5xl text-center">
            Airbus is the most comprehensive project I have worked on with the
            IBM iX, Berlin team. But it is certainly not the only one.
          </p>
          <div className="overflow-hidden rounded-[5px]">
            <Image
              className="w-full"
              src="/images/sports.jpg"
              alt="images"
              height={3200}
              width={1800}
            />
          </div>
          <div className="p-4 text-center">
            <h2 className="text-3xl md:text-4xl lg:text-5xl mb-5 md:pb-10">
              Bundesliga Sportcast Media Hub
            </h2>
            <p
              className={`${myriad.className} font-semibold text-black/50 border-b-1 border-black/20 pb-20`}
            >
              The Sportscast media hub of the German Bundesliga is a web
              application allowing media and partners to access every Bundesliga
              football match video easily. Not only that, but it also (with the
              assistance of Watson AI) enables an easy search for the key
              moments. These clips can be perfectly trimmed and ready for
              further distribution and presentation in just a few clicks.
            </p>
          </div>
          <div className="p-4 text-center">
            <h2 className="text-3xl mb-5  md:text-4xl lg:text-5xl md:pb-10">
              bmw.ca
            </h2>
            <p
              className={`${myriad.className} font-semibold text-black/50 pb-5`}
            >
              I have always enjoyed participating and being part of a team that
              is working on a pitch project, and bmw.ca is my most beloved one.
              It was my first project at IBM iX, Berlin, where I met wonderful
              people with whom it was a pleasure to work and bring this project
              to a successful conclusion.
            </p>
          </div>
          <Image
            className="w-full"
            src="/images/car.png"
            alt="images"
            width={3200}
            height={1763}
          />
        </div>
      </div>
      {/* ------- camera ------- */}
      <div className="p-5 flex flex-col md:flex-row mb-10 lg:m-20">
        <div className="md:w-1/2 p-4 lg:pr-0">
          <h2 className="text-3xl mb-5 md:text-4xl lg:text-5xl">
            From time to time, I love to snap a photo here and there. Film and
            digital. 🫶🏻 both.
          </h2>
          <p className={`${myriad.className}`}>
            Love to take good photos. Especially analog-film ones. It is not
            just about grain and unique colors but it is about the journey from
            the moment I press the shutter button till I see scanned photos on
            display. Since I am a dad of a 3-year-old girl and I am mostly
            taking photos of her, analog is not the best option to snap a good
            one. That&apos;s why my fuji and iPhone are my most used cameras
            these days.
          </p>
        </div>
        <div className="md:w-1/2 justify-around md:justify-center flex gap-5 md:gap-10 lg:gap-15 mt-5">
          {cameras.map(({ model, icon }) => (
            <div key={model}>
              <Image
                className="w-20"
                src={icon}
                alt="Plane illustration"
                width={150}
                height={150}
              />
              <p className={`${myriad.className} text-center font-light`}>
                {model}
              </p>
            </div>
          ))}
        </div>
      </div>
      {/* ------ collage ------  */}
      <div className="m-2 md:m-10 flex flex-col gap-2 md:gap-10  lg:m-40 lg:mt-2">
        <div className="flex gap-2 md:gap-10">
          <div className="w-1/2 overflow-hidden rounded-[8px] md:rounded-2xl">
            <Image
              src="/images/pic1.jpg"
              alt="Plane illustration"
              width={1600}
              height={2431}
            />
          </div>
          <div className="w-1/2 flex flex-col gap-2 md:gap-10">
            <div className="w-full h-full overflow-hidden rounded-[8px] md:rounded-2xl">
              <Image
                className="h-[100%] object-cover"
                src="/images/pic2.jpg"
                alt="Plane illustration"
                width={800}
                height={526}
              />
            </div>
            <div className="w-full h-full overflow-hidden rounded-[8px] md:rounded-2xl">
              <Image
                className="h-[100%] object-cover"
                src="/images/pic3.jpg"
                alt="Plane illustration"
                width={800}
                height={527}
              />
            </div>
          </div>
        </div>
        <div className="overflow-hidden rounded-[8px] md:rounded-2xl">
          <Image
            className=""
            src="/images/pic4.jpg"
            alt="Plane illustration"
            width={1600}
            height={1092}
          />
        </div>
        <div>
          <div className="flex gap-2 md:gap-10">
            <div className="w-1/2 overflow-hidden rounded-[8px] md:rounded-2xl">
              <Image
                src="/images/pic5.jpg"
                alt="Plane illustration"
                width={800}
                height={1216}
              />
            </div>
            <div className="w-1/2 flex flex-col gap-2 md:gap-10">
              <div className="w-full h-full overflow-hidden rounded-[8px] md:rounded-2xl">
                <Image
                  className="h-[100%] object-cover"
                  src="/images/pic6.jpg"
                  alt="Plane illustration"
                  width={1080}
                  height={711}
                />
              </div>
              <div className="w-full h-full overflow-hidden rounded-[8px] md:rounded-2xl">
                <Image
                  className="h-[100%] object-cover"
                  src="/images/pic7.jpg"
                  alt="Plane illustration"
                  width={800}
                  height={526}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* ----- icon ----- */}
      <div className="h-[80vh] md:h-[90vh] lg:h-[100vh] flex items-center justify-center">
        <div className="">
          <div className="flex justify-center mb-10">
            <Image
              className="size-30 md:size-40 lg:size-50"
              src="/images/icon.svg"
              alt="icon"
              height={100}
              width={100}
            />
          </div>
          <h2 className="text-center text-4xl md:text-6xl lg:text-7xl font-medium">
            Icons, Pictograms and KDE.<br></br> Yep, that&apos;s how it started.
          </h2>
        </div>
      </div>
      {/* ------ Pictograms ------- */}
      <div className="flex flex-col items-center justify-center text-center">
        <div className="w-[80%] border-1 border-black/20 mb-10"></div>
        <h2 className="text-5xl md:text-6xl p-10 pb-0">
          Pictograms for Volkswagen
        </h2>
        <p className={`${myriad.className} p-10 pt-5 pb-0 md:p-20 md:pt-15`}>
          Shiny icons were my start, but the technique of converting them to
          line art seemed easy. Conveying a message through a glyph and making a
          family in which each one is consistent and recognizable are still the
          most significant challenges I can face... yet, at the same time, these
          are some of my favorite projects. I am showing you one part of the
          pictogram family that I worked on for Volkswagen (during my time at
          IBM iX). What brings me to this particular set is the fact that it
          went to production, and basically, every employee at VW has them in
          front of their eyes.
        </p>
        <Image
          className="p-10 lg:hidden"
          src="/images/picto-sm.svg"
          alt="icon"
          height={500}
          width={500}
        />
        <Image
          className="p-10 hidden lg:block"
          src="/images/picto-lg.svg"
          alt="icon"
          height={800}
          width={800}
        />
      </div>
      {/* ------- ipad ----- */}
      <div className="m-10">
        <div className="flex justify-center items-center">
          <div className="flex">
            <div>
              <Image
                className="md:size-60 pt-18 md:p-0"
                src="/images/lowes.svg"
                alt="icon"
                height={100}
                width={100}
              />
            </div>
            <div>
              <h2 className="text-6xl md:text-9xl pl-3 pt-17">for iPad.</h2>
            </div>
          </div>
        </div>
        <div className="mt-10">
          <Image
            className="h-full w-full md:pl-10 md:pr-10"
            src="/images/ipad.svg"
            alt="icon"
            height={10}
            width={10}
          />
        </div>
      </div>
    </main>
  );
}
