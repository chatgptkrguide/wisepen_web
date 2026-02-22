"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Phone } from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";
import { Button } from "@/components/ui/button";

const instructors = [
  {
    name: "Arnold Chi",
    role: "원장 / 헤드 강사",
    education: "미국 오하이오 주립대학교 국제학 학사",
    experience: [
      "이안어학원 대치 지점 (14년 메인 강사)",
      "청담어학원",
      "파고다어학원 강남 지점",
    ],
    years: "경력 17년",
  },
  {
    name: "Kenny Kim",
    role: "강사",
    education:
      "미국 존슨앤웨일즈 대학교 경영학 학사 / 세종대학교 S.A.S.M.B.A (Arizona State MBA)",
    experience: ["이안어학원 대치 지점", "퓰리처영어학원"],
    years: "경력 10년",
  },
];

const galleryImages = [
  { src: "/academy-1.webp", alt: "와이스펜 어학원 내부 1" },
  { src: "/academy-2.webp", alt: "와이스펜 어학원 내부 2" },
  { src: "/academy-3.webp", alt: "와이스펜 어학원 내부 3" },
  { src: "/academy-4.webp", alt: "와이스펜 어학원 내부 4" },
];

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="relative h-screen min-h-[700px] flex items-center overflow-hidden">
        <Image
          src="/library.webp"
          alt="Wisepen Language Institute"
          fill
          className="object-cover"
          priority
          quality={90}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-navy-dark/90 via-navy/70 to-transparent" />

        <div className="relative z-10 px-6 lg:px-16 max-w-7xl mx-auto w-full">
          <div className="max-w-2xl">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, ease: [0.21, 0.47, 0.32, 0.98] }}
            >
              <h1 className="font-[var(--font-playfair)] text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-white leading-[0.95] tracking-tight">
                Welcome to
                <br />
                <span className="text-gold-light">Wisepen</span>
              </h1>
              <p className="mt-2 font-[var(--font-playfair)] text-xl md:text-2xl text-white/80 font-light tracking-wide">
                Language Institute
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              <blockquote className="mt-10 text-white/70 text-base md:text-lg leading-relaxed font-light italic border-l-2 border-gold/50 pl-5">
                &ldquo;교육은 미래로 가는 여권이다,
                <br className="hidden sm:block" /> 내일은 오늘 준비하는 자의
                것이다&rdquo;
                <cite className="block mt-2 text-gold text-sm not-italic">
                  &mdash; Malcolm X
                </cite>
              </blockquote>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.8 }}
              className="mt-10 flex flex-col sm:flex-row items-start gap-3"
            >
              <Button
                asChild
                size="lg"
                className="bg-gold hover:bg-gold-light text-navy-dark font-semibold px-8 py-6 text-base rounded-none transition-colors duration-200"
              >
                <Link href="/curriculum">교육과정 보기</Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="bg-transparent border-white/50 text-white hover:bg-white/15 hover:text-white px-8 py-6 text-base rounded-none transition-colors duration-200"
              >
                <a href="tel:031-915-2185">
                  <Phone className="w-4 h-4 mr-1" />
                  상담 문의
                </a>
              </Button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="py-20 md:py-28 bg-cream">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <AnimatedSection>
            <div className="mb-14 md:mb-20">
              <p className="text-gold font-semibold text-sm tracking-[0.2em] uppercase mb-4">
                About Us
              </p>
              <h2 className="font-[var(--font-playfair)] text-3xl sm:text-4xl md:text-5xl font-bold text-navy">
                Our Mission
              </h2>
            </div>
          </AnimatedSection>

          <div className="space-y-16 md:space-y-24">
            {/* Block 1 */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-14 items-center">
              <AnimatedSection direction="left" delay={0.1}>
                <div className="relative aspect-[4/3] overflow-hidden rounded-none lg:rounded-r-lg shadow-navy/8 shadow-lg">
                  <Image
                    src="/handsup.webp"
                    alt="학생들의 적극적인 수업 참여"
                    fill
                    className="object-cover"
                  />
                </div>
              </AnimatedSection>

              <AnimatedSection direction="right" delay={0.25}>
                <div className="lg:pl-4">
                  <p className="text-gold font-semibold text-xs tracking-wider uppercase mb-3">
                    Philosophy
                  </p>
                  <h3 className="font-[var(--font-playfair)] text-2xl md:text-3xl font-bold text-navy mb-5">
                    따뜻하고 효과적인 학습 환경
                  </h3>
                  <p className="text-foreground/70 text-base md:text-lg leading-relaxed">
                    와이스펜 어학원은 학생들에게 따뜻하고 효과적인 학습 환경
                    제공을 목표로 합니다. 속도보다는 완전한 이해와 숙달을
                    우선시하며, 비판적 읽기, 문법, 구조화된 창의적 에세이 작성에
                    초점을 맞추고 있습니다.
                  </p>
                </div>
              </AnimatedSection>
            </div>

            {/* Block 2 */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-14 items-center">
              <AnimatedSection
                direction="left"
                delay={0.1}
                className="order-2 lg:order-1"
              >
                <div className="lg:pr-4">
                  <p className="text-gold font-semibold text-xs tracking-wider uppercase mb-3">
                    Approach
                  </p>
                  <h3 className="font-[var(--font-playfair)] text-2xl md:text-3xl font-bold text-navy mb-5">
                    비판적 사고와 창의적 글쓰기
                  </h3>
                  <p className="text-foreground/70 text-base md:text-lg leading-relaxed">
                    단순 암기가 아닌 깊이 있는 이해를 추구합니다. 비판적 읽기를
                    통해 텍스트의 핵심을 파악하고, 체계적인 문법 학습과
                    구조화된 에세이 작성 훈련을 통해 학생들의 영어 실력을
                    근본적으로 향상시킵니다.
                  </p>
                </div>
              </AnimatedSection>

              <AnimatedSection
                direction="right"
                delay={0.25}
                className="order-1 lg:order-2"
              >
                <div className="relative aspect-[4/3] overflow-hidden rounded-none lg:rounded-l-lg shadow-navy/8 shadow-lg">
                  <Image
                    src="/teachers.webp"
                    alt="강사진의 전문적인 교육"
                    fill
                    className="object-cover"
                  />
                </div>
              </AnimatedSection>
            </div>
          </div>
        </div>
      </section>

      {/* Mindset */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <AnimatedSection>
            <div className="mb-12 md:mb-16 max-w-xl">
              <p className="text-gold font-semibold text-sm tracking-[0.2em] uppercase mb-4">
                Core Values
              </p>
              <h2 className="font-[var(--font-playfair)] text-3xl sm:text-4xl md:text-5xl font-bold text-navy mb-6">
                Our Mindset
              </h2>
              <p className="text-foreground/60 text-base md:text-lg leading-relaxed">
                각 학생의 수준에 맞춘 구조화된 학습 접근 방식으로, 영어 교육
                업계 20년 이상의 경험을 바탕으로 높은 참여도, 풍부한 상호작용,
                지속적인 지원을 제공합니다.
              </p>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 lg:grid-cols-5 gap-6 lg:gap-10">
            {/* Featured item */}
            <AnimatedSection delay={0.1} className="lg:col-span-2">
              <div className="bg-navy p-8 md:p-10 h-full flex flex-col justify-end rounded-sm">
                <span className="font-[var(--font-playfair)] text-6xl font-bold text-gold/20 leading-none">
                  01
                </span>
                <h3 className="text-xl font-bold text-white mt-4 mb-2">
                  맞춤형 교육
                </h3>
                <p className="text-white/70 leading-relaxed text-sm">
                  각 학생의 수준에 맞춘 구조화된 학습
                </p>
              </div>
            </AnimatedSection>

            {/* Stacked items */}
            <div className="lg:col-span-3 flex flex-col gap-6">
              <AnimatedSection delay={0.2}>
                <div className="border-l-2 border-gold pl-6 py-4">
                  <span className="font-[var(--font-playfair)] text-3xl font-bold text-navy/10 leading-none">
                    02
                  </span>
                  <h3 className="text-lg font-bold text-navy mt-2 mb-1">
                    풍부한 경험
                  </h3>
                  <p className="text-foreground/70 leading-relaxed text-sm">
                    영어 교육 업계 20년 이상의 노하우
                  </p>
                </div>
              </AnimatedSection>

              <AnimatedSection delay={0.35}>
                <div className="border-l-2 border-gold/50 pl-6 py-4">
                  <span className="font-[var(--font-playfair)] text-3xl font-bold text-navy/10 leading-none">
                    03
                  </span>
                  <h3 className="text-lg font-bold text-navy mt-2 mb-1">
                    지속적 지원
                  </h3>
                  <p className="text-foreground/70 leading-relaxed text-sm">
                    높은 참여도와 풍부한 상호작용
                  </p>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </div>
      </section>

      {/* Director's Message */}
      <section className="py-20 md:py-28 bg-navy relative overflow-hidden grain">
        <div className="max-w-5xl mx-auto px-6 lg:px-8 relative z-10">
          <AnimatedSection>
            <div className="flex flex-col lg:flex-row gap-10 lg:gap-16 items-start">
              <div className="w-1 lg:w-[3px] bg-gold shrink-0 self-stretch hidden lg:block" />
              <div>
                <h2 className="font-[var(--font-playfair)] text-2xl sm:text-3xl md:text-4xl font-bold text-white leading-snug mb-8">
                  &ldquo;모든 학생에게 탁월한 영어교육과{" "}
                  <span className="text-gold-light">질 높은 학습 환경</span>을
                  제공하겠습니다.&rdquo;
                </h2>

                <div className="flex items-center gap-4">
                  <div>
                    <p className="font-[var(--font-playfair)] text-lg font-semibold text-white">
                      Arnold Chi
                    </p>
                    <p className="text-sm text-white/60 mt-0.5">
                      원장 / 헤드 강사
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Instructors */}
      <section className="py-20 md:py-32 bg-cream">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <AnimatedSection>
            <div className="mb-14 md:mb-20 max-w-lg">
              <h2 className="font-[var(--font-playfair)] text-3xl sm:text-4xl md:text-5xl font-bold text-navy mb-3">
                Our Team
              </h2>
              <div className="w-10 h-0.5 bg-gold" />
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8">
            {/* Arnold - wider */}
            <AnimatedSection
              delay={0.1}
              direction="left"
              className="lg:col-span-7"
            >
              <div className="bg-white p-8 md:p-10 h-full rounded-sm border border-border/50">
                <div className="mb-6">
                  <h3 className="font-[var(--font-playfair)] text-2xl md:text-3xl font-bold text-navy">
                    {instructors[0].name}
                  </h3>
                  <p className="text-gold font-semibold text-sm mt-1">
                    {instructors[0].role}
                  </p>
                </div>

                <div className="mb-5">
                  <p className="text-xs font-semibold tracking-wider uppercase text-foreground/35 mb-1.5">
                    Education
                  </p>
                  <p className="text-foreground/70 text-sm leading-relaxed">
                    {instructors[0].education}
                  </p>
                </div>

                <div className="mb-5">
                  <p className="text-xs font-semibold tracking-wider uppercase text-foreground/35 mb-1.5">
                    Experience
                  </p>
                  <ul className="space-y-1">
                    {instructors[0].experience.map((exp) => (
                      <li
                        key={exp}
                        className="text-foreground/70 text-sm flex items-start gap-2"
                      >
                        <span className="text-gold mt-0.5 shrink-0">&ndash;</span>
                        {exp}
                      </li>
                    ))}
                  </ul>
                </div>

                <p className="text-sm text-navy/60 font-medium">
                  {instructors[0].years}
                </p>
              </div>
            </AnimatedSection>

            {/* Kenny - narrower */}
            <AnimatedSection
              delay={0.25}
              direction="right"
              className="lg:col-span-5"
            >
              <div className="bg-white p-8 md:p-10 h-full rounded-sm border border-border/50">
                <div className="mb-6">
                  <h3 className="font-[var(--font-playfair)] text-2xl md:text-3xl font-bold text-navy">
                    {instructors[1].name}
                  </h3>
                  <p className="text-gold font-semibold text-sm mt-1">
                    {instructors[1].role}
                  </p>
                </div>

                <div className="mb-5">
                  <p className="text-xs font-semibold tracking-wider uppercase text-foreground/35 mb-1.5">
                    Education
                  </p>
                  <p className="text-foreground/70 text-sm leading-relaxed">
                    {instructors[1].education}
                  </p>
                </div>

                <div className="mb-5">
                  <p className="text-xs font-semibold tracking-wider uppercase text-foreground/35 mb-1.5">
                    Experience
                  </p>
                  <ul className="space-y-1">
                    {instructors[1].experience.map((exp) => (
                      <li
                        key={exp}
                        className="text-foreground/70 text-sm flex items-start gap-2"
                      >
                        <span className="text-gold mt-0.5 shrink-0">&ndash;</span>
                        {exp}
                      </li>
                    ))}
                  </ul>
                </div>

                <p className="text-sm text-navy/60 font-medium">
                  {instructors[1].years}
                </p>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <AnimatedSection>
            <div className="mb-12 md:mb-16">
              <p className="text-gold font-semibold text-sm tracking-[0.2em] uppercase mb-4">
                Gallery
              </p>
              <h2 className="font-[var(--font-playfair)] text-3xl sm:text-4xl md:text-5xl font-bold text-navy">
                Our Academy
              </h2>
            </div>
          </AnimatedSection>

          {/* Asymmetric grid: one large + three small */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3 md:gap-4">
            <AnimatedSection delay={0.05} className="md:col-span-2 md:row-span-2">
              <div className="relative aspect-[4/3] md:aspect-auto md:h-full overflow-hidden rounded-sm">
                <Image
                  src={galleryImages[0].src}
                  alt={galleryImages[0].alt}
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-700 ease-out"
                />
              </div>
            </AnimatedSection>

            {galleryImages.slice(1).map((image, index) => (
              <AnimatedSection key={image.src} delay={0.1 + index * 0.1}>
                <div className="relative aspect-[4/3] overflow-hidden rounded-sm">
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    className="object-cover hover:scale-105 transition-transform duration-700 ease-out"
                  />
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-20 bg-navy grain relative overflow-hidden">
        <div className="max-w-3xl mx-auto px-6 lg:px-8 text-center relative z-10">
          <AnimatedSection>
            <h2 className="font-[var(--font-playfair)] text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4">
              Start Your Journey
            </h2>
            <p className="text-white/70 text-base md:text-lg mb-8 max-w-xl mx-auto">
              와이스펜 어학원에서 여러분의 영어 실력 향상을 위한 첫걸음을
              시작하세요.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
              <Button
                asChild
                size="lg"
                className="bg-gold hover:bg-gold-light text-navy-dark font-semibold px-8 py-6 text-base rounded-none transition-colors duration-200"
              >
                <a href="tel:031-915-2185">
                  <Phone className="w-4 h-4 mr-1" />
                  031-915-2185
                </a>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="bg-transparent border-white/40 text-white hover:bg-white/15 hover:text-white px-8 py-6 text-base rounded-none transition-colors duration-200"
              >
                <Link href="/curriculum">교육과정 보기</Link>
              </Button>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
