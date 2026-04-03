export const metadata = {
  title: "eSIM_BLEED: 93 VULNS IN THE OPEN-SOURCE eSIM STACK | SOURCE BLEED",
  description:
    "We audited lpac and OpenEUICC — the most widely used open-source eSIM tools — and found 93 vulnerabilities, including a CVSS 9.8 remote kill chain that exposes subscriber credentials.",
};

const findings = {
  critical: 12,
  high: 26,
  medium: 33,
  low: 22,
  total: 93,
  killChains: 6,
};

export default function EsimBleedPost() {
  return (
    <article className="max-w-4xl mx-auto px-6 md:px-12 pt-8 pb-24">
      {/* Header */}
      <header className="mb-16">
        <div className="flex items-center gap-3 mb-6">
          <span className="bg-error-container text-on-error-container px-3 py-1 text-[10px] font-[family-name:var(--font-headline)] font-black tracking-widest">
            CRITICAL
          </span>
          <span className="text-[10px] font-[family-name:var(--font-headline)] text-on-surface-variant tracking-widest">
            APR_02_2026
          </span>
          <span className="w-8 h-[1px] bg-outline-variant" />
          <span className="text-[10px] font-[family-name:var(--font-headline)] text-on-surface-variant tracking-widest">
            25_MIN_READ
          </span>
        </div>

        <h1 className="font-[family-name:var(--font-headline)] text-5xl md:text-7xl font-black tracking-tighter leading-none uppercase mb-6">
          eSIM<span className="text-primary-container">_BLEED</span>
        </h1>
        <p className="text-on-surface-variant text-xl font-light leading-relaxed border-l-2 border-red-600/30 pl-6 mb-8 max-w-2xl">
          93 vulnerabilities in lpac + OpenEUICC. A CVSS 9.8 kill chain that
          lets a network attacker steal your SIM credentials. Every open-source
          eSIM tool ships with TLS validation disabled.
        </p>

        <div className="flex items-center gap-6 pt-6 border-t border-outline-variant/20">
          <div className="flex items-center gap-3">
            <div className="h-10 w-10 bg-surface-variant flex items-center justify-center border border-red-900/30">
              <span className="material-symbols-outlined text-red-600 text-lg">
                sim_card
              </span>
            </div>
            <div>
              <p className="text-xs font-[family-name:var(--font-headline)] font-bold uppercase tracking-widest">
                SOURCE_BLEED_TEAM
              </p>
              <p className="text-[10px] text-gray-500 uppercase tracking-widest font-[family-name:var(--font-headline)]">
                eSIM Security Research
              </p>
            </div>
          </div>
          <div className="ml-auto flex gap-6">
            <div className="text-center">
              <span className="block text-2xl font-[family-name:var(--font-headline)] font-black text-primary">
                {findings.total}
              </span>
              <span className="text-[8px] text-gray-500 font-[family-name:var(--font-headline)] tracking-widest">
                VULNS
              </span>
            </div>
            <div className="text-center">
              <span className="block text-2xl font-[family-name:var(--font-headline)] font-black text-primary">
                9.8
              </span>
              <span className="text-[8px] text-gray-500 font-[family-name:var(--font-headline)] tracking-widest">
                MAX_CVSS
              </span>
            </div>
            <div className="text-center">
              <span className="block text-2xl font-[family-name:var(--font-headline)] font-black text-primary">
                {findings.killChains}
              </span>
              <span className="text-[8px] text-gray-500 font-[family-name:var(--font-headline)] tracking-widest">
                KILL_CHAINS
              </span>
            </div>
          </div>
        </div>
      </header>

      {/* TLDR */}
      <section className="mb-16 bg-error-container/10 border border-red-900/30 p-8">
        <h2 className="font-[family-name:var(--font-headline)] text-sm font-black tracking-widest text-primary mb-4">
          // TL;DR
        </h2>
        <p className="text-on-surface-variant leading-relaxed">
          <strong className="text-on-surface">lpac</strong> is the most popular
          open-source eSIM LPA client.{" "}
          <strong className="text-on-surface">OpenEUICC</strong> is the leading
          Android eSIM management app that uses lpac via JNI. Together, they form
          the backbone of the open-source eSIM ecosystem. We found that{" "}
          <strong className="text-primary">
            both projects ship with TLS certificate validation completely
            disabled
          </strong>
          , meaning every SM-DP+ connection is vulnerable to trivial
          man-in-the-middle attacks. Combined with integer overflows in the DER
          parser and unchecked JNI pointer casts, a network attacker can steal
          subscriber credentials (Ki, OPc, IMSI) or achieve remote code
          execution.
        </p>
      </section>

      {/* Findings Breakdown */}
      <section className="mb-16">
        <SectionTitle>01 // DAMAGE_REPORT</SectionTitle>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          <StatBox
            label="CRITICAL"
            value={findings.critical}
            color="text-red-500"
          />
          <StatBox
            label="HIGH"
            value={findings.high}
            color="text-orange-400"
          />
          <StatBox
            label="MEDIUM"
            value={findings.medium}
            color="text-yellow-500"
          />
          <StatBox label="LOW" value={findings.low} color="text-gray-400" />
        </div>
        <div className="bg-surface-container-low p-6 border border-outline-variant/20">
          <table className="w-full text-xs font-[family-name:var(--font-headline)]">
            <thead>
              <tr className="text-left text-gray-500 tracking-widest uppercase border-b border-outline-variant/20">
                <th className="pb-3">DOMAIN</th>
                <th className="pb-3 text-center">CRIT</th>
                <th className="pb-3 text-center">HIGH</th>
                <th className="pb-3 text-center">MED</th>
                <th className="pb-3 text-center">LOW</th>
                <th className="pb-3 text-center">TOTAL</th>
              </tr>
            </thead>
            <tbody className="text-on-surface-variant">
              <DomainRow
                name="MEMORY / PARSER"
                c={5}
                h={10}
                m={11}
                l={8}
              />
              <DomainRow name="NETWORK / TLS" c={3} h={5} m={2} l={2} />
              <DomainRow name="DRIVER / OS" c={2} h={5} m={7} l={5} />
              <DomainRow name="JNI BRIDGE" c={2} h={3} m={5} l={0} />
              <DomainRow name="ANDROID" c={0} h={3} m={8} l={7} />
            </tbody>
          </table>
        </div>
      </section>

      {/* The Big Three */}
      <section className="mb-16">
        <SectionTitle>02 // THE_TRIPLE_THREAT</SectionTitle>
        <p className="text-on-surface-variant leading-relaxed mb-8">
          Three classes of vulnerability combine to form the deadliest attack
          surface. Each is dangerous alone. Together, they create a CVSS 9.8
          kill chain.
        </p>

        {/* Threat 1: TLS */}
        <ThreatCard
          id="THREAT_01"
          title="TLS VALIDATION: OFF"
          severity="CRITICAL"
          icon="lock_open"
          cvss="8.1"
        >
          <p className="text-on-surface-variant text-sm leading-relaxed mb-6">
            Both lpac HTTP backends &mdash; curl and WinHTTP &mdash; ship with
            certificate validation{" "}
            <strong className="text-primary">completely disabled</strong>. This
            isn&apos;t a misconfiguration. It&apos;s hardcoded.
          </p>
          <CodeBlock filename="driver/http/curl.c:91-92" language="c">
            {`libcurl._curl_easy_setopt(curl, CURLOPT_SSL_VERIFYPEER, 0L);
libcurl._curl_easy_setopt(curl, CURLOPT_SSL_VERIFYHOST, 0L);`}
          </CodeBlock>
          <CodeBlock filename="driver/http/winhttp.c:71" language="c">
            {`WinHttpSetOption(hRequest, WINHTTP_OPTION_SECURITY_FLAGS,
    &(DWORD){SECURITY_FLAG_IGNORE_UNKNOWN_CA}, sizeof(DWORD));`}
          </CodeBlock>
          <p className="text-on-surface-variant text-sm leading-relaxed mt-6">
            OpenEUICC doubles down with{" "}
            <code className="text-primary bg-surface-container px-1">
              AllowAllTrustManager
            </code>{" "}
            &mdash; a TrustManager where{" "}
            <code className="text-primary bg-surface-container px-1">
              checkServerTrusted()
            </code>{" "}
            simply returns without doing anything. The Lint warning is
            suppressed with{" "}
            <code className="text-primary bg-surface-container px-1">
              @SuppressLint
            </code>
            .
          </p>
          <p className="text-on-surface-variant text-sm leading-relaxed mt-4">
            This means{" "}
            <strong className="text-on-surface">
              any certificate is accepted
            </strong>
            . Self-signed, expired, wrong domain, revoked &mdash; all pass.
            A coffee-shop Wi-Fi attacker with DNS spoofing can impersonate any
            SM-DP+ server and intercept eSIM profile downloads containing
            subscriber master keys.
          </p>
          <Impact>
            GSMA SGP.22 RSP security model completely invalidated. CVE-assignable as standalone finding.
          </Impact>
        </ThreatCard>

        {/* Threat 2: DER Parser */}
        <ThreatCard
          id="THREAT_02"
          title="DER PARSER: CHAINABLE OVERFLOW"
          severity="CRITICAL"
          icon="data_object"
          cvss="8.1"
        >
          <p className="text-on-surface-variant text-sm leading-relaxed mb-6">
            The custom DER/ASN.1 parser in{" "}
            <code className="text-primary bg-surface-container px-1">
              euicc/derutil.c
            </code>{" "}
            is the backbone of all eSIM protocol handling. It has three
            chainable integer overflows that corrupt the entire parse tree.
          </p>
          <CodeBlock filename="derutil.c:40-52 — Length field overflow" language="c">
            {`if (result->length & 0x80) {
    uint8_t lengthlen = result->length & 0x7F;  // max 127, no cap
    result->length = 0;
    for (int i = 0; i < lengthlen; i++) {
        result->length = (result->length << 8) | *cptr;
        // lengthlen >= 5 → uint32_t wraps around
        cptr++; rlen--;
    }
}`}
          </CodeBlock>
          <CodeBlock filename="derutil.c:61 — self.length poisoning" language="c">
            {`result->self.length = result->value - result->self.ptr + result->length;
// length=0xFFFFFFFE + 3-byte header → self.length=1 (overflow)
// Every subsequent unpack_next() offset is now corrupted`}
          </CodeBlock>
          <CodeBlock filename="derutil.c:66-75 — Underflow to ~4GB read" language="c">
            {`cptr = prev->self.ptr + prev->self.length;
rlen = buffer_len - (cptr - buffer);
// When self.length is corrupted: cptr > buffer + buffer_len
// rlen wraps to ~4,294,967,295 → reads far beyond buffer`}
          </CodeBlock>
          <Impact>
            Chain: crafted length field → self.length poisoned → unpack_next reads arbitrary memory.
            Every ES10a/b/c and ES8+ parser path is affected. Reachable from network via SM-DP+ response.
          </Impact>
        </ThreatCard>

        {/* Threat 3: JNI Bridge */}
        <ThreatCard
          id="THREAT_03"
          title="JNI BRIDGE: ARBITRARY MEMORY READ"
          severity="CRITICAL"
          icon="memory"
          cvss="7.8"
        >
          <p className="text-on-surface-variant text-sm leading-relaxed mb-6">
            OpenEUICC calls lpac through JNI. The bridge code in{" "}
            <code className="text-primary bg-surface-container px-1">
              lpac-jni.c
            </code>{" "}
            casts Java{" "}
            <code className="text-primary bg-surface-container px-1">
              jlong
            </code>{" "}
            values directly to C pointers &mdash; without any validation &mdash;
            at 15 call sites.
          </p>
          <CodeBlock
            filename="lpac-jni.c:273 — stringDeref: double dereference"
            language="c"
          >
            {`// Java passes any 64-bit value as jlong "handle"
// C side blindly casts and double-dereferences:
return toJString(env, *((char **) curr));
// curr = attacker-controlled address → arbitrary memory read primitive`}
          </CodeBlock>
          <p className="text-on-surface-variant text-sm leading-relaxed mt-6">
            Additionally, ~30 JNI return values (
            <code className="text-primary bg-surface-container px-1">
              GetStringUTFChars
            </code>
            ,{" "}
            <code className="text-primary bg-surface-container px-1">
              FindClass
            </code>
            ,{" "}
            <code className="text-primary bg-surface-container px-1">
              calloc
            </code>
            ) are never checked for NULL. The bridge is where Java&apos;s type
            safety ends and C&apos;s pointer arithmetic begins &mdash; and
            there are no guardrails at the crossing.
          </p>
          <Impact>
            Arbitrary memory read from Java side. Combined with zero sensitive data clearing,
            previous session ICCID/Ki/IMEI can be recovered from heap.
          </Impact>
        </ThreatCard>
      </section>

      {/* Kill Chain 1 */}
      <section className="mb-16">
        <SectionTitle>03 // KILL_CHAIN: REMOTE PROFILE HIJACKING</SectionTitle>

        <div className="bg-surface-container-lowest border border-red-900/40 p-8 mb-8">
          <div className="flex items-center gap-4 mb-6">
            <span className="bg-error-container text-on-error-container px-3 py-1 text-[10px] font-[family-name:var(--font-headline)] font-black tracking-widest">
              CVSS 9.8
            </span>
            <span className="text-[10px] font-[family-name:var(--font-headline)] text-on-surface-variant tracking-widest">
              REMOTE / NO_AUTH / NO_INTERACTION
            </span>
          </div>

          <div className="space-y-0 font-[family-name:var(--font-headline)] text-sm">
            <KillStep step={1} label="DNS_SPOOF">
              Attacker poisons DNS: SM-DP+ domain resolves to attacker IP
            </KillStep>
            <KillStep step={2} label="TLS_BYPASS">
              lpac connects with self-signed cert &mdash; VERIFYPEER=0 accepts anything
            </KillStep>
            <KillStep step={3} label="PAYLOAD_INJECT">
              Attacker returns crafted ES9+ JSON with base64-encoded malicious DER
            </KillStep>
            <KillStep step={4} label="BASE64_OVERFLOW">
              base64_decode_len() integer overflow &rarr; small buffer allocated, large write
            </KillStep>
            <KillStep step={5} label="DER_CHAIN">
              Length field manipulation &rarr; self.length poisoned &rarr; unpack_next OOB R/W
            </KillStep>
            <KillStep step={6} label="HEAP_CORRUPT">
              Heap metadata overwrite &rarr; code execution
            </KillStep>
            <KillStep step={7} label="EXFILTRATE" isLast>
              Subscriber credentials extracted: Ki, OPc, IMSI &mdash; SIM cloning achieved
            </KillStep>
          </div>
        </div>

        <p className="text-on-surface-variant text-sm leading-relaxed">
          The absence of build hardening flags (no{" "}
          <code className="text-primary bg-surface-container px-1">
            FORTIFY_SOURCE
          </code>
          , no{" "}
          <code className="text-primary bg-surface-container px-1">
            stack-protector
          </code>
          , no PIE/RELRO) means there are no speed bumps between heap
          corruption and code execution. This is a textbook chain from network
          position to full subscriber compromise.
        </p>
      </section>

      {/* ASAN Confirmed */}
      <section className="mb-16">
        <SectionTitle>04 // ASAN_CONFIRMED: THE ZERO-LENGTH ICCID</SectionTitle>
        <p className="text-on-surface-variant text-sm leading-relaxed mb-6">
          One finding was independently confirmed with AddressSanitizer crash reproduction.
          A zero-length ICCID TLV (<code className="text-primary bg-surface-container px-1">5A 00</code>)
          in an SM-DP+ response triggers an integer underflow in{" "}
          <code className="text-primary bg-surface-container px-1">hexutil.c</code>:
        </p>
        <CodeBlock filename="hexutil.c:107 — bin2gsmbcd" language="c">
          {`// bin_len == 0 (from zero-length ICCID TLV)
int n = euicc_hexutil_bin2hex(output, output_len, bin, bin_len);
// n = 0
n -= 1;
// n = -1, but cast to uint32_t = 0xFFFFFFFF
gsmbcd_swap_chars(output, n);
// Attempts to swap 4,294,967,295 bytes → ASAN: heap-buffer-overflow`}
        </CodeBlock>
        <div className="bg-surface-container-low border-l-4 border-primary p-6 mt-6">
          <p className="text-[10px] font-[family-name:var(--font-headline)] text-primary tracking-widest mb-2">
            REPRODUCTION STATUS
          </p>
          <p className="text-on-surface text-sm">
            ASAN crash confirmed by external researcher (Jhury Kevin Lastre).
            Trigger requires only a single malformed TLV in SM-DP+ response. No authentication
            needed from attacker&apos;s side when TLS validation is disabled.
          </p>
        </div>
      </section>

      {/* More Kill Chains */}
      <section className="mb-16">
        <SectionTitle>05 // MORE_KILL_CHAINS</SectionTitle>

        <div className="space-y-4">
          <MiniKillChain
            id="KC-2"
            title="MALICIOUS_eUICC → RCE"
            cvss="7.5"
            vector="PHYSICAL"
            steps="Malicious SIM card → DER length=0xFFFFFFFE → self.length overflow → ICCID malloc(1) → heap overflow → no stack protector → RCE"
          />
          <MiniKillChain
            id="KC-3"
            title="MALICIOUS_APP → PROFILE_THEFT"
            cvss="7.5"
            vector="ANDROID"
            steps="Malicious app → lpa: URI intent (exported, no permission guard) → attacker SMDP injection → TLS bypass → profile theft"
          />
          <MiniKillChain
            id="KC-4"
            title="WINHTTP_STACK_OVERFLOW → RCE"
            cvss="8.1"
            vector="WINDOWS"
            steps="Malicious QR code → hostname > 256 chars → sizeof/wchar mismatch → stack buffer overflow → no ASLR/canary → direct RCE"
          />
          <MiniKillChain
            id="KC-5"
            title="LOCAL_SUPPLY_CHAIN"
            cvss="7.8"
            vector="LOCAL"
            steps="ENV var injection (APDU_UQMI_PROGRAM) + SO hijacking (dlopen no verify) + Magisk TMPDIR race → arbitrary execution including root"
          />
          <MiniKillChain
            id="KC-6"
            title="JNI_HANDLE → MEMORY_READ"
            cvss="7.0"
            vector="LOCAL"
            steps="jlong handle manipulation → double pointer deref → arbitrary memory read → recover ICCID/Ki from heap (no zeroing)"
          />
        </div>
      </section>

      {/* Root Causes */}
      <section className="mb-16">
        <SectionTitle>06 // ROOT_CAUSE_ANALYSIS</SectionTitle>
        <p className="text-on-surface-variant text-sm leading-relaxed mb-8">
          93 findings reduce to 5 systemic patterns. Fix the patterns, not just
          the symptoms.
        </p>

        <div className="space-y-4">
          <RootCause
            id="01"
            title="ZERO-LENGTH DEFENSE ABSENT"
            desc="bin2hex, bin2gsmbcd, base64_decode — none handle len=0. TLV length=0 is valid BER/DER."
          />
          <RootCause
            id="02"
            title="INTEGER OVERFLOW GUARDS MISSING"
            desc="2*bin_len, length*2+1, (len+2)/3*4+1 — every size calculation is unguarded. uint32_t overflow → small malloc → massive write."
          />
          <RootCause
            id="03"
            title="RETURN VALUES IGNORED"
            desc="bin2hex/bin2gsmbcd return -1 on error. Every ES8/ES9/ES10 parser ignores it and proceeds with corrupted data."
          />
          <RootCause
            id="04"
            title="JNI RETURNS UNCHECKED"
            desc="GetStringUTFChars, FindClass, calloc — 30+ call sites with no NULL check. The Java-to-C boundary has zero safety net."
          />
          <RootCause
            id="05"
            title="BUILD HARDENING ABSENT"
            desc="No FORTIFY_SOURCE, no stack-protector, no PIE/RELRO. Exploit development difficulty drops from 'hard' to 'trivial'."
          />
        </div>
      </section>

      {/* What's at Stake */}
      <section className="mb-16">
        <SectionTitle>07 // WHAT_IS_AT_STAKE</SectionTitle>
        <div className="bg-surface-container-low p-8 border border-outline-variant/20">
          <p className="text-on-surface-variant text-sm leading-relaxed mb-6">
            An eSIM profile contains:
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <StakeItem
              label="Ki"
              desc="Subscriber authentication key. With this, an attacker can clone the SIM and receive all calls/SMS."
            />
            <StakeItem
              label="OPc"
              desc="Operator variant algorithm config. Combined with Ki, enables full Milenage authentication bypass."
            />
            <StakeItem
              label="IMSI"
              desc="International mobile subscriber identity. Enables tracking, targeted interception, and identity theft."
            />
          </div>
          <p className="text-on-surface-variant text-sm leading-relaxed mt-6 border-t border-outline-variant/20 pt-6">
            These are the crown jewels of mobile security. SM-DP+ profile
            download is the{" "}
            <strong className="text-on-surface">only moment</strong> these
            credentials traverse a network. GSMA designed SGP.22 with TLS
            mutual authentication specifically to protect this moment. lpac
            removes that protection entirely.
          </p>
        </div>
      </section>

      {/* Positive Elements */}
      <section className="mb-16">
        <SectionTitle>08 // NOT_ALL_BAD</SectionTitle>
        <p className="text-on-surface-variant text-sm leading-relaxed mb-6">
          Credit where due. Both projects have genuine security strengths:
        </p>
        <ul className="space-y-3 text-on-surface-variant text-sm">
          <li className="flex items-start gap-3">
            <span className="material-symbols-outlined text-green-500 text-lg mt-0.5">
              check_circle
            </span>
            <span>
              <strong className="text-on-surface">GSMA CI root certificate pinning</strong> &mdash;
              When TLS validation IS active, OpenEUICC pins to GSMA CI roots, not the system CA store
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="material-symbols-outlined text-green-500 text-lg mt-0.5">
              check_circle
            </span>
            <span>
              <strong className="text-on-surface">HTTPS enforcement</strong> &mdash;
              HttpInterfaceImpl rejects non-https:// URLs
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="material-symbols-outlined text-green-500 text-lg mt-0.5">
              check_circle
            </span>
            <span>
              <strong className="text-on-surface">posix_spawnp over system()</strong> &mdash;
              uqmi uses explicit argv, preventing shell injection
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="material-symbols-outlined text-green-500 text-lg mt-0.5">
              check_circle
            </span>
            <span>
              <strong className="text-on-surface">Privilege separation</strong> &mdash;
              OpenEUICC separates privileged and unprivileged builds at compile time
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="material-symbols-outlined text-green-500 text-lg mt-0.5">
              check_circle
            </span>
            <span>
              <strong className="text-on-surface">EuiccService permission guard</strong> &mdash;
              BIND_EUICC_SERVICE signature protection on the system service
            </span>
          </li>
        </ul>
      </section>

      {/* Closing */}
      <section className="mb-16">
        <SectionTitle>09 // FINAL_ASSESSMENT</SectionTitle>
        <div className="bg-error-container/10 border border-red-900/30 p-8">
          <p className="text-on-surface text-sm leading-relaxed mb-4">
            The open-source eSIM stack has fundamental security issues that go
            beyond individual bugs. TLS validation disabled as a default,
            combined with a custom ASN.1 parser written without integer overflow
            guards, and a JNI bridge with no type safety &mdash; these are
            architectural problems that require architectural solutions.
          </p>
          <p className="text-on-surface-variant text-sm leading-relaxed mb-4">
            The most urgent fix is trivially simple:{" "}
            <strong className="text-primary">
              set CURLOPT_SSL_VERIFYPEER to 1
            </strong>
            . One line of code closes the most dangerous attack vector. The DER
            parser and JNI bridge require deeper work, but the TLS fix is a
            one-line change that should have been made years ago.
          </p>
          <p className="text-on-surface-variant text-sm leading-relaxed">
            If you&apos;re using lpac or OpenEUICC &mdash; or any tool built on
            them &mdash; assume your eSIM provisioning traffic has been
            interceptable by any network-adjacent attacker.
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-outline-variant/20 pt-8">
        <div className="flex flex-wrap gap-3 mb-6">
          {[
            "eSIM",
            "GSMA",
            "SGP.22",
            "lpac",
            "OpenEUICC",
            "TLS",
            "DER",
            "JNI",
            "SAST",
          ].map((tag) => (
            <span
              key={tag}
              className="bg-surface-container-high px-3 py-1 text-[10px] font-[family-name:var(--font-headline)] tracking-widest text-gray-400"
            >
              {tag}
            </span>
          ))}
        </div>
        <p className="text-[10px] font-[family-name:var(--font-headline)] text-gray-600 tracking-widest">
          RESPONSIBLE DISCLOSURE IN PROGRESS. FULL TECHNICAL DETAILS WILL BE
          RELEASED AFTER VENDOR PATCHES ARE AVAILABLE.
        </p>
      </footer>
    </article>
  );
}

/* ── Subcomponents ── */

function SectionTitle({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="font-[family-name:var(--font-headline)] text-2xl md:text-3xl font-black tracking-tighter uppercase mb-8 flex items-center gap-4">
      <span className="h-[1px] w-8 bg-primary" />
      {children}
    </h2>
  );
}

function StatBox({
  label,
  value,
  color,
}: {
  label: string;
  value: number;
  color: string;
}) {
  return (
    <div className="bg-surface-container-low border border-outline-variant/20 p-4 text-center">
      <span
        className={`block text-3xl font-[family-name:var(--font-headline)] font-black ${color}`}
      >
        {value}
      </span>
      <span className="text-[10px] font-[family-name:var(--font-headline)] text-gray-500 tracking-widest">
        {label}
      </span>
    </div>
  );
}

function DomainRow({
  name,
  c,
  h,
  m,
  l,
}: {
  name: string;
  c: number;
  h: number;
  m: number;
  l: number;
}) {
  return (
    <tr className="border-b border-outline-variant/10">
      <td className="py-3 text-on-surface font-bold tracking-widest">
        {name}
      </td>
      <td className="py-3 text-center text-red-500">{c || "-"}</td>
      <td className="py-3 text-center text-orange-400">{h || "-"}</td>
      <td className="py-3 text-center text-yellow-500">{m || "-"}</td>
      <td className="py-3 text-center text-gray-400">{l || "-"}</td>
      <td className="py-3 text-center text-on-surface font-bold">
        {c + h + m + l}
      </td>
    </tr>
  );
}

function ThreatCard({
  id,
  title,
  severity,
  icon,
  cvss,
  children,
}: {
  id: string;
  title: string;
  severity: string;
  icon: string;
  cvss: string;
  children: React.ReactNode;
}) {
  return (
    <div className="mb-8 border border-outline-variant/20 bg-surface-container-lowest">
      <div className="flex items-center justify-between p-6 border-b border-outline-variant/20 bg-surface-container-low">
        <div className="flex items-center gap-4">
          <span className="material-symbols-outlined text-primary text-2xl">
            {icon}
          </span>
          <div>
            <span className="text-[10px] font-[family-name:var(--font-headline)] text-gray-500 tracking-widest">
              {id}
            </span>
            <h3 className="font-[family-name:var(--font-headline)] text-lg font-black tracking-tight uppercase">
              {title}
            </h3>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <span className="bg-error-container text-on-error-container px-2 py-1 text-[10px] font-[family-name:var(--font-headline)] font-black tracking-widest">
            {severity}
          </span>
          <span className="font-[family-name:var(--font-headline)] font-black text-primary">
            {cvss}
          </span>
        </div>
      </div>
      <div className="p-6">{children}</div>
    </div>
  );
}

function CodeBlock({
  filename,
  language,
  children,
}: {
  filename: string;
  language: string;
  children: React.ReactNode;
}) {
  return (
    <div className="my-4">
      <div className="bg-surface-container-highest px-4 py-2 flex items-center justify-between border-b border-outline-variant/20">
        <span className="text-[10px] font-[family-name:var(--font-headline)] text-gray-400 tracking-widest">
          {filename}
        </span>
        <span className="text-[10px] font-[family-name:var(--font-headline)] text-gray-600 tracking-widest">
          {language.toUpperCase()}
        </span>
      </div>
      <pre className="bg-[#0a0a0a] p-4 overflow-x-auto text-sm leading-relaxed">
        <code className="text-on-surface-variant">{children}</code>
      </pre>
    </div>
  );
}

function Impact({ children }: { children: React.ReactNode }) {
  return (
    <div className="mt-6 bg-error-container/10 border-l-4 border-red-600 p-4">
      <span className="text-[10px] font-[family-name:var(--font-headline)] text-primary tracking-widest block mb-1">
        IMPACT
      </span>
      <p className="text-on-surface-variant text-sm">{children}</p>
    </div>
  );
}

function KillStep({
  step,
  label,
  children,
  isLast = false,
}: {
  step: number;
  label: string;
  children: React.ReactNode;
  isLast?: boolean;
}) {
  return (
    <div className="flex items-stretch gap-4">
      <div className="flex flex-col items-center">
        <div className="w-8 h-8 bg-primary-container text-on-primary-container flex items-center justify-center text-xs font-black shrink-0">
          {String(step).padStart(2, "0")}
        </div>
        {!isLast && <div className="w-[2px] flex-1 bg-red-900/30 my-1" />}
      </div>
      <div className={`${isLast ? "pb-0" : "pb-6"}`}>
        <span className="text-primary font-bold tracking-widest text-xs">
          {label}
        </span>
        <p className="text-on-surface-variant text-sm mt-1">{children}</p>
      </div>
    </div>
  );
}

function MiniKillChain({
  id,
  title,
  cvss,
  vector,
  steps,
}: {
  id: string;
  title: string;
  cvss: string;
  vector: string;
  steps: string;
}) {
  return (
    <div className="bg-surface-container-low p-6 border border-outline-variant/20 hover:border-red-900/40 transition-colors">
      <div className="flex items-center justify-between mb-3">
        <div className="flex items-center gap-3">
          <span className="text-[10px] font-[family-name:var(--font-headline)] text-gray-500 tracking-widest">
            {id}
          </span>
          <h3 className="font-[family-name:var(--font-headline)] font-bold text-sm tracking-tight uppercase">
            {title}
          </h3>
        </div>
        <div className="flex items-center gap-3">
          <span className="text-[10px] font-[family-name:var(--font-headline)] text-gray-500 tracking-widest">
            {vector}
          </span>
          <span className="font-[family-name:var(--font-headline)] font-black text-primary text-sm">
            {cvss}
          </span>
        </div>
      </div>
      <p className="text-on-surface-variant text-xs leading-relaxed">
        {steps}
      </p>
    </div>
  );
}

function RootCause({
  id,
  title,
  desc,
}: {
  id: string;
  title: string;
  desc: string;
}) {
  return (
    <div className="flex items-start gap-4 bg-surface-container-low p-6 border-l-4 border-primary/30">
      <span className="font-[family-name:var(--font-headline)] font-black text-red-900/40 text-2xl tabular-nums">
        {id}
      </span>
      <div>
        <h4 className="font-[family-name:var(--font-headline)] font-bold text-sm tracking-widest uppercase text-on-surface mb-1">
          {title}
        </h4>
        <p className="text-on-surface-variant text-xs leading-relaxed">
          {desc}
        </p>
      </div>
    </div>
  );
}

function StakeItem({ label, desc }: { label: string; desc: string }) {
  return (
    <div className="bg-surface-container p-4 border border-outline-variant/20">
      <span className="font-[family-name:var(--font-headline)] font-black text-primary text-lg">
        {label}
      </span>
      <p className="text-on-surface-variant text-xs mt-2 leading-relaxed">
        {desc}
      </p>
    </div>
  );
}
