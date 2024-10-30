import Gallery from "@/app/gallery/page.client";

export const metadata = {
  title: "Candela's Fashion Gallery",
  description: "View highlights of Candela's runway shows and photoshoots.",
  keywords: "Candela, model, fashion gallery, runway, photoshoots, portfolio",
};

const GalleryPage = () => {
  return (
    <div>
      <Gallery />
    </div>
  );
};

export default GalleryPage;
