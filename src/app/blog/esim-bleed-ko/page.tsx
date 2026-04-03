export const metadata = {
  title: "eSIM_BLEED: 오픈소스 eSIM 스택에서 발견된 93개 취약점 | SOURCE BLEED",
  description:
    "lpac과 OpenEUICC — 가장 널리 사용되는 오픈소스 eSIM 도구를 감사한 결과, CVSS 9.8 원격 킬 체인을 포함한 93개의 취약점을 발견했습니다. 가입자 인증 정보가 노출됩니다.",
};

const findings = {
  critical: 12,
  high: 26,
  medium: 33,
  low: 22,
  total: 93,
  killChains: 6,
};

export default function EsimBleedKoPost() {
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
          lpac + OpenEUICC에서 93개의 취약점을 발견했다. CVSS 9.8 킬 체인으로
          네트워크 공격자가 SIM 인증 정보를 탈취할 수 있다. 모든 오픈소스
          eSIM 도구가 TLS 검증을 비활성화한 채 배포되고 있다.
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
          <strong className="text-on-surface">lpac</strong>은 가장 널리
          사용되는 오픈소스 eSIM LPA 클라이언트다.{" "}
          <strong className="text-on-surface">OpenEUICC</strong>는 lpac을
          JNI로 호출하는 대표적인 Android eSIM 관리 앱이다. 이 두 프로젝트가
          오픈소스 eSIM 생태계의 근간을 이루고 있다. 감사 결과,{" "}
          <strong className="text-primary">
            두 프로젝트 모두 TLS 인증서 검증이 완전히 비활성화된 상태로
            배포
          </strong>
          되고 있음을 확인했다. 이는 모든 SM-DP+ 연결이 단순한
          중간자 공격에 노출됨을 의미한다. 여기에 DER 파서의 정수
          오버플로우와 검증 없는 JNI 포인터 캐스팅이 결합되면, 네트워크
          공격자가 가입자 인증 정보(Ki, OPc, IMSI)를 탈취하거나 원격
          코드 실행을 달성할 수 있다.
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
          세 가지 종류의 취약점이 결합되어 가장 치명적인 공격 표면을
          형성한다. 각각 단독으로도 위험하지만, 셋이 합쳐지면 CVSS 9.8
          킬 체인이 완성된다.
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
            lpac의 두 HTTP 백엔드 &mdash; curl과 WinHTTP &mdash; 모두
            인증서 검증이{" "}
            <strong className="text-primary">완전히 비활성화</strong>된
            상태로 배포된다. 설정 오류가 아니다. 하드코딩이다.
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
            OpenEUICC는 여기서 한 술 더 뜬다.{" "}
            <code className="text-primary bg-surface-container px-1">
              AllowAllTrustManager
            </code>{" "}
            &mdash;{" "}
            <code className="text-primary bg-surface-container px-1">
              checkServerTrusted()
            </code>{" "}
            가 아무 동작 없이 리턴하는 TrustManager를 사용한다. Lint 경고는{" "}
            <code className="text-primary bg-surface-container px-1">
              @SuppressLint
            </code>
            로 억제되어 있다.
          </p>
          <p className="text-on-surface-variant text-sm leading-relaxed mt-4">
            결과적으로{" "}
            <strong className="text-on-surface">
              어떤 인증서든 수락
            </strong>
            된다. 자체 서명, 만료, 도메인 불일치, 폐기 &mdash; 전부
            통과한다. 카페 Wi-Fi에서 DNS 스푸핑만 가능한 공격자도
            SM-DP+ 서버를 사칭하여 가입자 마스터 키가 포함된 eSIM 프로파일
            다운로드를 가로챌 수 있다.
          </p>
          <Impact>
            GSMA SGP.22 RSP 보안 모델이 완전히 무력화된다. 단독 발견만으로도 CVE 부여 대상이다.
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
            <code className="text-primary bg-surface-container px-1">
              euicc/derutil.c
            </code>{" "}
            의 자체 구현 DER/ASN.1 파서는 모든 eSIM 프로토콜 처리의
            핵심이다. 이 파서에 체이닝 가능한 세 가지 정수 오버플로우가
            존재하며, 전체 파스 트리를 오염시킨다.
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
            체인: 조작된 length 필드 &rarr; self.length 오염 &rarr; unpack_next가 임의 메모리를 읽는다.
            모든 ES10a/b/c 및 ES8+ 파서 경로가 영향을 받는다. SM-DP+ 응답을 통해 네트워크에서 도달 가능하다.
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
            OpenEUICC는 JNI를 통해 lpac을 호출한다.{" "}
            <code className="text-primary bg-surface-container px-1">
              lpac-jni.c
            </code>{" "}
            의 브릿지 코드는 Java{" "}
            <code className="text-primary bg-surface-container px-1">
              jlong
            </code>{" "}
            값을 &mdash; 어떤 검증도 없이 &mdash; C 포인터로 직접
            캐스팅한다. 이러한 호출 지점이 15곳에 존재한다.
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
            추가로, 약 30개의 JNI 반환값(
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
            )에 대한 NULL 검사가 전혀 없다. JNI 브릿지는 Java의 타입
            안전성이 끝나고 C의 포인터 연산이 시작되는 경계 &mdash;
            그런데 이 경계에 어떤 안전장치도 없다.
          </p>
          <Impact>
            Java 측에서 임의 메모리 읽기가 가능하다. 민감 데이터 제로화가 전혀 이루어지지 않으므로,
            이전 세션의 ICCID/Ki/IMEI를 힙에서 복구할 수 있다.
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
              공격자가 DNS를 오염시킨다: SM-DP+ 도메인이 공격자 IP로 해석됨
            </KillStep>
            <KillStep step={2} label="TLS_BYPASS">
              lpac이 자체 서명 인증서로 연결 &mdash; VERIFYPEER=0이 모든 인증서를 수락
            </KillStep>
            <KillStep step={3} label="PAYLOAD_INJECT">
              공격자가 악의적 DER이 base64 인코딩된 조작된 ES9+ JSON을 응답
            </KillStep>
            <KillStep step={4} label="BASE64_OVERFLOW">
              base64_decode_len() 정수 오버플로우 &rarr; 작은 버퍼 할당, 큰 쓰기
            </KillStep>
            <KillStep step={5} label="DER_CHAIN">
              Length 필드 조작 &rarr; self.length 오염 &rarr; unpack_next OOB R/W
            </KillStep>
            <KillStep step={6} label="HEAP_CORRUPT">
              힙 메타데이터 덮어쓰기 &rarr; 코드 실행
            </KillStep>
            <KillStep step={7} label="EXFILTRATE" isLast>
              가입자 인증 정보 추출: Ki, OPc, IMSI &mdash; SIM 복제 달성
            </KillStep>
          </div>
        </div>

        <p className="text-on-surface-variant text-sm leading-relaxed">
          빌드 보안 강화 플래그의 부재(
          <code className="text-primary bg-surface-container px-1">
            FORTIFY_SOURCE
          </code>
          없음,{" "}
          <code className="text-primary bg-surface-container px-1">
            stack-protector
          </code>
          없음, PIE/RELRO 없음)로 인해 힙 손상에서 코드 실행까지 어떤
          제동장치도 없다. 네트워크 포지션에서 완전한 가입자 침해까지
          이어지는 교과서적 체인이다.
        </p>
      </section>

      {/* ASAN Confirmed */}
      <section className="mb-16">
        <SectionTitle>04 // ASAN_CONFIRMED: THE ZERO-LENGTH ICCID</SectionTitle>
        <p className="text-on-surface-variant text-sm leading-relaxed mb-6">
          발견 사항 중 하나가 AddressSanitizer 크래시 재현을 통해 독립적으로
          확인되었다. SM-DP+ 응답 내 길이 0인 ICCID TLV(
          <code className="text-primary bg-surface-container px-1">5A 00</code>
          )가{" "}
          <code className="text-primary bg-surface-container px-1">hexutil.c</code>
          에서 정수 언더플로우를 유발한다:
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
            외부 연구자(Jhury Kevin Lastre)에 의해 ASAN 크래시가 확인되었다.
            트리거 조건은 SM-DP+ 응답 내 단일 비정상 TLV뿐이다. TLS 검증이
            비활성화된 상태에서는 공격자 측 인증이 필요 없다.
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
            steps="악성 SIM 카드 → DER length=0xFFFFFFFE → self.length 오버플로우 → ICCID malloc(1) → 힙 오버플로우 → stack protector 없음 → RCE"
          />
          <MiniKillChain
            id="KC-3"
            title="MALICIOUS_APP → PROFILE_THEFT"
            cvss="7.5"
            vector="ANDROID"
            steps="악성 앱 → lpa: URI 인텐트(exported, 권한 가드 없음) → 공격자 SMDP 주입 → TLS 우회 → 프로파일 탈취"
          />
          <MiniKillChain
            id="KC-4"
            title="WINHTTP_STACK_OVERFLOW → RCE"
            cvss="8.1"
            vector="WINDOWS"
            steps="악성 QR 코드 → 256자 초과 hostname → sizeof/wchar 불일치 → 스택 버퍼 오버플로우 → ASLR/canary 없음 → 직접 RCE"
          />
          <MiniKillChain
            id="KC-5"
            title="LOCAL_SUPPLY_CHAIN"
            cvss="7.8"
            vector="LOCAL"
            steps="환경변수 인젝션(APDU_UQMI_PROGRAM) + SO 하이재킹(dlopen 검증 없음) + Magisk TMPDIR 레이스 → root 포함 임의 실행"
          />
          <MiniKillChain
            id="KC-6"
            title="JNI_HANDLE → MEMORY_READ"
            cvss="7.0"
            vector="LOCAL"
            steps="jlong 핸들 조작 → 이중 포인터 역참조 → 임의 메모리 읽기 → 힙에서 ICCID/Ki 복구(제로화 없음)"
          />
        </div>
      </section>

      {/* Root Causes */}
      <section className="mb-16">
        <SectionTitle>06 // ROOT_CAUSE_ANALYSIS</SectionTitle>
        <p className="text-on-surface-variant text-sm leading-relaxed mb-8">
          93개의 발견 사항은 5가지 체계적 패턴으로 수렴한다. 개별 증상이
          아닌, 패턴을 고쳐야 한다.
        </p>

        <div className="space-y-4">
          <RootCause
            id="01"
            title="ZERO-LENGTH DEFENSE ABSENT"
            desc="bin2hex, bin2gsmbcd, base64_decode — 어느 것도 len=0을 처리하지 않는다. TLV length=0은 유효한 BER/DER이다."
          />
          <RootCause
            id="02"
            title="INTEGER OVERFLOW GUARDS MISSING"
            desc="2*bin_len, length*2+1, (len+2)/3*4+1 — 모든 크기 계산에 가드가 없다. uint32_t 오버플로우 → 작은 malloc → 대량 쓰기."
          />
          <RootCause
            id="03"
            title="RETURN VALUES IGNORED"
            desc="bin2hex/bin2gsmbcd는 오류 시 -1을 반환한다. 모든 ES8/ES9/ES10 파서가 이를 무시하고 오염된 데이터로 진행한다."
          />
          <RootCause
            id="04"
            title="JNI RETURNS UNCHECKED"
            desc="GetStringUTFChars, FindClass, calloc — 30곳 이상의 호출 지점에서 NULL 검사가 없다. Java-C 경계에 안전망이 전혀 없다."
          />
          <RootCause
            id="05"
            title="BUILD HARDENING ABSENT"
            desc="FORTIFY_SOURCE 없음, stack-protector 없음, PIE/RELRO 없음. 익스플로잇 개발 난이도가 '어려움'에서 '사소함'으로 떨어진다."
          />
        </div>
      </section>

      {/* What's at Stake */}
      <section className="mb-16">
        <SectionTitle>07 // WHAT_IS_AT_STAKE</SectionTitle>
        <div className="bg-surface-container-low p-8 border border-outline-variant/20">
          <p className="text-on-surface-variant text-sm leading-relaxed mb-6">
            eSIM 프로파일에는 다음이 포함되어 있다:
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <StakeItem
              label="Ki"
              desc="가입자 인증 키. 이것만 있으면 공격자가 SIM을 복제하여 모든 통화와 SMS를 수신할 수 있다."
            />
            <StakeItem
              label="OPc"
              desc="통신사 변형 알고리즘 설정값. Ki와 결합하면 완전한 Milenage 인증 우회가 가능하다."
            />
            <StakeItem
              label="IMSI"
              desc="국제 모바일 가입자 식별번호. 추적, 표적 감청, 신원 도용이 가능해진다."
            />
          </div>
          <p className="text-on-surface-variant text-sm leading-relaxed mt-6 border-t border-outline-variant/20 pt-6">
            이것들은 모바일 보안의 핵심 자산이다. SM-DP+ 프로파일
            다운로드는 이 인증 정보가 네트워크를 통과하는{" "}
            <strong className="text-on-surface">유일한 순간</strong>이다.
            GSMA는 바로 이 순간을 보호하기 위해 SGP.22에 TLS 상호 인증을
            설계했다. lpac은 그 보호를 완전히 제거하고 있다.
          </p>
        </div>
      </section>

      {/* Positive Elements */}
      <section className="mb-16">
        <SectionTitle>08 // NOT_ALL_BAD</SectionTitle>
        <p className="text-on-surface-variant text-sm leading-relaxed mb-6">
          공정하게 평가하자. 두 프로젝트 모두 실질적인 보안 강점이 있다:
        </p>
        <ul className="space-y-3 text-on-surface-variant text-sm">
          <li className="flex items-start gap-3">
            <span className="material-symbols-outlined text-green-500 text-lg mt-0.5">
              check_circle
            </span>
            <span>
              <strong className="text-on-surface">GSMA CI 루트 인증서 피닝</strong> &mdash;
              TLS 검증이 활성화된 경우, OpenEUICC는 시스템 CA 저장소가 아닌 GSMA CI 루트에 핀닝한다
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="material-symbols-outlined text-green-500 text-lg mt-0.5">
              check_circle
            </span>
            <span>
              <strong className="text-on-surface">HTTPS 강제</strong> &mdash;
              HttpInterfaceImpl이 https:// 이외의 URL을 거부한다
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="material-symbols-outlined text-green-500 text-lg mt-0.5">
              check_circle
            </span>
            <span>
              <strong className="text-on-surface">posix_spawnp over system()</strong> &mdash;
              uqmi가 명시적 argv를 사용하여 쉘 인젝션을 방지한다
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="material-symbols-outlined text-green-500 text-lg mt-0.5">
              check_circle
            </span>
            <span>
              <strong className="text-on-surface">권한 분리</strong> &mdash;
              OpenEUICC가 컴파일 타임에 권한/비권한 빌드를 분리한다
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="material-symbols-outlined text-green-500 text-lg mt-0.5">
              check_circle
            </span>
            <span>
              <strong className="text-on-surface">EuiccService 권한 가드</strong> &mdash;
              시스템 서비스에 BIND_EUICC_SERVICE 서명 보호가 적용되어 있다
            </span>
          </li>
        </ul>
      </section>

      {/* Closing */}
      <section className="mb-16">
        <SectionTitle>09 // FINAL_ASSESSMENT</SectionTitle>
        <div className="bg-error-container/10 border border-red-900/30 p-8">
          <p className="text-on-surface text-sm leading-relaxed mb-4">
            오픈소스 eSIM 스택에는 개별 버그를 넘어서는 근본적인 보안
            문제가 있다. 기본값으로 비활성화된 TLS 검증, 정수 오버플로우
            가드 없이 작성된 자체 ASN.1 파서, 타입 안전성이 없는 JNI
            브릿지 &mdash; 이것들은 아키텍처적 문제이며, 아키텍처적
            해결이 필요하다.
          </p>
          <p className="text-on-surface-variant text-sm leading-relaxed mb-4">
            가장 시급한 수정은 놀라울 정도로 간단하다:{" "}
            <strong className="text-primary">
              CURLOPT_SSL_VERIFYPEER를 1로 설정
            </strong>
            하면 된다. 한 줄의 코드 변경으로 가장 위험한 공격 벡터가
            차단된다. DER 파서와 JNI 브릿지는 더 깊은 작업이 필요하지만,
            TLS 수정은 몇 년 전에 이루어졌어야 할 한 줄짜리 변경이다.
          </p>
          <p className="text-on-surface-variant text-sm leading-relaxed">
            lpac이나 OpenEUICC &mdash; 또는 이들 기반의 어떤 도구든 &mdash;
            사용하고 있다면, eSIM 프로비저닝 트래픽이 네트워크 인접
            공격자에게 가로챌 수 있었다고 가정해야 한다.
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
