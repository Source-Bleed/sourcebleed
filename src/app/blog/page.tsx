const articles = [
  {
    category: "MALWARE_ANALYSIS",
    severity: "CRITICAL",
    severityColor: "text-red-800",
    title: "SILENT_VOID: THE EVOLUTION OF FILELESS PAYLOADS",
    excerpt:
      "Analyzing the 2024 surge in PowerShell-based memory-only execution techniques used by APT-41 actors.",
    author: "GHOST_SHELL",
  },
  {
    category: "PROTOCOL_FLAWS",
    severity: "HIGH_ALERT",
    severityColor: "text-yellow-600",
    title: "UDP_REFLEX: AMPLIFICATION ATTACKS IN 5G NODES",
    excerpt:
      "A deep dive into how 5G infrastructure introduces new vectors for massive scale DDoS amplification.",
    author: "VOID_WALKER",
  },
  {
    category: "CRYPTO_ANALYSIS",
    severity: "CRITICAL",
    severityColor: "text-red-800",
    title: "QUANTUM_BREACH: RSA-2048 VULNERABILITY MAP",
    excerpt:
      "Reviewing the mathematical shortcuts that might compromise legacy encryption sooner than projected.",
    author: "CYPHER_PUNK",
  },
];

const timeline = [
  {
    num: "01",
    title: "INITIAL_PENETRATION_PHASE",
    desc: "Case study on social engineering vectors in high-security hardware firms.",
  },
  {
    num: "02",
    title: "LATERAL_MOVEMENT_PATTERNS",
    desc: "Automated analysis of movement within segmented networks using AI heuristics.",
  },
  {
    num: "03",
    title: "EXFILTRATION_PROTOCOLS",
    desc: "Modern methods for bypassing DLP via steganographic covert channels.",
  },
];

export default function BlogPage() {
  return (
    <div className="pt-8 pb-12 px-6 md:px-12 max-w-7xl">
      {/* Featured Post */}
      <section className="mb-16 grid grid-cols-1 lg:grid-cols-12 gap-0 border border-outline-variant/20 bg-surface-container-lowest">
        <div className="lg:col-span-8 relative h-[400px] md:h-[550px] overflow-hidden group">
          <div className="w-full h-full bg-surface-container flex items-center justify-center">
            <span className="material-symbols-outlined text-red-900/20 text-[200px]">
              bug_report
            </span>
          </div>
          <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
          <div className="absolute top-6 left-6">
            <span className="bg-error-container text-on-error-container px-3 py-1 font-[family-name:var(--font-headline)] text-[10px] font-black tracking-widest uppercase">
              URGENT_INTEL
            </span>
          </div>
        </div>
        <div className="lg:col-span-4 p-8 md:p-12 flex flex-col justify-center">
          <div className="mb-4 flex items-center gap-2 text-on-surface-variant font-[family-name:var(--font-headline)] text-[10px] tracking-widest uppercase">
            <span>OCT_24_2024</span>
            <span className="w-8 h-[1px] bg-outline-variant" />
            <span>9_MIN_READ</span>
          </div>
          <h1 className="font-[family-name:var(--font-headline)] text-4xl md:text-5xl font-black text-primary tracking-tighter leading-none uppercase mb-6">
            THE REAPER_V2:
            <br />
            BYPASSING KERNEL ISOLATION
          </h1>
          <p className="text-on-surface-variant text-sm mb-8 leading-relaxed max-w-sm">
            A comprehensive disassembly of the latest hypervisor vulnerability.
            We explore how hardware-level flaws allow for complete guest-to-host
            privilege escalation.
          </p>
          <div className="flex items-center gap-4">
            <div className="h-10 w-10 bg-surface-variant flex items-center justify-center border border-red-900/30">
              <span className="material-symbols-outlined text-red-600">
                terminal
              </span>
            </div>
            <div>
              <p className="text-xs font-[family-name:var(--font-headline)] font-bold uppercase tracking-widest">
                OP_X_NULL
              </p>
              <p className="text-[10px] text-gray-500 uppercase tracking-widest font-[family-name:var(--font-headline)]">
                Lead Researcher
              </p>
            </div>
          </div>
          <button className="mt-10 group/btn flex items-center gap-3 text-red-500 font-[family-name:var(--font-headline)] font-bold text-xs tracking-widest uppercase">
            DECRYPT FULL REPORT
            <span className="material-symbols-outlined group-hover/btn:translate-x-2 transition-transform">
              arrow_right_alt
            </span>
          </button>
        </div>
      </section>

      {/* Article Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {articles.map((article) => (
          <article
            key={article.title}
            className="bg-surface-container-low p-6 border-b-2 border-transparent hover:border-red-600 transition-all group"
          >
            <div className="h-48 w-full bg-surface-container mb-6 overflow-hidden flex items-center justify-center">
              <span className="material-symbols-outlined text-red-900/10 text-[80px] group-hover:scale-110 transition-transform duration-500">
                security
              </span>
            </div>
            <div className="flex justify-between items-start mb-4">
              <span className="text-[10px] font-[family-name:var(--font-headline)] text-on-surface-variant tracking-widest uppercase">
                {article.category}
              </span>
              <span
                className={`text-[10px] font-[family-name:var(--font-headline)] ${article.severityColor} tracking-widest uppercase`}
              >
                {article.severity}
              </span>
            </div>
            <h3 className="font-[family-name:var(--font-headline)] text-xl font-bold text-on-surface mb-3 uppercase leading-tight group-hover:text-primary transition-colors">
              {article.title}
            </h3>
            <p className="text-on-surface-variant text-xs mb-6 line-clamp-3 leading-relaxed">
              {article.excerpt}
            </p>
            <div className="flex justify-between items-center mt-auto pt-6 border-t border-outline-variant/10">
              <span className="text-[10px] font-[family-name:var(--font-headline)] text-gray-600 uppercase">
                BY: {article.author}
              </span>
              <button className="bg-surface-container-high px-3 py-2 text-[10px] font-[family-name:var(--font-headline)] font-bold uppercase tracking-widest hover:shadow-[0_0_15px_rgba(255,0,0,0.3)] hover:text-primary transition-all">
                READ_LOG
              </button>
            </div>
          </article>
        ))}

        {/* Wide Article Card */}
        <article className="bg-surface-container-low p-6 border-b-2 border-transparent hover:border-red-600 transition-all group lg:col-span-2">
          <div className="flex flex-col md:flex-row gap-8">
            <div className="h-64 md:h-auto md:w-1/2 bg-surface-container overflow-hidden flex items-center justify-center">
              <span className="material-symbols-outlined text-red-900/10 text-[100px] group-hover:scale-110 transition-transform duration-500">
                public
              </span>
            </div>
            <div className="md:w-1/2 flex flex-col justify-center">
              <div className="flex justify-between items-start mb-4">
                <span className="text-[10px] font-[family-name:var(--font-headline)] text-on-surface-variant tracking-widest uppercase">
                  IOT_SECURITY
                </span>
                <span className="text-[10px] font-[family-name:var(--font-headline)] text-gray-400 tracking-widest uppercase">
                  STABLE
                </span>
              </div>
              <h3 className="font-[family-name:var(--font-headline)] text-2xl font-bold text-on-surface mb-4 uppercase leading-tight group-hover:text-primary transition-colors">
                SMART_CITY_GRID: 400 ZERO DAYS DISCOVERED IN TRAFFIC CONTROL
                SYSTEMS
              </h3>
              <p className="text-on-surface-variant text-xs mb-8 leading-relaxed">
                Our team spent 6 months auditing municipal infrastructure. The
                results show a systemic failure in perimeter defense across major
                Western hubs.
              </p>
              <div className="flex justify-between items-center mt-auto">
                <span className="text-[10px] font-[family-name:var(--font-headline)] text-gray-600 uppercase">
                  BY: GRID_REAPER
                </span>
                <button className="bg-surface-container-high px-5 py-3 text-[10px] font-[family-name:var(--font-headline)] font-bold uppercase tracking-widest hover:shadow-[0_0_15px_rgba(255,0,0,0.3)] hover:text-primary transition-all">
                  DECRYPT_FULL_LOG
                </button>
              </div>
            </div>
          </div>
        </article>

        {/* Newsletter Signup */}
        <section className="bg-surface-container-highest p-8 flex flex-col justify-between border-l-4 border-red-600">
          <div>
            <h2 className="font-[family-name:var(--font-headline)] text-2xl font-black text-on-surface uppercase tracking-tight mb-2">
              JOIN THE FEED
            </h2>
            <p className="text-[10px] font-[family-name:var(--font-headline)] tracking-widest text-on-surface-variant uppercase mb-8">
              SECURE UPDATES DELIVERED VIA ENCRYPTED COMMS
            </p>
            <div className="space-y-6">
              <div>
                <label className="block text-[10px] font-[family-name:var(--font-headline)] text-gray-500 uppercase tracking-widest mb-1">
                  OPERATOR_EMAIL
                </label>
                <input
                  type="email"
                  placeholder="USER@SOURCEBLEED.NET"
                  className="w-full bg-surface-container-low border-0 border-b-2 border-outline-variant focus:border-primary transition-all px-0 py-2 text-sm font-[family-name:var(--font-headline)] tracking-widest placeholder:text-gray-700 outline-none focus:ring-0"
                />
              </div>
              <button className="w-full py-4 bg-primary text-on-primary font-[family-name:var(--font-headline)] font-black text-xs tracking-[0.3em] uppercase hover:bg-white hover:text-black transition-all">
                INITIALIZE_LINK
              </button>
            </div>
          </div>
          <div className="mt-12 flex justify-between items-end">
            <span className="material-symbols-outlined text-4xl text-red-900/20">
              security
            </span>
            <p className="text-[8px] font-[family-name:var(--font-headline)] text-gray-600 text-right uppercase leading-tight">
              ACTIVE_NODES: 142
              <br />
              SESSION_ID: 0x8F92
            </p>
          </div>
        </section>
      </div>

      {/* Research Timeline */}
      <section className="mt-24 border-t border-outline-variant/20 pt-16">
        <h2 className="font-[family-name:var(--font-headline)] text-3xl font-black text-on-surface uppercase tracking-tighter mb-12">
          REAPER_TIMELINE
        </h2>
        <div className="space-y-0">
          {timeline.map((item) => (
            <div
              key={item.num}
              className="group flex items-center gap-8 py-8 border-b border-outline-variant/10 hover:bg-red-950/5 transition-all px-4"
            >
              <span className="font-[family-name:var(--font-headline)] font-bold text-red-900/40 text-4xl tabular-nums">
                {item.num}
              </span>
              <div className="flex-1">
                <h4 className="font-[family-name:var(--font-headline)] text-lg font-bold text-on-surface uppercase tracking-widest group-hover:text-primary transition-colors">
                  {item.title}
                </h4>
                <p className="text-xs text-on-surface-variant">{item.desc}</p>
              </div>
              <span className="material-symbols-outlined text-gray-700 group-hover:text-primary">
                arrow_forward
              </span>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
