"use client";

import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";
import "swiper/css";
import "swiper/css/effect-cards";
import { EffectCards } from "swiper/modules";

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const images: string[] = [
    "https://drive.google.com/uc?export=view&id=1Fy7xWXttVd5fGgMqYUKDFkOPHy2kIzYD",
    "https://drive.google.com/uc?export=view&id=1NNmeU2YMDkCKW7gnMOPwhmdllxeYHG1-",
    "https://drive.google.com/uc?export=view&id=11p1TSgqira8sFxGSTUOmPd4RsPkjfE5S",
    "https://drive.google.com/uc?export=view&id=1a-2sCTxj_-84TsXuqbh7Z9_seCQn9-H1",
    "https://drive.google.com/uc?export=view&id=1iy7pMndBlb8QBYF4BRPhUmuOXTmpElg2",
    "https://drive.google.com/uc?export=view&id=1zBew37ut0wAmpi3r4ubihJwbi_87-4vP",
    "https://drive.google.com/uc?export=view&id=1AuoAG2_ATc7JDp9yMh-qA8R1prOw74z7",
    "https://drive.google.com/uc?export=view&id=14GZaa6hyxE25ZJCwGM3ZCa1e-Z77crx0",
    "https://drive.google.com/uc?export=view&id=1uloBM-tsfyy9LQ3FOawUkOuhUFXev8s0",
    "https://drive.google.com/uc?export=view&id=1YU7HMkxYfP_E1vS6VzzRXfxT3BCNCXWk",
    "https://drive.google.com/uc?export=view&id=12_t3iXQaDzTWH9A6m0LtJYkttEFR5T3F",
    "https://drive.google.com/uc?export=view&id=1D6Xj_0BTqN9Bq3BUxgZTjFZYmijNDP1o",
    "https://drive.google.com/uc?export=view&id=15uvXrknjaBSXQVWrR6Dh7ic1ghkGERcC",
    "https://drive.google.com/uc?export=view&id=1GoeVtVkrMicCYSR62kXiym9fceQLSdli",
    "https://drive.google.com/uc?export=view&id=1n3LjK4Hy5Te0R3UQ7V589isUcKUD_jWZ",
    "https://drive.google.com/uc?export=view&id=1WeZ6o8U52bNMSHa-ZLfoSnMMLn9xmJ16",
    "https://drive.google.com/uc?export=view&id=12oVmwZ9bsxhpHqikhykdCCss0k0R-eUu",
    "https://drive.google.com/uc?export=view&id=1YG8n4NKcgQMVGbNTCvLATC_mRhRBR3KY",
    "https://drive.google.com/uc?export=view&id=18w5F8DQvDAz7Ga5AHIPKFKs0JNGPv74O",
    "https://drive.google.com/uc?export=view&id=1dnTgZNNR7qYk62FyATHVwz0VfItGOBxK",
    "https://drive.google.com/uc?export=view&id=194uftbdgEirGwRlNQriUPcRJha-VRvio",
    "https://drive.google.com/uc?export=view&id=1HOo2dzziacw3xc_uDvSBBSufi9pYd-Fo",
    "https://drive.google.com/uc?export=view&id=1S399bOZpS4wgGtnI_AgArHRLN2iBXP8y",
    "https://drive.google.com/uc?export=view&id=1MSuIxo4OH1hHJT5gg7bDMUY8KS0qxop8",
    "https://drive.google.com/uc?export=view&id=1fpdCFm4YS7MBsCdFai8K_wKpieyM9wLN",
    "https://drive.google.com/uc?export=view&id=1UiRmnUVNGhN4aD1NmAVmwz5dAOobGVW-",
    "https://drive.google.com/uc?export=view&id=1n_2d6ZH0I40-YCLp6cf-RpDDjXw2m2My",
    "https://drive.google.com/uc?export=view&id=1K61gBCHBhBnx6KVDhD7wBAi52G_5ViH4",
  ];

  const handleImageClick = (image: string) => {
    setSelectedImage(image);
  };

  const handleCloseModal = () => {
    setSelectedImage(null);
  };

  return (
    <div className="flex items-center justify-center bg-white">
      <Swiper
        effect={"cards"}
        grabCursor={true}
        modules={[EffectCards]}
        className="mySwiper"
        style={{ width: "40%", height: "80vh" }}
      >
        {images.map((image, index) => (
          <SwiperSlide key={index}>
            <div className="relative w-full h-full rounded-lg">
              <Image
                src={image}
                alt={`Gallery image ${index + 1}`}
                layout="fill"
                className="rounded-lg object-top object-cover cursor-pointer"
                onClick={() => handleImageClick(image)}
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {selectedImage && (
        <div
          className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50"
          onClick={handleCloseModal}
        >
          <Image
            src={selectedImage}
            alt="Enlarged image"
            layout="fill"
            className="object-contain"
          />
        </div>
      )}
    </div>
  );
};

export default Gallery;
