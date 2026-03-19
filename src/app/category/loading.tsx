export default function Loading() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-[#fdf6f0]">
      <div className="flex items-center gap-3 text-[#6d432d] text-lg font-semibold">
        <span className="w-6 h-6 border-4 border-[#6d432d] border-t-transparent rounded-full animate-spin"></span>
        Loading categories...
      </div>
    </div>
  );
}
