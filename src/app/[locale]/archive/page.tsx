const timelineEntries = [
  {
    date: "DEC_2023 // 04:00_PST",
    title: "PROJECT_ONYX_LEAK",
    description:
      "Initial disclosure of the Onyx kernel exploit affecting high-security infrastructure in the European sector.",
    side: "left" as const,
  },
  {
    date: "OCT_2023 // 11:24_UTC",
    title: "SAT_LINK_INTERCEPTION",
    description:
      "Deconstruction of the man-in-the-middle attack targeting LEO communications. Encryption bypassed via side-channel analysis.",
    side: "right" as const,
  },
  {
    date: "AUG_2023 // 23:59_GMT",
    title: "VOID_CORE_VULN",
    description:
      "Critical analysis of the memory leak in widely deployed cryptographic modules. Impact rated OMEGA.",
    side: "left" as const,
  },
  {
    date: "JUN_2023 // 08:15_EST",
    title: "GRID_LOCK_FAILURE",
    description:
      "Root cause analysis of the power grid management failure in the Pacific Northwest. Proof of concept for automated mitigation.",
    side: "right" as const,
  },
  {
    date: "JAN_2023 // 00:00_UTC",
    title: "THE_GENESIS_RECORDS",
    description:
      "Original manifesto and foundational research that led to the formation of the SOURCE BLEED protocol.",
    side: "left" as const,
  },
];

export default function ArchivePage() {
  return (
    <div className="pt-8 pb-12 px-6 min-h-screen">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <header className="mb-16">
          <div className="flex items-baseline gap-4 mb-2">
            <h1 className="text-5xl font-black font-[family-name:var(--font-headline)] tracking-tighter text-on-background uppercase">
              ARCHIVE
            </h1>
            <span className="text-red-600 font-[family-name:var(--font-headline)] font-bold text-lg tracking-widest">
              [RECORDS_LOG_00]
            </span>
          </div>
          <p className="text-on-surface-variant max-w-xl opacity-80 border-l-2 border-red-900 pl-4 py-1 italic">
            Historical telemetry and technical deconstructions of major breach
            events and zero-day discoveries since inception.
          </p>
        </header>

        {/* Timeline */}
        <div className="relative">
          {/* Center Line */}
          <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 h-full w-[2px] bg-gradient-to-b from-red-600/50 via-red-900/20 to-transparent" />

          <div className="space-y-24">
            {timelineEntries.map((entry) => (
              <div
                key={entry.title}
                className="relative flex flex-col md:flex-row items-start md:items-center w-full group"
              >
                {/* Timeline dot */}
                <div className="absolute left-0 md:left-1/2 transform -translate-x-1/2 w-4 h-4 bg-background border-2 border-red-600 z-10" />

                {entry.side === "left" ? (
                  <>
                    <div className="md:w-1/2 md:pr-12 md:text-right pl-8 md:pl-0">
                      <span className="text-xs font-[family-name:var(--font-headline)] text-red-500 tracking-widest uppercase mb-1 block">
                        {entry.date}
                      </span>
                      <h3 className="text-2xl font-bold font-[family-name:var(--font-headline)] tracking-tight text-on-background mb-3 group-hover:text-red-400 transition-colors">
                        {entry.title}
                      </h3>
                      <p className="text-sm text-on-surface-variant leading-relaxed mb-4">
                        {entry.description}
                      </p>
                      <a
                        href="#"
                        className="inline-flex items-center text-[10px] font-[family-name:var(--font-headline)] tracking-[0.2em] text-red-500 uppercase border-b border-red-900/50 hover:border-red-500 transition-all"
                      >
                        VIEW_FULL_REPORT
                      </a>
                    </div>
                    <div className="md:w-1/2 hidden md:block" />
                  </>
                ) : (
                  <>
                    <div className="md:w-1/2 hidden md:block" />
                    <div className="md:w-1/2 md:pl-12 pl-8">
                      <span className="text-xs font-[family-name:var(--font-headline)] text-red-500 tracking-widest uppercase mb-1 block">
                        {entry.date}
                      </span>
                      <h3 className="text-2xl font-bold font-[family-name:var(--font-headline)] tracking-tight text-on-background mb-3 group-hover:text-red-400 transition-colors">
                        {entry.title}
                      </h3>
                      <p className="text-sm text-on-surface-variant leading-relaxed mb-4">
                        {entry.description}
                      </p>
                      <a
                        href="#"
                        className="inline-flex items-center text-[10px] font-[family-name:var(--font-headline)] tracking-[0.2em] text-red-500 uppercase border-b border-red-900/50 hover:border-red-500 transition-all"
                      >
                        VIEW_FULL_REPORT
                      </a>
                    </div>
                  </>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* End of Archive */}
        <div className="mt-32 text-center">
          <div className="inline-block px-8 py-4 border border-red-900/20 bg-surface-container-low">
            <span className="text-[10px] font-[family-name:var(--font-headline)] tracking-[0.4em] text-gray-500 uppercase">
              END_OF_ARCHIVE_CHAIN
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
