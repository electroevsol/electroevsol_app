const LoadingSpinner = () => (
  <div className="h-[80vh] flex items-center justify-center">
    <div className="relative w-16 h-16">
      <div className="absolute inset-0 border-4 border-brand-primary/20 rounded-full"></div>
      <div className="absolute inset-0 border-4 border-t-brand-primary rounded-full animate-spin"></div>
    </div>
  </div>
);

export default LoadingSpinner