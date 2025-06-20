export default function Logos() {
  // Logo metadata keeps JSX clean and easy to maintain
  const logos = [
    { src: "harvard.png", alt: "Harvard Medical School" },
    { src: "harvard_uni.png", alt: "Harvard University" },
    { src: "kempner.png", alt: "Kempner Institute" },
    { src: "mit.png", alt: "Massachusetts Institute of Technology" },
    { src: "BW-logo.png", alt: "Brigham and Women's Hospital" },
    // { src: "lincoln.png", alt: "MIT Lincoln Laboratory" },
    { src: "czi.png", alt: "Chan Zuckerberg Initiative" },
    { src: "milken.png", alt: "Milken Institute" },
    { src: "biswise.png", alt: "Biswas Family Foundation" }
  ];

  return (
    <section className="py-12 bg-gray-100">
      {/*
        Responsive CSS Grid makes it easy to keep items aligned without
        manually defining rows. auto-fit+minmax ensures a nice flow on any screen.
      */}
      <div className="container mx-auto grid gap-10 place-items-center 
                      grid-cols-2 sm:grid-cols-4 lg:grid-cols-4 xl:grid-cols-4">
        {logos.map(({ src, alt }) => (
          <img
            key={alt}
            src={src}
            alt={alt}
            className="h-16 md:h-20 w-auto object-contain transition-transform 
                       duration-200 ease-in-out hover:scale-105"
          />
        ))}
      </div>
    </section>
  );
}