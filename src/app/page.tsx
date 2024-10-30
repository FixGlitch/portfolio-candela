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
        url: "https://drive.google.com/uc?export=view&id=1Fy7xWXttVd5fGgMqYUKDFkOPHy2kIzYD",
        alt: "Candela posing in a fashion photoshoot",
      },
    ],
  },
};

const Home = () => {
  return (
    <section className="flex flex-col items-center lg:justify-center mx-auto px-10 py-5 bg-white overflow-y-auto h-full max-w-7xl">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 lg:gap-8">
        <div className="flex flex-col justify-between">
          <div className="space-y-4 mb-8">
            <h2 className="text-lg text-gray-800 font-semibold">Versatile Runway Presence</h2>
            <p className="text-sm text-gray-600">
              Candela&apos;s runway presence is a captivating fusion of elegance and intensity. She embodies each designer&apos;s vision with a unique stride that highlights her adaptability and command of the runway. From high-fashion couture to sleek ready-to-wear, her look elevates every show.
            </p>
          </div>
          <div className="relative h-[400px] mt-auto">
            <Image
              src="https://drive.google.com/uc?export=view&id=1NNmeU2YMDkCKW7gnMOPwhmdllxeYHG1-"
              alt="Candela Astone main portfolio image"
              layout="fill"
              objectFit="cover"
              objectPosition="top"
            />
          </div>
        </div>
        <div className="flex relative h-[calc(100vh-200px)]">
          <Image
            src="https://drive.google.com/uc?export=view&id=11p1TSgqira8sFxGSTUOmPd4RsPkjfE5S"
            alt="Candela Astone walking the runway"
            layout="fill"
            objectFit="cover"
            priority
          />
        </div>
        <div className="flex flex-col-reverse lg:flex-col justify-between">
          <div className="space-y-4">
            <div className="relative h-[300px]">
              <Image
                src="https://drive.google.com/uc?export=view&id=1a-2sCTxj_-84TsXuqbh7Z9_seCQn9-H1"
                alt="Candela Astone posing in a fashion shoot"
                layout="fill"
                objectFit="cover"
              />
              <div className="lg:hidden space-x-4">
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
            <h2 className="lg:flex hidden text-gray-800 text-lg font-semibold">Editorial Expertise</h2>
          </div>
          <div className="space-x-4 lg:mt-8">
            <div className="flex flex-col mt-8">
              <h2 className="text-lg text-gray-800 font-semibold">Dynamic Style and Vision</h2>
              <p className="text-sm text-gray-600 mb-10">
                Candela seamlessly blends classic beauty with a contemporary edge. Her dynamic range allows her to embody diverse styles, making her a versatile model suited for both high-fashion editorials and trend-forward campaigns.
              </p>
            </div>
          </div>
          <div className="space-x-4 hidden lg:flex">
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
        <div className="flex items-center justify-center py-4 space-x-4 lg:hidden">
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
    </section>
  );
};

export default Home;
