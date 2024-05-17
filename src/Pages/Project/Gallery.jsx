import { Gallery, Item } from "react-photoswipe-gallery";

const GalleryImages = ({ images }) => {
  return (
    <Gallery>
      {" "}
      <section className="bg-blue-50 p-4">
        <div className="container mx-auto"></div>
        {images.length === 1 ? (
          <Item
            original={images[0]}
            thumbnail={images[0]}
            width={"1000"}
            height={"600"}
          >
            {({ ref, open }) => (
              <img src={images[0]} alt="" ref={ref} onClick={open} />
            )}
          </Item>
        ) : (
          <div
            className="Image-container"
            style={{ display: "flex", flexWrap: "wrap" }}
          >
            {images?.map((image, index) => (
              <div
                key={index}
                className={`
                          ${
                            images.length === 3 && index === 2
                              ? "col-span-2"
                              : "col-span-1"
                          }
                              `}
              >
                <Item
                  original={image}
                  thumbnail={image}
                  width={"1000"}
                  height={"600"}
                >
                  {({ ref, open }) => (
                    <img src={images[0]} alt="" ref={ref} onClick={open} />
                  )}
                </Item>
              </div>
            ))}
          </div>
        )}
      </section>
    </Gallery>
  );
};

export default GalleryImages;
