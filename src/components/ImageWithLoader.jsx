import { useState } from "react";
import LoadingSection from "./LoadingSection";

const ImageWithLoader = ({ src, alt, className, loading = "lazy", decoding = "async", ...props }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);

  const handleLoad = () => {
    setIsLoading(false);
  };

  const handleError = () => {
    setIsLoading(false);
    setHasError(true);
  };

  return (
    <div className={className}>
      {(isLoading || hasError) && (
        <div className="absolute inset-0 flex items-center justify-center z-10 p-4">
          <LoadingSection className="w-auto h-auto max-w-full max-h-full" />
        </div>
      )}
      <img
        src={src}
        alt={alt}
        onLoad={handleLoad}
        onError={handleError}
        className={`${className} ${isLoading || hasError ? "opacity-0" : "opacity-100"} transition-opacity duration-300`}
        loading={loading}
        decoding={decoding}
        {...props}
      />
    </div>
  );
};

export default ImageWithLoader;