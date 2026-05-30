interface ProjectDeviceShowcaseProps {
  desktopSrc: string;
  mobileSrc: string;
  alt: string;
}

export default function ProjectDeviceShowcase({
  desktopSrc,
  mobileSrc,
  alt,
}: ProjectDeviceShowcaseProps) {
  return (
    <div className="relative w-full aspect-[16/11] min-h-[260px] sm:min-h-[300px]">
      {/* Soft surface shadow */}
      <div className="pointer-events-none absolute inset-x-[10%] bottom-[6%] h-[18%] rounded-[50%] bg-black/10 blur-2xl" />

      {/* Desktop monitor */}
      <div className="absolute inset-y-[4%] left-[14%] right-[4%]">
        <div className="relative flex h-full flex-col drop-shadow-[0_28px_56px_rgba(0,0,0,0.35)]">
          <div className="relative min-h-0 flex-1 rounded-t-xl border-[3px] border-zinc-900 bg-zinc-900 p-[2.5%] pb-0 shadow-lg">
            <div className="relative h-full overflow-hidden rounded-t-sm border-2 border-white bg-white">
              <img
                src={desktopSrc}
                alt={`${alt} — desktop view`}
                className="h-full w-full object-cover object-top transition-transform duration-700 group-hover:scale-[1.02]"
              />
            </div>
            <div className="pointer-events-none absolute inset-x-[8%] top-0 h-px bg-white/30" />
          </div>
          <div className="flex flex-col items-center pt-1.5">
            <div className="h-3.5 w-[28%] rounded-b-md bg-gradient-to-b from-zinc-300 to-zinc-400 shadow-sm" />
            <div className="mt-1 h-2 w-[42%] rounded-full bg-zinc-400 shadow-sm" />
          </div>
        </div>
      </div>

      {/* Mobile phone */}
      <div className="absolute bottom-[2%] left-0 z-10 w-[26%] max-w-[140px] drop-shadow-[0_24px_48px_rgba(0,0,0,0.45)] sm:max-w-[160px]">
        <div className="rounded-[1.35rem] border-[3px] border-zinc-900 bg-zinc-900 p-[6%] shadow-lg">
          <div className="mx-auto mb-[5%] h-1 w-[22%] rounded-full bg-zinc-700" />
          <div className="relative aspect-[9/19] overflow-hidden rounded-[0.65rem] border-2 border-white bg-white">
            <img
              src={mobileSrc}
              alt={`${alt} — mobile view`}
              className="h-full w-full object-cover object-top transition-transform duration-700 group-hover:scale-[1.03]"
            />
          </div>
          <div className="mx-auto mt-[6%] h-[10%] w-[10%] rounded-full border-2 border-zinc-400" />
        </div>
      </div>
    </div>
  );
}
