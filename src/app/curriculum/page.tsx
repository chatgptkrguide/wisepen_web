"use client";

import AnimatedSection from "@/components/AnimatedSection";

const readingPoints = [
  "비판적 사고력과 분석력 배양 (TOEFL iBT, 수능, SAT 등 표준화 시험 대비)",
  "다양한 주제의 읽기 자료를 통한 폭넓은 지식 습득",
  "새로운 어휘 학습 및 이해도 향상",
  "학문적 저작과 고전 소설 읽기 및 토론",
];

const writingPoints = [
  "한국 학생의 창의적 글쓰기 능력 향상 (구조화, 통일성)",
  "기본 문법 원리 이해 및 실제 작문 적용",
  "문단·에세이 구조, 일관성, 적절한 어휘 사용 중점",
  "다양한 글쓰기 유형: 개인 경험글, 설득 에세이, 논증문, 정보 전달문",
];

const features = [
  {
    title: "읽기 전략",
    description: "이해력과 기억력 향상을 위한 체계적인 읽기 전략을 학습합니다.",
  },
  {
    title: "비판적 사고",
    description:
      "텍스트 분석과 성찰적 사고 개발을 통해 깊이 있는 이해를 추구합니다.",
  },
  {
    title: "다양한 읽기 자료",
    description:
      "다양한 주제와 장르의 읽기 자료로 폭넓은 지식을 습득합니다.",
  },
  {
    title: "어휘 발달",
    description: "어휘 능력 향상에 초점을 맞춘 체계적인 학습을 진행합니다.",
  },
  {
    title: "연습문제 및 활동",
    description: "읽기 기술과 이해력 전략을 강화하는 다양한 활동을 제공합니다.",
  },
  {
    title: "다양한 스킬의 통합",
    description: "읽기, 쓰기, 비판적 사고를 통합한 종합적 학습을 지향합니다.",
  },
];

const levelData = [
  {
    level: "E1/M1",
    subjects: "기초 읽기이해, 문법, 기본 문장쓰기",
    speaking: true,
    novel: true,
    score: "11-14",
  },
  {
    level: "E2/M2",
    subjects: "기초 읽기이해, 문법, 문단 구성",
    speaking: true,
    novel: true,
    score: "15-18",
  },
  {
    level: "E3/M3",
    subjects: "중급 읽기이해, 문법, 에세이 작문",
    speaking: true,
    novel: true,
    score: "19-22",
  },
  {
    level: "E4/M4",
    subjects: "숙련된 읽기이해, 학술 에세이",
    speaking: false,
    novel: true,
    score: "23-26",
  },
  {
    level: "E5/M5",
    subjects: "고급 읽기이해, 분석적 글쓰기",
    speaking: false,
    novel: true,
    score: "27-28",
  },
  {
    level: "E6/M6",
    subjects: "숙련된 읽기분석, 작문 완성도",
    speaking: false,
    novel: true,
    score: "29-30",
  },
];

export default function CurriculumPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero */}
      <section className="relative bg-navy grain pt-32 pb-16 md:pb-20">
        <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
          <AnimatedSection delay={0.1} direction="up">
            <p className="text-gold-light/70 text-xs font-semibold tracking-[0.3em] uppercase mb-3">
              Curriculum
            </p>
          </AnimatedSection>
          <AnimatedSection delay={0.2} direction="up">
            <h1 className="font-[var(--font-playfair)] text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-5 leading-tight">
              교육과정
            </h1>
          </AnimatedSection>
          <AnimatedSection delay={0.3} direction="up">
            <p className="text-white/70 text-lg md:text-xl max-w-xl mb-6 leading-relaxed">
              모든 영역에서 학생들의 비판적 사고 능력 향상 및 이해력 향상
            </p>
          </AnimatedSection>
          <AnimatedSection delay={0.4} direction="up">
            <p className="text-white/50 text-sm tracking-wide">
              Reading / Writing / Listening / Speaking
            </p>
          </AnimatedSection>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gold/30" />
      </section>

      {/* Admission Notice */}
      <section className="max-w-7xl mx-auto px-6 lg:px-8 py-10">
        <AnimatedSection delay={0.1} direction="up">
          <div className="border-l-4 border-gold pl-6 py-4">
            <p className="text-foreground font-semibold mb-1">입학 안내</p>
            <p className="text-muted-foreground text-sm leading-relaxed mb-2">
              우리 학원은 영어 능력에 대한 높은 기준을 가지고 있으며, 입학은
              레벨테스트 결과에 따라 이루어집니다.
            </p>
            <p className="text-navy text-sm font-bold">
              100% 영어로 진행
            </p>
          </div>
        </AnimatedSection>
      </section>

      {/* Reading Course */}
      <section className="pt-10 pb-20 md:pb-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">
            <AnimatedSection delay={0.1} direction="left">
              <div>
                <p className="text-navy text-xs font-semibold tracking-[0.2em] uppercase mb-3">
                  Reading Course
                </p>
                <h2 className="font-[var(--font-playfair)] text-3xl md:text-4xl font-bold text-foreground mb-4 leading-tight">
                  Reading
                  <span className="text-gold"> Course</span>
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  비판적 사고력과 분석력을 배양하고, 다양한 읽기 자료를 통해
                  폭넓은 지식을 습득하는 체계적인 리딩 프로그램입니다.
                </p>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.2} direction="right">
              <ol className="space-y-5">
                {readingPoints.map((point, idx) => (
                  <li key={idx} className="flex gap-4">
                    <span className="flex-shrink-0 text-gold font-bold text-lg leading-snug">
                      {String(idx + 1).padStart(2, "0")}
                    </span>
                    <p className="text-foreground text-sm leading-relaxed border-b border-border/60 pb-5">
                      {point}
                    </p>
                  </li>
                ))}
              </ol>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Writing Course */}
      <section className="py-16 md:py-24 bg-navy grain relative">
        <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">
            <AnimatedSection delay={0.2} direction="left" className="order-2 lg:order-1">
              <ol className="space-y-5">
                {writingPoints.map((point, idx) => (
                  <li key={idx} className="flex gap-4">
                    <span className="flex-shrink-0 text-gold-light font-bold text-lg leading-snug">
                      {String(idx + 1).padStart(2, "0")}
                    </span>
                    <p className="text-white/80 text-sm leading-relaxed border-b border-white/10 pb-5">
                      {point}
                    </p>
                  </li>
                ))}
              </ol>
            </AnimatedSection>

            <AnimatedSection delay={0.1} direction="right" className="order-1 lg:order-2">
              <div>
                <p className="text-gold-light/70 text-xs font-semibold tracking-[0.2em] uppercase mb-3">
                  Writing Course
                </p>
                <h2 className="font-[var(--font-playfair)] text-3xl md:text-4xl font-bold text-white mb-4 leading-tight">
                  Writing
                  <span className="text-gold-light"> Course</span>
                </h2>
                <p className="text-white/60 leading-relaxed">
                  한국 학생들의 창의적 글쓰기 능력을 향상시키고, 다양한 글쓰기
                  유형을 통해 구조화된 작문 실력을 키우는 프로그램입니다.
                </p>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Curriculum Features */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <AnimatedSection delay={0.1} direction="up" className="mb-14">
            <p className="text-navy text-xs font-semibold tracking-[0.2em] uppercase mb-3">
              Features
            </p>
            <h2 className="font-[var(--font-playfair)] text-3xl md:text-4xl font-bold text-foreground mb-4">
              Curriculum
              <span className="text-gold"> Features</span>
            </h2>
            <p className="text-muted-foreground max-w-xl leading-relaxed">
              체계적이고 종합적인 커리큘럼으로 학생들의 영어 실력을 한 단계
              끌어올립니다.
            </p>
          </AnimatedSection>

          <div className="grid md:grid-cols-3 gap-x-10 gap-y-0">
            {features.map((feature, idx) => (
              <AnimatedSection
                key={idx}
                delay={0.05 + idx * 0.07}
                direction="up"
              >
                <div className="py-7 border-t border-border">
                  <h3 className="text-foreground font-bold text-base mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Level System Table */}
      <section className="py-16 md:py-24 bg-navy grain relative">
        <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
          <AnimatedSection delay={0.1} direction="up" className="mb-12">
            <p className="text-gold-light/70 text-xs font-semibold tracking-[0.2em] uppercase mb-3">
              Level System
            </p>
            <h2 className="font-[var(--font-playfair)] text-3xl md:text-4xl font-bold text-white mb-4">
              Program
              <span className="text-gold-light"> Levels</span>
            </h2>
            <p className="text-white/50 max-w-xl leading-relaxed">
              레벨테스트 결과에 따라 가장 적합한 레벨에 배치됩니다.
            </p>
          </AnimatedSection>

          <AnimatedSection delay={0.2} direction="up">
            {/* Desktop Table */}
            <div className="hidden md:block overflow-hidden">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-white/15">
                    <th className="px-5 py-4 text-left text-xs font-semibold text-gold-light tracking-wider uppercase">
                      레벨
                    </th>
                    <th className="px-5 py-4 text-left text-xs font-semibold text-gold-light tracking-wider uppercase">
                      주요 과목
                    </th>
                    <th className="px-5 py-4 text-center text-xs font-semibold text-gold-light tracking-wider uppercase">
                      Speaking &amp; Listening
                    </th>
                    <th className="px-5 py-4 text-center text-xs font-semibold text-gold-light tracking-wider uppercase">
                      Novel
                    </th>
                    <th className="px-5 py-4 text-center text-xs font-semibold text-gold-light tracking-wider uppercase">
                      배치 점수 (30점 만점)
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {levelData.map((row, idx) => (
                    <tr
                      key={idx}
                      className={
                        idx % 2 === 0 ? "bg-white/[0.03]" : "bg-transparent"
                      }
                    >
                      <td className="px-5 py-4">
                        <span className="text-gold-light font-bold text-sm">
                          {row.level}
                        </span>
                      </td>
                      <td className="px-5 py-4 text-white/75 text-sm">
                        {row.subjects}
                      </td>
                      <td className="px-5 py-4 text-center">
                        <span
                          className={`text-sm font-bold ${
                            row.speaking
                              ? "text-green-400"
                              : "text-white/25"
                          }`}
                        >
                          {row.speaking ? "O" : "-"}
                        </span>
                      </td>
                      <td className="px-5 py-4 text-center">
                        <span className="text-sm font-bold text-green-400">
                          O
                        </span>
                      </td>
                      <td className="px-5 py-4 text-center">
                        <span className="text-white font-semibold text-sm">
                          {row.score}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Mobile Cards */}
            <div className="md:hidden space-y-3">
              {levelData.map((row, idx) => (
                <div
                  key={idx}
                  className="border-l-2 border-gold/40 pl-4 py-3"
                >
                  <div className="flex items-baseline justify-between mb-2">
                    <span className="text-gold-light font-bold text-sm">
                      {row.level}
                    </span>
                    <span className="text-white/50 text-xs">
                      배치 점수: {row.score}
                    </span>
                  </div>
                  <p className="text-white/70 text-sm mb-2">{row.subjects}</p>
                  <div className="flex gap-4 text-xs text-white/40">
                    <span>
                      Speaking{" "}
                      <span className={row.speaking ? "text-green-400 font-bold" : "text-white/25"}>
                        {row.speaking ? "O" : "-"}
                      </span>
                    </span>
                    <span>
                      Novel <span className="text-green-400 font-bold">O</span>
                    </span>
                  </div>
                </div>
              ))}
            </div>

            {/* Legend */}
            <div className="mt-8 flex flex-col sm:flex-row gap-4 sm:gap-8 text-white/40 text-sm">
              <span>
                <strong className="text-white/60">E group</strong> &mdash;
                Elementary (초등)
              </span>
              <span>
                <strong className="text-white/60">M group</strong> &mdash;
                Middle (중등)
              </span>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-navy grain relative py-16 md:py-20">
        <div className="relative max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <AnimatedSection delay={0.1} direction="up">
            <h2 className="font-[var(--font-playfair)] text-3xl md:text-4xl font-bold text-white mb-4">
              Start Your
              <span className="text-gold-light"> Journey</span>
            </h2>
            <p className="text-white/50 max-w-lg mx-auto leading-relaxed mb-8">
              레벨테스트를 통해 학생에게 가장 적합한 과정을 안내해 드립니다.
              지금 상담을 예약하세요.
            </p>
            <a
              href="tel:031-915-2185"
              className="inline-block bg-gold text-navy px-8 py-3.5 rounded-sm text-sm font-bold tracking-wide hover:bg-gold-light transition-colors duration-200"
            >
              상담 예약하기
            </a>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
}
