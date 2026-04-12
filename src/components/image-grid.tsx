export default function ImageGrid() {
  const images = [
    "/image-grid/aura.jpg",
    "/image-grid/mac.jpg",
    "/image-grid/tud.jpg",
    "/image-grid/scene.jpg",
    "/image-grid/hackathon.JPG",
    "/image-grid/russia-pigeon.jpg",
    "/image-grid/gangsters.jpg",
  ];

  return (
    <div className="columns-1 sm:columns-2 md:columns-3 gap-4">
      {images.map((src, i) => (
        <div
          key={i}
          className="mb-4 break-inside-avoid overflow-hidden rounded-xl"
        >
          <img
            src={src}
            alt={`grid-${i}`}
            className="w-full h-auto object-cover rounded-xl transition-transform duration-300 hover:scale-[1.03]"
          />
        </div>
      ))}
    </div>
  );
}
