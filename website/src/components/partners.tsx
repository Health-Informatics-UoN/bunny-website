export default function Partners() {

  return (
    <>
      <div className="flex flex-col items-center gap-8 mx-10 lg:flex-row lg:justify-between lg:gap-5 lg:mx-18 lg:p-8 rounded-xl">
        <div className="w-1/2 sm:w-1/3 md:w-1/4 lg:w-[18%] aspect-3/2 object-contain">
          <img src="/logos/uon.svg" alt="Logo UoN" className="opacity-50 hover:opacity-100 transition-all duration-300 dark:opacity-100" />
        </div>
        <div className="w-1/2 sm:w-1/3 md:w-1/4 lg:w-[25%] aspect-3/2 object-contain">
          <img src="/logos/nihr.svg" alt="Logo CCN" className="opacity-50 hover:opacity-100 transition-all duration-300 dark:opacity-100" />
        </div>
        <div className="w-1/2 sm:w-1/3 md:w-1/4 lg:w-[14%] aspect-3/2 object-contain">
          <img src="/logos/hdr.png" alt="Logo UKRI" className="filter brightness-0 hover:filter-none transition-all duration-300 opacity-50 hover:opacity-100" />
        </div>
        <div className="w-1/2 sm:w-1/3 md:w-1/4 lg:w-[12%] aspect-3/2 object-contain relative">
          <img src="/logos/sde.png" alt="Logo ALVE" className="filter brightness-0 hover:filter-none transition-all duration-300 opacity-50 hover:opacity-100" />
        </div>
      </div>
    </>
  );
}
