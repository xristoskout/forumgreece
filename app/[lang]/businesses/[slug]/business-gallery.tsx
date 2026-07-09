"use client";

import { useEffect, useMemo, useState } from "react";
import Image from "next/image";

type BusinessGalleryProps = {
  name: string;
  initialImage: string;
  images: string[];
};

export default function BusinessGallery({
  name,
  initialImage,
  images,
}: BusinessGalleryProps) {
  const galleryImages = useMemo(() => {
    const safeImages = images.length > 0 ? images : [initialImage];
    return Array.from(new Set(safeImages));
  }, [images, initialImage]);

  const [selectedImage, setSelectedImage] = useState(
    galleryImages[0] ?? initialImage
  );

  useEffect(() => {
    queueMicrotask(() => setSelectedImage(galleryImages[0] ?? initialImage));
  }, [galleryImages, initialImage]);

  return (
    <>
      <div className="mt-8 overflow-hidden rounded-[32px] bg-white backdrop-blur-md shadow-xl">
        <div className="relative h-[260px] w-full bg-slate-100 sm:h-[360px] lg:h-[480px]">
          <Image
            src={selectedImage}
            alt={name}
            fill
            priority
            className="object-contain"
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 100vw, 1200px"
          />
        </div>
      </div>

      <div className="mt-6 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">
        {galleryImages.map((src, index) => (
          <button
            key={`${src}-${index}`}
            type="button"
            onClick={() => setSelectedImage(src)}
            aria-label={`View image ${index + 1} of ${name}`}
            className={`overflow-hidden rounded-[20px] border bg-white backdrop-blur-md shadow-sm transition ${
              selectedImage === src
                ? "border-sky-500 ring-2 ring-sky-200"
                : "border-slate-200 hover:border-sky-300"
            }`}
          >
            <div className="relative h-[120px] w-full bg-slate-100">
              <Image
                src={src}
                alt={`${name} ${index + 1}`}
                fill
                className="object-cover"
                sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 20vw"
              />
            </div>
          </button>
        ))}
      </div>
    </>
  );
}