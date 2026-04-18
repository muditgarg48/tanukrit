import { useState } from "react";
import Image from "next/image";
import { getSrc } from "../utils/image";
import LoadingSection from "./LoadingSection";

const ImageWithLoader = ({ src, alt, className, loading = "lazy", decoding = "async", ...props }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);

  // If src is a string, we treat it as an external URL or static path
  // If src is an object (Next.js import), next/image handles it natively
  const isNextImage = typeof src === "object" && src !== null;

  return (
    <div className={`relative ${className}`}>
      {(isLoading || hasError) && (
        <div className="absolute inset-0 flex items-center justify-center z-10 p-4">
          <LoadingSection className="w-auto h-auto max-w-full max-h-full" />
        </div>
      )}
      
      {isNextImage ? (
        <Image
          src={src}
          alt={alt || ""}
          onLoad={() => setIsLoading(false)}
          onError={() => {
            setIsLoading(false);
            setHasError(true);
          }}
          className={`${className} ${isLoading || hasError ? "opacity-0" : "opacity-100"} transition-opacity duration-300`}
          {...props}
        />
      ) : (
        <img
          src={getSrc(src)}
          alt={alt || ""}
          onLoad={() => setIsLoading(false)}
          onError={() => {
            setIsLoading(false);
            setHasError(true);
          }}
          className={`${className} ${isLoading || hasError ? "opacity-0" : "opacity-100"} transition-opacity duration-300`}
          loading={loading}
          decoding={decoding}
          {...props}
        />
      )}
    </div>
  );
};

export default ImageWithLoader;