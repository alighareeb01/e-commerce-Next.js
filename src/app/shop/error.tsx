"use client";

export default function Error({ error, reset }) {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-[#fdf6f0] text-[#4a2d1e]">
      <h2 className="text-2xl font-bold mb-4">Something went wrong 😢</h2>
      <button
        onClick={reset}
        className="bg-[#6d432d] text-[#fff5eb] px-4 py-2 rounded-full"
      >
        Try again
      </button>
    </div>
  );
}
