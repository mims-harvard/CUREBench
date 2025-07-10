export default function Logos() {
  // Logo metadata keeps JSX clean and easy to maintain
  const logos = [
    { src: "harvard.png", alt: "Harvard Medical School" },
    { src: "harvard_uni.png", alt: "Harvard University" },
    { src: "kempner.png", alt: "Kempner Institute" },
    { src: "mit.png", alt: "Massachusetts Institute of Technology" },
    { src: "BW-logo.png", alt: "Brigham and Women's Hospital" },
    { src: "czi.png", alt: "Chan Zuckerberg Initiative" },
    { src: "milken.png", alt: "Milken Institute" },
    { src: "biswise.png", alt: "Biswas Family Foundation" },
    { src: "rao.jpg", alt: "Chan Zuckerberg Initiative" },
    { src: "lincoln.png", alt: "MIT Lincoln Laboratory" },
  ];

  return (
    <section className="py-12 bg-gray-100">
      {/*
        Responsive CSS Grid makes it easy to keep items aligned without
        manually defining rows. auto-fit+minmax ensures a nice flow on any screen.
      */}
      <div className="container mx-auto px-4">
        <div className="grid gap-8 place-items-center justify-items-center
                        grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-5
                        max-w-6xl mx-auto">
          {logos.map(({ src, alt }) => (
            <div key={alt} className="flex items-center justify-center w-full h-20">
              <img
                src={src}
                alt={alt}
                className="h-16 md:h-18 w-auto object-contain transition-transform 
                           duration-200 ease-in-out hover:scale-105 max-w-full"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}