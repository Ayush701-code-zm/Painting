export default function Loading() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-[#fefcf8]">
      <div className="flex flex-col items-center gap-[1.25rem]">
        <div className="w-[2.5rem] h-[2.5rem] rounded-full border-2 border-[rgba(28,27,24,0.1)] border-t-[#fcc010] animate-spin" />
        <p className="font-['Instrument_Serif'] italic text-[rgba(28,27,24,0.4)] text-[1.125rem]">
          Loading…
        </p>
      </div>
    </div>
  );
}
