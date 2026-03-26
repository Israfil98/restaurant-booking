interface ILoadingSpinnerProps {
  fullScreen?: boolean;
}

const LoadingSpinner = ({ fullScreen = false }: ILoadingSpinnerProps) => {
  const spinner = (
    <div className="flex flex-col items-center gap-3">
      <div className="border-cream/20 border-t-burgundy h-8 w-8 animate-spin rounded-full border-2" />
      <p className="text-warm-gray text-sm">Loading...</p>
    </div>
  );

  if (fullScreen) {
    return (
      <div className="bg-warm-dark flex min-h-screen items-center justify-center">
        {spinner}
      </div>
    );
  }

  return <div className="flex justify-center py-12">{spinner}</div>;
};

export default LoadingSpinner;
