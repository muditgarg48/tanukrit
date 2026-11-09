import { useState } from "react";
import Image from "next/image";
import { getSrc } from "../utils/image";

const ImageWithLoader = ({
  src,
  alt,
  className = "",
  fill = false,
  sizes,
  quality = 75,
  loading = "lazy",
  decoding = "async",
  ...props
}) => {
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);

  const isStatic = typeof src === "object" && src !== null;
  const isRemote = typeof src === "string" && /^https?:\/\//.test(src);
  const isSvg = typeof src === "string" && /\.svg(\?|$)/i.test(src);
  const useNext = (isStatic || isRemote) && !isSvg;
  const resolvedSizes = sizes ?? "100vw";

  const handleLoad = () => setIsLoading(false);
  const handleError = () => {
    setIsLoading(false);
    setHasError(true);
  };

  const imageClassName = `${className} ${isLoading || hasError ? "opacity-0" : "opacity-100"} transition-opacity duration-300`;

  return (
    <div className={`relative ${fill ? "h-full w-full " : ""}${className}`}>
      {(isLoading || hasError) && (
        <div
          className={`absolute inset-0 z-10 pointer-events-none ${hasError ? "bg-black/10" : "bg-black/[0.06] animate-pulse"}`}
          aria-hidden
        />
      )}

      {useNext ? (
        <Image
          src={src}
          alt={alt || ""}
          sizes={resolvedSizes}
          quality={quality}
          onLoad={handleLoad}
          onError={handleError}
          className={imageClassName}
          {...(fill ? { fill: true } : {})}
          {...props}
        />
      ) : (
        <img
          src={getSrc(src)}
          alt={alt || ""}
          onLoad={handleLoad}
          onError={handleError}
          className={imageClassName}
          loading={loading}
          decoding={decoding}
        />
      )}
    </div>
  );
};

export default ImageWithLoader;