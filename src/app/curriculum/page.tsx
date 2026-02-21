"use client";

import AnimatedSection from "@/components/AnimatedSection";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  BookOpen,
  PenTool,
  Headphones,
  MessageSquare,
  Brain,
  BookMarked,
  Lightbulb,
  Layers,
  CheckCircle,
  GraduationCap,
  AlertCircle,
  Globe,
  Target,
  FileText,
} from "lucide-react";

const readingPoints = [
  {
    icon: Brain,
    text: "비판적 사고력과 분석력 배양 (TOEFL iBT, 수능, SAT 등 표준화 시험 대비)",
  },
  {
    icon: Globe,
    text: "다양한 주제의 읽기 자료를 통한 폭넓은 지식 습득",
  },
  {
    icon: BookMarked,
    text: "새로운 어휘 학습 및 이해도 향상",
  },
  {
    icon: BookOpen,
    text: "학문적 저작과 고전 소설 읽기 및 토론",
  },
];

const writingPoints = [
  {
    icon: Lightbulb,
    text: "한국 학생의 창의적 글쓰기 능력 향상 (구조화, 통일성)",
  },
  {
    icon: CheckCircle,
    text: "기본 문법 원리 이해 및 실제 작문 적용",
  },
  {
    icon: Layers,
    text: "문단·에세이 구조, 일관성, 적절한 어휘 사용 중점",
  },
  {
    icon: FileText,
    text: "다양한 글쓰기 유형: 개인 경험글, 설득 에세이, 논증문, 정보 전달문",
  },
];

const features = [
  {
    icon: Target,
    title: "읽기 전략",
    description: "이해력과 기억력 향상을 위한 체계적인 읽기 전략을 학습합니다.",
  },
  {
    icon: Brain,
    title: "비판적 사고",
    description:
      "텍스트 분석과 성찰적 사고 개발을 통해 깊이 있는 이해를 추구합니다.",
  },
  {
    icon: BookOpen,
    title: "다양한 읽기 자료",
    description:
      "다양한 주제와 장르의 읽기 자료로 폭넓은 지식을 습득합니다.",
  },
  {
    icon: BookMarked,
    title: "어휘 발달",
    description: "어휘 능력 향상에 초점을 맞춘 체계적인 학습을 진행합니다.",
  },
  {
    icon: FileText,
    title: "연습문제 및 활동",
    description: "읽기 기술과 이해력 전략을 강화하는 다양한 활동을 제공합니다.",
  },
  {
    icon: Layers,
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
      {/* Hero Section */}
      <section className="relative bg-navy pt-32 pb-20 overflow-hidden">
        {/* Background decorations */}
        <div className="absolute inset-0">
          <div className="absolute top-0 right-0 w-96 h-96 bg-gold/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3" />
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-navy-light/30 rounded-full blur-3xl translate-y-1/3 -translate-x-1/4" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gold/3 rounded-full blur-3xl" />
        </div>

        <div className="relative max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <AnimatedSection delay={0.1} direction="up">
            <p className="text-gold-light/80 text-sm font-semibold tracking-[0.3em] uppercase mb-4">
              Curriculum
            </p>
          </AnimatedSection>
          <AnimatedSection delay={0.2} direction="up">
            <h1 className="font-[var(--font-playfair)] text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              교육과정
            </h1>
          </AnimatedSection>
          <AnimatedSection delay={0.3} direction="up">
            <p className="text-white/80 text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed">
              모든 영역에서 학생들의 비판적 사고 능력 향상 및 이해력 향상
            </p>
          </AnimatedSection>
          <AnimatedSection delay={0.4} direction="up">
            <div className="flex flex-wrap items-center justify-center gap-3">
              {[
                { label: "Reading", icon: BookOpen },
                { label: "Writing", icon: PenTool },
                { label: "Listening", icon: Headphones },
                { label: "Speaking", icon: MessageSquare },
              ].map((item) => (
                <Badge
                  key={item.label}
                  className="bg-white/10 text-white border-white/20 backdrop-blur-sm px-4 py-2 text-sm font-medium gap-2 hover:bg-white/20 transition-colors"
                >
                  <item.icon className="w-4 h-4" />
                  {item.label}
                </Badge>
              ))}
            </div>
          </AnimatedSection>
        </div>

        {/* Bottom wave */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg
            viewBox="0 0 1440 60"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-full"
            preserveAspectRatio="none"
          >
            <path
              d="M0 60L60 52C120 44 240 28 360 22C480 16 600 20 720 28C840 36 960 48 1080 50C1200 52 1320 44 1380 40L1440 36V60H1380C1320 60 1200 60 1080 60C960 60 840 60 720 60C600 60 480 60 360 60C240 60 120 60 60 60H0Z"
              className="fill-background"
            />
          </svg>
        </div>
      </section>

      {/* Admission Notice */}
      <section className="max-w-7xl mx-auto px-6 lg:px-8 -mt-4">
        <AnimatedSection delay={0.1} direction="up">
          <div className="bg-gradient-to-r from-navy/5 via-gold/5 to-navy/5 border border-gold/20 rounded-2xl p-6 md:p-8 flex flex-col md:flex-row items-start md:items-center gap-4">
            <div className="flex-shrink-0 w-12 h-12 bg-gold/10 rounded-xl flex items-center justify-center">
              <AlertCircle className="w-6 h-6 text-gold" />
            </div>
            <div className="flex-1">
              <p className="text-foreground font-semibold mb-1">입학 안내</p>
              <p className="text-muted-foreground text-sm leading-relaxed">
                우리 학원은 영어 능력에 대한 높은 기준을 가지고 있으며, 입학은
                레벨테스트 결과에 따라 이루어집니다.
              </p>
            </div>
            <Badge className="bg-navy text-white border-0 px-4 py-2 text-sm font-semibold whitespace-nowrap">
              <Globe className="w-3.5 h-3.5 mr-1" />
              100% 영어로 진행
            </Badge>
          </div>
        </AnimatedSection>
      </section>

      {/* Reading Course Section */}
      <section className="py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <AnimatedSection delay={0.1} direction="left">
              <div>
                <Badge className="bg-navy/10 text-navy border-0 px-3 py-1 text-xs font-semibold mb-4">
                  <BookOpen className="w-3 h-3 mr-1" />
                  Reading Course
                </Badge>
                <h2 className="font-[var(--font-playfair)] text-3xl md:text-4xl font-bold text-foreground mb-4 leading-tight">
                  Reading
                  <span className="text-gold"> Course</span>
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-8">
                  비판적 사고력과 분석력을 배양하고, 다양한 읽기 자료를 통해
                  폭넓은 지식을 습득하는 체계적인 리딩 프로그램입니다.
                </p>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.2} direction="right">
              <div className="space-y-4">
                {readingPoints.map((point, idx) => (
                  <div
                    key={idx}
                    className="flex items-start gap-4 bg-white rounded-xl p-5 shadow-sm border border-border/50 hover:shadow-md hover:border-navy/10 transition-all duration-300"
                  >
                    <div className="flex-shrink-0 w-10 h-10 bg-navy/5 rounded-lg flex items-center justify-center">
                      <point.icon className="w-5 h-5 text-navy" />
                    </div>
                    <p className="text-foreground text-sm leading-relaxed pt-2">
                      {point.text}
                    </p>
                  </div>
                ))}
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Writing Course Section */}
      <section className="py-20 md:py-28 bg-cream/50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <AnimatedSection delay={0.2} direction="left" className="order-2 lg:order-1">
              <div className="space-y-4">
                {writingPoints.map((point, idx) => (
                  <div
                    key={idx}
                    className="flex items-start gap-4 bg-white rounded-xl p-5 shadow-sm border border-border/50 hover:shadow-md hover:border-gold/20 transition-all duration-300"
                  >
                    <div className="flex-shrink-0 w-10 h-10 bg-gold/10 rounded-lg flex items-center justify-center">
                      <point.icon className="w-5 h-5 text-gold" />
                    </div>
                    <p className="text-foreground text-sm leading-relaxed pt-2">
                      {point.text}
                    </p>
                  </div>
                ))}
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.1} direction="right" className="order-1 lg:order-2">
              <div>
                <Badge className="bg-gold/10 text-gold border-0 px-3 py-1 text-xs font-semibold mb-4">
                  <PenTool className="w-3 h-3 mr-1" />
                  Writing Course
                </Badge>
                <h2 className="font-[var(--font-playfair)] text-3xl md:text-4xl font-bold text-foreground mb-4 leading-tight">
                  Writing
                  <span className="text-gold"> Course</span>
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-8">
                  한국 학생들의 창의적 글쓰기 능력을 향상시키고, 다양한 글쓰기
                  유형을 통해 구조화된 작문 실력을 키우는 프로그램입니다.
                </p>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Curriculum Features */}
      <section className="py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <AnimatedSection delay={0.1} direction="up" className="text-center mb-16">
            <Badge className="bg-navy/10 text-navy border-0 px-3 py-1 text-xs font-semibold mb-4">
              <GraduationCap className="w-3 h-3 mr-1" />
              Features
            </Badge>
            <h2 className="font-[var(--font-playfair)] text-3xl md:text-4xl font-bold text-foreground mb-4">
              Curriculum
              <span className="text-gold"> Features</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              체계적이고 종합적인 커리큘럼으로 학생들의 영어 실력을 한 단계
              끌어올립니다.
            </p>
          </AnimatedSection>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, idx) => (
              <AnimatedSection
                key={idx}
                delay={0.1 + idx * 0.1}
                direction="up"
              >
                <Card className="h-full border-border/50 hover:border-navy/15 hover:shadow-lg transition-all duration-300 group bg-white">
                  <CardHeader>
                    <div className="w-12 h-12 bg-gradient-to-br from-navy/10 to-gold/10 rounded-xl flex items-center justify-center mb-2 group-hover:from-navy/15 group-hover:to-gold/15 transition-colors duration-300">
                      <feature.icon className="w-6 h-6 text-navy" />
                    </div>
                    <CardTitle className="text-lg text-foreground">
                      {feature.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {feature.description}
                    </p>
                  </CardContent>
                </Card>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Level System Table */}
      <section className="py-20 md:py-28 bg-navy">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <AnimatedSection delay={0.1} direction="up" className="text-center mb-16">
            <Badge className="bg-white/10 text-gold-light border-0 px-3 py-1 text-xs font-semibold mb-4">
              <GraduationCap className="w-3 h-3 mr-1" />
              Level System
            </Badge>
            <h2 className="font-[var(--font-playfair)] text-3xl md:text-4xl font-bold text-white mb-4">
              Program
              <span className="text-gold-light"> Levels</span>
            </h2>
            <p className="text-white/60 max-w-2xl mx-auto leading-relaxed">
              레벨테스트 결과에 따라 가장 적합한 레벨에 배치됩니다.
            </p>
          </AnimatedSection>

          <AnimatedSection delay={0.2} direction="up">
            {/* Desktop Table */}
            <div className="hidden md:block bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 overflow-hidden">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-white/10">
                    <th className="px-6 py-5 text-left text-xs font-semibold text-gold-light tracking-wider uppercase">
                      레벨
                    </th>
                    <th className="px-6 py-5 text-left text-xs font-semibold text-gold-light tracking-wider uppercase">
                      주요 과목
                    </th>
                    <th className="px-6 py-5 text-center text-xs font-semibold text-gold-light tracking-wider uppercase">
                      Speaking &amp; Listening
                    </th>
                    <th className="px-6 py-5 text-center text-xs font-semibold text-gold-light tracking-wider uppercase">
                      Novel
                    </th>
                    <th className="px-6 py-5 text-center text-xs font-semibold text-gold-light tracking-wider uppercase">
                      배치 점수 (30점 만점)
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {levelData.map((row, idx) => (
                    <tr
                      key={idx}
                      className="border-b border-white/5 last:border-b-0 hover:bg-white/5 transition-colors duration-200"
                    >
                      <td className="px-6 py-5">
                        <span className="inline-flex items-center justify-center bg-gold/15 text-gold-light font-bold text-sm px-3 py-1.5 rounded-lg min-w-[70px]">
                          {row.level}
                        </span>
                      </td>
                      <td className="px-6 py-5 text-white/80 text-sm">
                        {row.subjects}
                      </td>
                      <td className="px-6 py-5 text-center">
                        <span
                          className={`inline-flex items-center justify-center w-8 h-8 rounded-full text-sm font-bold ${
                            row.speaking
                              ? "bg-green-500/15 text-green-400"
                              : "bg-white/5 text-white/30"
                          }`}
                        >
                          {row.speaking ? "O" : "X"}
                        </span>
                      </td>
                      <td className="px-6 py-5 text-center">
                        <span className="inline-flex items-center justify-center w-8 h-8 rounded-full text-sm font-bold bg-green-500/15 text-green-400">
                          O
                        </span>
                      </td>
                      <td className="px-6 py-5 text-center">
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
            <div className="md:hidden space-y-4">
              {levelData.map((row, idx) => (
                <div
                  key={idx}
                  className="bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 p-5"
                >
                  <div className="flex items-center justify-between mb-4">
                    <span className="inline-flex items-center justify-center bg-gold/15 text-gold-light font-bold text-sm px-3 py-1.5 rounded-lg">
                      {row.level}
                    </span>
                    <span className="text-white font-semibold text-sm">
                      배치 점수: {row.score}
                    </span>
                  </div>
                  <p className="text-white/80 text-sm mb-3">{row.subjects}</p>
                  <div className="flex items-center gap-4 text-xs">
                    <span className="flex items-center gap-1.5">
                      <span
                        className={`w-5 h-5 rounded-full flex items-center justify-center text-[10px] font-bold ${
                          row.speaking
                            ? "bg-green-500/15 text-green-400"
                            : "bg-white/5 text-white/30"
                        }`}
                      >
                        {row.speaking ? "O" : "X"}
                      </span>
                      <span className="text-white/50">Speaking</span>
                    </span>
                    <span className="flex items-center gap-1.5">
                      <span className="w-5 h-5 rounded-full flex items-center justify-center text-[10px] font-bold bg-green-500/15 text-green-400">
                        O
                      </span>
                      <span className="text-white/50">Novel</span>
                    </span>
                  </div>
                </div>
              ))}
            </div>

            {/* Level Legend */}
            <div className="mt-8 flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-8 text-white/50 text-sm">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 bg-gold-light/50 rounded-full" />
                <span>
                  <strong className="text-white/70">E group:</strong> Elementary
                  (초등)
                </span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 bg-gold-light/50 rounded-full" />
                <span>
                  <strong className="text-white/70">M group:</strong> Middle
                  (중등)
                </span>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 md:py-28 bg-cream/30">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <AnimatedSection delay={0.1} direction="up" className="text-center">
            <h2 className="font-[var(--font-playfair)] text-3xl md:text-4xl font-bold text-foreground mb-4">
              Start Your
              <span className="text-gold"> Journey</span>
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto leading-relaxed mb-8">
              레벨테스트를 통해 학생에게 가장 적합한 과정을 안내해 드립니다.
              지금 상담을 예약하세요.
            </p>
            <a
              href="tel:031-915-2185"
              className="inline-flex items-center gap-2 bg-navy text-white px-8 py-4 rounded-xl text-sm font-semibold hover:bg-navy-light shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <GraduationCap className="w-5 h-5" />
              상담 예약하기
            </a>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
}
