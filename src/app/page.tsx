"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  GraduationCap,
  Award,
  HeartHandshake,
  Phone,
  BookOpen,
  Quote,
} from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const mindsetValues = [
  {
    icon: GraduationCap,
    title: "맞춤형 교육",
    description: "각 학생의 수준에 맞춘 구조화된 학습",
  },
  {
    icon: Award,
    title: "풍부한 경험",
    description: "영어 교육 업계 20년 이상의 노하우",
  },
  {
    icon: HeartHandshake,
    title: "지속적 지원",
    description: "높은 참여도와 풍부한 상호작용",
  },
];

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
      {/* ========== Hero Section ========== */}
      <section className="relative h-screen min-h-[700px] flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <Image
          src="/library.webp"
          alt="Wisepen Language Institute"
          fill
          className="object-cover"
          priority
          quality={90}
        />
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-navy-dark/80 via-navy/70 to-navy-dark/90" />

        {/* Hero Content */}
        <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.21, 0.47, 0.32, 0.98] }}
          >
            {/* Decorative Line */}
            <div className="flex items-center justify-center gap-4 mb-8">
              <div className="w-12 h-px bg-gold/60" />
              <BookOpen className="w-5 h-5 text-gold" />
              <div className="w-12 h-px bg-gold/60" />
            </div>

            <h1 className="font-[var(--font-playfair)] text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight tracking-tight">
              Welcome to
              <br />
              <span className="text-gold-light">Wisepen</span>{" "}
              <span className="text-white/90">Language Institute</span>
            </h1>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.8,
              delay: 0.4,
              ease: [0.21, 0.47, 0.32, 0.98],
            }}
          >
            <blockquote className="mt-8 md:mt-10 text-white/70 text-base sm:text-lg md:text-xl leading-relaxed font-light italic max-w-2xl mx-auto">
              &ldquo;교육은 미래로 가는 여권이다,
              <br className="hidden sm:block" /> 내일은 오늘 준비하는 자의
              것이다&rdquo;
              <cite className="block mt-3 text-gold/80 text-sm not-italic tracking-wider">
                &mdash; Malcolm X
              </cite>
            </blockquote>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.8,
              delay: 0.7,
              ease: [0.21, 0.47, 0.32, 0.98],
            }}
            className="mt-10 md:mt-12 flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Button
              asChild
              size="lg"
              className="bg-gold hover:bg-gold-light text-navy-dark font-semibold px-8 py-6 text-base rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <Link href="/curriculum">교육과정 보기</Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-white/30 text-white hover:bg-white/10 hover:text-white px-8 py-6 text-base rounded-lg backdrop-blur-sm transition-all duration-300"
            >
              <a href="tel:031-915-2185">
                <Phone className="w-4 h-4 mr-1" />
                상담 문의
              </a>
            </Button>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center pt-2">
            <div className="w-1 h-2.5 bg-gold/70 rounded-full" />
          </div>
        </motion.div>
      </section>

      {/* ========== Our Mission Section ========== */}
      <section className="py-24 md:py-32 bg-cream">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <AnimatedSection>
            <div className="text-center mb-16 md:mb-20">
              <p className="text-gold font-semibold text-sm tracking-[0.2em] uppercase mb-4">
                About Us
              </p>
              <h2 className="font-[var(--font-playfair)] text-3xl sm:text-4xl md:text-5xl font-bold text-navy">
                Our Mission
              </h2>
              <div className="w-16 h-1 bg-gold mx-auto mt-6 rounded-full" />
            </div>
          </AnimatedSection>

          <div className="space-y-20 md:space-y-28">
            {/* Mission Block 1 */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
              <AnimatedSection direction="left" delay={0.1}>
                <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl">
                  <Image
                    src="/handsup.webp"
                    alt="학생들의 적극적인 수업 참여"
                    fill
                    className="object-cover hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy/20 to-transparent" />
                </div>
              </AnimatedSection>

              <AnimatedSection direction="right" delay={0.2}>
                <div className="lg:pl-4">
                  <p className="text-gold font-semibold text-sm tracking-wider uppercase mb-3">
                    Philosophy
                  </p>
                  <h3 className="font-[var(--font-playfair)] text-2xl md:text-3xl font-bold text-navy mb-6">
                    따뜻하고 효과적인 학습 환경
                  </h3>
                  <p className="text-foreground/70 text-base md:text-lg leading-relaxed">
                    와이스펜 어학원은 학생들에게 따뜻하고 효과적인 학습 환경
                    제공을 목표로 합니다. 속도보다는 완전한 이해와 숙달을
                    우선시하며, 비판적 읽기, 문법, 구조화된 창의적 에세이 작성에
                    초점을 맞추고 있습니다.
                  </p>
                  <div className="mt-8 flex gap-8">
                    <div>
                      <p className="font-[var(--font-playfair)] text-3xl font-bold text-gold">
                        20+
                      </p>
                      <p className="text-sm text-foreground/50 mt-1">
                        년 교육 경험
                      </p>
                    </div>
                    <div className="w-px bg-border" />
                    <div>
                      <p className="font-[var(--font-playfair)] text-3xl font-bold text-gold">
                        100%
                      </p>
                      <p className="text-sm text-foreground/50 mt-1">
                        맞춤형 커리큘럼
                      </p>
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            </div>

            {/* Mission Block 2 - Reversed */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
              <AnimatedSection
                direction="left"
                delay={0.1}
                className="order-2 lg:order-1"
              >
                <div className="lg:pr-4">
                  <p className="text-gold font-semibold text-sm tracking-wider uppercase mb-3">
                    Approach
                  </p>
                  <h3 className="font-[var(--font-playfair)] text-2xl md:text-3xl font-bold text-navy mb-6">
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
                delay={0.2}
                className="order-1 lg:order-2"
              >
                <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl">
                  <Image
                    src="/teachers.webp"
                    alt="강사진의 전문적인 교육"
                    fill
                    className="object-cover hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy/20 to-transparent" />
                </div>
              </AnimatedSection>
            </div>
          </div>
        </div>
      </section>

      {/* ========== Our Mindset Section ========== */}
      <section className="py-24 md:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <AnimatedSection>
            <div className="text-center mb-16 md:mb-20">
              <p className="text-gold font-semibold text-sm tracking-[0.2em] uppercase mb-4">
                Core Values
              </p>
              <h2 className="font-[var(--font-playfair)] text-3xl sm:text-4xl md:text-5xl font-bold text-navy">
                Our Mindset
              </h2>
              <div className="w-16 h-1 bg-gold mx-auto mt-6 rounded-full" />
              <p className="mt-8 text-foreground/60 text-base md:text-lg leading-relaxed max-w-2xl mx-auto">
                각 학생의 수준에 맞춘 구조화된 학습 접근 방식으로, 영어 교육
                업계 20년 이상의 경험을 바탕으로 높은 참여도, 풍부한 상호작용,
                지속적인 지원을 제공합니다.
              </p>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            {mindsetValues.map((value, index) => (
              <AnimatedSection key={value.title} delay={index * 0.15}>
                <Card className="group border-0 shadow-lg hover:shadow-2xl transition-all duration-500 bg-white rounded-2xl overflow-hidden h-full">
                  <CardContent className="p-8 md:p-10 text-center">
                    <div className="w-16 h-16 bg-navy/5 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-navy group-hover:scale-110 transition-all duration-500">
                      <value.icon className="w-7 h-7 text-navy group-hover:text-gold transition-colors duration-500" />
                    </div>
                    <h3 className="text-xl font-bold text-navy mb-3">
                      {value.title}
                    </h3>
                    <p className="text-foreground/60 leading-relaxed">
                      {value.description}
                    </p>
                  </CardContent>
                </Card>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ========== Director's Message Section ========== */}
      <section className="py-24 md:py-32 bg-navy relative overflow-hidden">
        {/* Decorative Elements */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-gold/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-gold/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />

        <div className="max-w-5xl mx-auto px-6 lg:px-8 relative z-10">
          <AnimatedSection>
            <div className="text-center">
              <Quote className="w-12 h-12 text-gold/40 mx-auto mb-8" />

              <h2 className="font-[var(--font-playfair)] text-3xl sm:text-4xl md:text-5xl font-bold text-white leading-tight mb-8">
                &ldquo;모든 학생에게 탁월한 영어교육과
                <br className="hidden sm:block" />
                <span className="text-gold-light">
                  질 높은 학습 환경
                </span>
                을 제공하겠습니다.&rdquo;
              </h2>

              <div className="flex items-center justify-center gap-4 mt-10">
                <div className="w-12 h-px bg-gold/40" />
                <div>
                  <p className="font-[var(--font-playfair)] text-lg font-semibold text-white">
                    Arnold Chi
                  </p>
                  <p className="text-sm text-white/50 mt-1">
                    원장 / 헤드 강사
                  </p>
                </div>
                <div className="w-12 h-px bg-gold/40" />
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ========== Instructors Section ========== */}
      <section className="py-24 md:py-32 bg-cream">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <AnimatedSection>
            <div className="text-center mb-16 md:mb-20">
              <p className="text-gold font-semibold text-sm tracking-[0.2em] uppercase mb-4">
                Instructors
              </p>
              <h2 className="font-[var(--font-playfair)] text-3xl sm:text-4xl md:text-5xl font-bold text-navy">
                Our Team
              </h2>
              <div className="w-16 h-1 bg-gold mx-auto mt-6 rounded-full" />
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {instructors.map((instructor, index) => (
              <AnimatedSection
                key={instructor.name}
                delay={index * 0.2}
                direction={index === 0 ? "left" : "right"}
              >
                <Card className="border-0 shadow-lg hover:shadow-2xl transition-all duration-500 rounded-2xl overflow-hidden h-full">
                  <CardContent className="p-8 md:p-10">
                    {/* Name and Role */}
                    <div className="mb-6">
                      <h3 className="font-[var(--font-playfair)] text-2xl md:text-3xl font-bold text-navy">
                        {instructor.name}
                      </h3>
                      <p className="text-gold font-semibold text-sm mt-1">
                        {instructor.role}
                      </p>
                    </div>

                    {/* Education */}
                    <div className="mb-6">
                      <p className="text-xs font-semibold tracking-wider uppercase text-foreground/40 mb-2">
                        Education
                      </p>
                      <p className="text-foreground/70 text-sm leading-relaxed">
                        {instructor.education}
                      </p>
                    </div>

                    {/* Experience */}
                    <div className="mb-6">
                      <p className="text-xs font-semibold tracking-wider uppercase text-foreground/40 mb-2">
                        Experience
                      </p>
                      <ul className="space-y-1.5">
                        {instructor.experience.map((exp) => (
                          <li
                            key={exp}
                            className="text-foreground/70 text-sm flex items-start gap-2"
                          >
                            <span className="w-1.5 h-1.5 bg-gold rounded-full mt-1.5 shrink-0" />
                            {exp}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Years Badge */}
                    <div className="inline-flex items-center gap-2 px-4 py-2 bg-navy/5 rounded-full">
                      <Award className="w-4 h-4 text-gold" />
                      <span className="text-sm font-semibold text-navy">
                        {instructor.years}
                      </span>
                    </div>
                  </CardContent>
                </Card>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ========== Gallery Section ========== */}
      <section className="py-24 md:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <AnimatedSection>
            <div className="text-center mb-16 md:mb-20">
              <p className="text-gold font-semibold text-sm tracking-[0.2em] uppercase mb-4">
                Gallery
              </p>
              <h2 className="font-[var(--font-playfair)] text-3xl sm:text-4xl md:text-5xl font-bold text-navy">
                Our Academy
              </h2>
              <div className="w-16 h-1 bg-gold mx-auto mt-6 rounded-full" />
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
            {galleryImages.map((image, index) => (
              <AnimatedSection key={image.src} delay={index * 0.1}>
                <div className="group relative aspect-[4/3] rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 cursor-pointer">
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                  />
                  <div className="absolute inset-0 bg-navy/0 group-hover:bg-navy/30 transition-all duration-500" />
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <span className="text-white font-semibold text-sm tracking-wider uppercase px-4 py-2 border border-white/50 rounded-lg backdrop-blur-sm">
                      View
                    </span>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ========== CTA Section ========== */}
      <section className="py-20 md:py-24 bg-gradient-to-br from-navy via-navy-light to-navy">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <AnimatedSection>
            <h2 className="font-[var(--font-playfair)] text-3xl sm:text-4xl font-bold text-white mb-4">
              Start Your Journey
            </h2>
            <p className="text-white/60 text-base md:text-lg mb-10 max-w-xl mx-auto">
              와이스펜 어학원에서 여러분의 영어 실력 향상을 위한 첫걸음을
              시작하세요.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button
                asChild
                size="lg"
                className="bg-gold hover:bg-gold-light text-navy-dark font-semibold px-8 py-6 text-base rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
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
                className="border-white/30 text-white hover:bg-white/10 hover:text-white px-8 py-6 text-base rounded-lg transition-all duration-300"
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
