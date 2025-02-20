export default function Partners() {
  return (
    <>
      <div className="lg:flex lg:mx-18 lg:p-8  lg:flex-row items-center lg:gap-5 flex flex-col gap-2 lg:justify-between dark:bg-white rounded-xl mx-10">
        <div className="w-[18%] aspect-3/2 object-contain">
          <img src="/logos/uon.png" alt="Logo UoN" className="opacity-60 hover:opacity-100 transition-all duration-300" />
        </div>
        <div className="w-[25%] aspect-3/2 object-contain">
          <img src="/logos/nihr-nbrc.png" alt="Logo CCN" className="filter brightness-0 dark:filter dark:brightness-100 dark:invert hover:filter-none transition-all duration-300 opacity-60 hover:opacity-100" />
        </div>
        <div className="w-[14%] aspect-3/2 object-contain">
          <img src="/logos/hdr.png" alt="Logo UKRI" className="filter brightness-0 dark:filter dark:brightness-100 dark:invert hover:filter-none transition-all duration-300 opacity-60 hover:opacity-100" />
        </div>
        <div className="w-[12%] aspect-3/2 object-contain relative">
          <img src="/logos/sde.png" alt="Logo ALVE" className="filter brightness-0 hover:filter-none transition-all duration-300 opacity-60 hover:opacity-100" />
        </div>
      </div>
    </>
  );
}
