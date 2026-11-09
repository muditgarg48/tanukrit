const LoadingSection = ({ className = "" }) => {
  return (
    <div className={`w-full h-full flex items-center justify-center overflow-hidden ${className}`}>
      <div className="w-[40%] max-w-16 aspect-square rounded-full bg-black/10 animate-pulse" aria-hidden />
    </div>
  );
};

export default LoadingSection;