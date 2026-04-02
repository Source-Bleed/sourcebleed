const cveData = [
  {
    id: "CVE-2024-8832",
    project: "OpenRAN_Logic_Stack",
    description: "Buffer Overflow in S1-C processing",
    sector: "RAN",
    severity: "9.8 CRITICAL",
    severityLevel: "critical",
    date: "2024.10.12",
  },
  {
    id: "CVE-2024-7121",
    project: "Ericsson_Core_GTP",
    description: "Tunnel Hijacking via Malformed Headers",
    sector: "CORE",
    severity: "8.4 HIGH",
    severityLevel: "high",
    date: "2024.10.09",
  },
  {
    id: "CVE-2024-5541",
    project: "Nokia_OSS_Gateway",
    description: "Remote Code Execution in Management UI",
    sector: "OSS",
    severity: "7.2 HIGH",
    severityLevel: "high",
    date: "2024.10.05",
  },
  {
    id: "CVE-2024-4420",
    project: "Huawei_5G_NR_Sched",
    description: "Denial of Service via Signaling Storm",
    sector: "RAN",
    severity: "5.5 MEDIUM",
    severityLevel: "medium",
    date: "2024.09.28",
  },
  {
    id: "CVE-2024-1209",
    project: "Cisco_Unified_MGM",
    description: "Information Leak in Debug Interface",
    sector: "OSS",
    severity: "9.1 CRITICAL",
    severityLevel: "critical",
    date: "2024.09.25",
  },
];

const stats = [
  { label: "TOTAL_RECORDS", value: "14,209", accent: false },
  { label: "CRITICAL_THREATS", value: "421", accent: true },
  { label: "PATCHED_STATUS", value: "88.2%", accent: false },
  { label: "REAPER_BOUNTY_POOL", value: "$1.2M", accent: false },
];

function SeverityBadge({ level, text }: { level: string; text: string }) {
  const styles: Record<string, string> = {
    critical:
      "bg-error-container text-on-error-container",
    high: "bg-primary-container text-white",
    medium:
      "bg-surface-container-highest text-on-surface",
  };
  return (
    <span
      className={`${styles[level]} text-[10px] font-black px-3 py-1 uppercase tracking-tighter`}
    >
      {text}
    </span>
  );
}

export default function CveFeedPage() {
  return (
    <div className="pt-8 px-6 pb-24 min-h-screen">
      {/* Header */}
      <header className="mb-12 flex flex-col md:flex-row justify-between items-end gap-6 border-l-4 border-red-600 pl-6">
        <div>
          <h1 className="text-5xl font-[family-name:var(--font-headline)] font-black tracking-tighter uppercase leading-none">
            CVE_FEED_STREAMS
          </h1>
          <p className="text-on-surface-variant/60 text-xs mt-2 tracking-widest uppercase">
            Live vulnerability ingestion for global telecommunication
            infrastructure
          </p>
        </div>
        <div className="flex items-center gap-4 text-[10px] font-[family-name:var(--font-label)] tracking-widest">
          <div className="flex items-center gap-2 text-red-500">
            <span className="w-2 h-2 bg-red-600 animate-pulse" />
            LIVE_SYNC: ACTIVE
          </div>
          <div className="text-gray-500">DB_VER: 4.2.9_SEC</div>
        </div>
      </header>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-12">
        {stats.map((stat) => (
          <div
            key={stat.label}
            className={`bg-surface-container-low p-4 border-t-2 ${
              stat.accent ? "border-red-600/50" : "border-red-600/30"
            }`}
          >
            <div className="text-gray-500 text-[10px] font-[family-name:var(--font-label)] tracking-widest uppercase mb-1">
              {stat.label}
            </div>
            <div
              className={`text-3xl font-[family-name:var(--font-headline)] font-bold ${
                stat.accent ? "text-red-500" : "text-on-surface"
              }`}
            >
              {stat.value}
            </div>
          </div>
        ))}
      </div>

      {/* CVE Table */}
      <div className="bg-surface-container-lowest overflow-hidden border border-red-950/30">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-surface-container-high border-b border-red-900/20">
                {[
                  "CVE_ID",
                  "PROJECT / TARGET",
                  "SECTOR",
                  "SEVERITY",
                  "DETECTION_DATE",
                  "ACTION",
                ].map((header, i) => (
                  <th
                    key={header}
                    className={`px-6 py-4 font-[family-name:var(--font-headline)] text-[10px] tracking-[0.2em] text-gray-400 uppercase ${
                      i === 3 ? "text-center" : ""
                    } ${i === 5 ? "text-right" : ""}`}
                  >
                    {header}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody className="divide-y divide-red-950/20">
              {cveData.map((cve) => (
                <tr
                  key={cve.id}
                  className="hover:bg-red-950/10 transition-colors group"
                >
                  <td className="px-6 py-5 font-[family-name:var(--font-headline)] text-sm font-bold text-primary group-hover:translate-x-1 transition-transform">
                    {cve.id}
                  </td>
                  <td className="px-6 py-5">
                    <div className="text-sm font-bold text-on-surface">
                      {cve.project}
                    </div>
                    <div className="text-[10px] text-gray-500 tracking-wider">
                      {cve.description}
                    </div>
                  </td>
                  <td className="px-6 py-5">
                    <span className="text-[10px] font-[family-name:var(--font-label)] bg-surface-container px-2 py-1 border border-outline-variant/30 uppercase">
                      {cve.sector}
                    </span>
                  </td>
                  <td className="px-6 py-5 text-center">
                    <SeverityBadge
                      level={cve.severityLevel}
                      text={cve.severity}
                    />
                  </td>
                  <td className="px-6 py-5 font-[family-name:var(--font-label)] text-xs text-gray-500">
                    {cve.date}
                  </td>
                  <td className="px-6 py-5 text-right">
                    <button className="text-primary hover:text-on-surface transition-colors">
                      <span className="material-symbols-outlined">
                        data_object
                      </span>
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="p-4 bg-surface-container-low border-t border-red-900/20 flex justify-between items-center">
          <div className="text-[10px] font-[family-name:var(--font-label)] text-gray-500 tracking-widest uppercase">
            PAGE_01_OF_452
          </div>
          <div className="flex gap-2">
            <button className="px-3 py-1 border border-outline-variant text-[10px] font-bold text-gray-500 hover:text-primary transition-colors uppercase tracking-widest">
              PREV
            </button>
            <button className="px-3 py-1 border border-primary text-[10px] font-bold text-primary hover:bg-primary-container hover:text-white transition-colors uppercase tracking-widest">
              NEXT
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
