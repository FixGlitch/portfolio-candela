import Image from "next/image";

export const metadata = {
  title: "Candela's Portfolio - Fashion Model & Influencer",
  description:
    "Discover Candela's professional modeling portfolio, showcasing her latest photoshoots, runway shows, and collaborations with top brands. Explore her work in fashion and lifestyle.",
  keywords:
    "Candela, model, fashion model, portfolio, photoshoots, runway, fashion, influencer, modeling, professional model, collaborations, fashion shows",
  openGraph: {
    title: "Candela's Modeling Portfolio",
    description:
      "Explore Candela's stunning modeling portfolio, featuring her best photoshoots, runway appearances, and collaborations with leading fashion brands. Follow her journey in the fashion industry.",
    url: "...",
    type: "website",
    images: [
      {
        url: "/candela-modeling-banner.jpg",
        alt: "Candela posing in a fashion photoshoot",
      },
    ],
  },
};

const Home = () => {
  return (
    <main className="container flex flex-col items-center justify-center mx-auto px-10 bg-white h-full max-w-7xl">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="flex flex-col justify-between">
          <div className="space-y-4 mb-8">
            <h2 className="text-lg font-semibold">TITULO</h2>
            <p className="text-sm text-gray-600">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur.
            </p>
          </div>
          <div className="relative h-[400px] mt-auto">
            <Image
              src="/cande.jpg"
              alt="Candela Astone main portfolio image"
              layout="fill"
              objectFit="cover"
            />
          </div>
        </div>
        <div className="relative h-[calc(100vh-200px)]">
          <Image
            src="/cande.jpg"
            alt="Candela Astone main portfolio image"
            layout="fill"
            objectFit="cover"
          />
        </div>
        <div className="flex flex-col justify-between">
          <div className="space-y-4">
            <div className="relative h-[300px]">
              <Image
                src="/cande.jpg"
                alt="Candela Astone main portfolio image"
                layout="fill"
                objectFit="cover"
              />
            </div>
            <h2 className="text-lg font-semibold">TITULO</h2>
          </div>
          <div className="space-x-4 mt-8">
            <div className="flex flex-col mt-8">
              <h2 className="text-lg font-semibold">TITULO</h2>
              <p className="text-sm text-gray-600 mb-10">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut enim
                ad minim veniam, quis nostrud exercitation ullamco laboris nisi
                ut aliquip ex ea commodo consequat. Duis aute irure dolor in
                reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur.
              </p>
            </div>
            <div className="space-x-4">
              <button className="p-2 rounded-full border border-gray-300">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 19l-7-7 7-7"
                  />
                </svg>
              </button>
              <button className="p-2 rounded-full border border-gray-300">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Home;
