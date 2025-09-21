import img1 from '../assets/4F2E04A3-5987-43D6-A0F0-CA6E7810C2B3.jpg';
import img2 from '../assets/CD785978-A19F-43F5-BE5F-8CBD18E33A33.jpg';
import img3 from '../assets/D02128BB-9548-4574-89E6-888BF2C5D93C.jpg';
import img4 from '../assets/IMG_2624.jpg';
import img5 from '../assets/IMG_2628.jpg';
import img6 from '../assets/IMG_2629.jpg';
import studioSetup from '../assets/IMG_2705.jpg';
import studioSession from '../assets/IMG_2712.jpg';

export function Gallery() {
  const images = [
    {
      src: img1,
      alt: "Fashion portrait with sports wear"
    },
    {
      src: img2,
      alt: "Close-up portrait with sunglasses"
    },
    {
      src: studioSetup,
      alt: "Professional studio setup with lighting equipment and camera"
    },
    {
      src: img3,
      alt: "Portrait with yellow sunglasses"
    },
    {
      src: img4,
      alt: "Portrait with headscarf and olive outfit"
    },
    {
      src: studioSession,
      alt: "Behind the scenes studio session with model and photographer"
    },
    {
      src: img5,
      alt: "Portrait with black jacket"
    },
    {
      src: img6,
      alt: "Portrait with red lips and grey top"
    }
  ];

  return (
    <section className="section" style={{ paddingTop: '3rem', paddingBottom: '5rem' }}>
      
      {/* Masonry-style Gallery preserving aspect ratios */}
      <div className="gallery-masonry">
        {images.map((image, index) => (
          <div 
            key={index} 
            className="gallery-item-masonry"
          >
            <img
              src={image.src}
              alt={image.alt}
            />
          </div>
        ))}
      </div>

    </section>
  );
}