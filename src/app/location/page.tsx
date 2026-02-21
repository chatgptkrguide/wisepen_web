"use client";

import AnimatedSection from "@/components/AnimatedSection";
import { Card, CardContent } from "@/components/ui/card";
import { MapPin, Phone, Mail, Navigation, Clock, Bus, Car } from "lucide-react";

const contactInfo = [
  {
    icon: MapPin,
    label: "주소",
    value: "경기도 고양시 일산서구 일산로 562\n신일산연합상가 4층 409,410호",
    href: "https://map.naver.com/v5/search/%EC%8B%A0%EC%9D%BC%EC%82%B0%EC%97%B0%ED%95%A9%EC%83%81%EA%B0%80",
    linkLabel: "네이버 지도에서 보기",
  },
  {
    icon: Phone,
    label: "전화",
    value: "031-915-2185",
    href: "tel:031-915-2185",
    linkLabel: "전화 걸기",
  },
  {
    icon: Mail,
    label: "이메일",
    value: "Arnold@wisepenenglish.com",
    href: "mailto:Arnold@wisepenenglish.com",
    linkLabel: "이메일 보내기",
  },
];

const transportInfo = [
  {
    icon: Bus,
    label: "대중교통",
    description: "일산역 3번 출구에서 도보 약 10분",
  },
  {
    icon: Car,
    label: "자가용",
    description: "건물 내 주차장 이용 가능",
  },
];

export default function LocationPage() {
  return (
    <div className="min-h-screen bg-cream/30">
      {/* Hero Section */}
      <section className="relative bg-navy pt-32 pb-20 overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute inset-0">
          <div className="absolute top-20 right-10 w-72 h-72 bg-gold/5 rounded-full blur-3xl" />
          <div className="absolute bottom-10 left-10 w-96 h-96 bg-navy-light/30 rounded-full blur-3xl" />
        </div>

        <div className="relative max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <AnimatedSection delay={0.1} direction="up">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/10 mb-6">
              <Navigation className="w-4 h-4 text-gold" />
              <span className="text-sm text-white/80 font-medium">
                Location
              </span>
            </div>
          </AnimatedSection>
          <AnimatedSection delay={0.2} direction="up">
            <h1 className="font-[var(--font-playfair)] text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
              오시는길
            </h1>
          </AnimatedSection>
          <AnimatedSection delay={0.3} direction="up">
            <p className="text-lg text-white/70 max-w-lg mx-auto">
              와이스펜 어학원을 방문해주세요
            </p>
          </AnimatedSection>
        </div>

        {/* Bottom wave divider */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg
            viewBox="0 0 1440 60"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-full"
            preserveAspectRatio="none"
          >
            <path
              d="M0 60L48 55C96 50 192 40 288 35C384 30 480 30 576 33.3C672 36.7 768 43.3 864 45C960 46.7 1056 43.3 1152 40C1248 36.7 1344 33.3 1392 31.7L1440 30V60H1392C1344 60 1248 60 1152 60C1056 60 960 60 864 60C768 60 672 60 576 60C480 60 384 60 288 60C192 60 96 60 48 60H0Z"
              className="fill-cream/30"
            />
          </svg>
        </div>
      </section>

      {/* Contact + Map Section */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-12">
            {/* Contact Info Column */}
            <div className="lg:col-span-2 space-y-6">
              <AnimatedSection delay={0.1} direction="left">
                <h2 className="font-[var(--font-playfair)] text-2xl md:text-3xl font-bold text-navy mb-2">
                  Contact Us
                </h2>
                <p className="text-muted-foreground text-sm">
                  문의사항이 있으시면 언제든 연락해 주세요.
                </p>
              </AnimatedSection>

              {/* Contact Cards */}
              <div className="space-y-4">
                {contactInfo.map((item, index) => (
                  <AnimatedSection
                    key={item.label}
                    delay={0.2 + index * 0.1}
                    direction="left"
                  >
                    <Card className="group hover:shadow-lg hover:shadow-navy/5 transition-all duration-300 hover:-translate-y-0.5 border-border/50">
                      <CardContent className="flex items-start gap-4">
                        <div className="w-11 h-11 rounded-xl bg-gold/10 flex items-center justify-center shrink-0 group-hover:bg-gold/20 transition-colors duration-300">
                          <item.icon className="w-5 h-5 text-gold" />
                        </div>
                        <div className="space-y-1 min-w-0">
                          <p className="text-xs font-semibold text-gold uppercase tracking-wider">
                            {item.label}
                          </p>
                          <p className="text-sm text-foreground/80 whitespace-pre-line leading-relaxed">
                            {item.value}
                          </p>
                          {item.href && (
                            <a
                              href={item.href}
                              target={
                                item.href.startsWith("http")
                                  ? "_blank"
                                  : undefined
                              }
                              rel={
                                item.href.startsWith("http")
                                  ? "noopener noreferrer"
                                  : undefined
                              }
                              className="inline-flex items-center gap-1 text-xs text-navy font-medium hover:text-gold transition-colors duration-300 mt-1"
                            >
                              {item.linkLabel}
                              <span className="text-[10px]">&rarr;</span>
                            </a>
                          )}
                        </div>
                      </CardContent>
                    </Card>
                  </AnimatedSection>
                ))}
              </div>

              {/* Transport Info */}
              <AnimatedSection delay={0.5} direction="left">
                <div className="mt-8 p-5 rounded-xl bg-navy/5 border border-navy/10 space-y-4">
                  <h3 className="text-sm font-bold text-navy flex items-center gap-2">
                    <Navigation className="w-4 h-4 text-gold" />
                    교통편 안내
                  </h3>
                  {transportInfo.map((item) => (
                    <div key={item.label} className="flex items-start gap-3">
                      <div className="w-8 h-8 rounded-lg bg-white flex items-center justify-center shrink-0 shadow-sm">
                        <item.icon className="w-4 h-4 text-navy-light" />
                      </div>
                      <div>
                        <p className="text-xs font-semibold text-navy">
                          {item.label}
                        </p>
                        <p className="text-xs text-muted-foreground">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </AnimatedSection>
            </div>

            {/* Map Column */}
            <div className="lg:col-span-3">
              <AnimatedSection delay={0.2} direction="right">
                <div className="sticky top-28">
                  <div className="rounded-2xl overflow-hidden shadow-xl shadow-navy/10 border border-border/50">
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3159.0!2d126.7542!3d37.6688!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzfCsDQwJzA3LjciTiAxMjbCsDQ1JzE1LjEiRQ!5e0!3m2!1sko!2skr!4v1"
                      width="100%"
                      height="480"
                      style={{ border: 0 }}
                      allowFullScreen
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      title="와이스펜 어학원 위치"
                      className="w-full"
                    />
                  </div>

                  {/* Map caption */}
                  <div className="mt-4 flex items-center justify-between text-xs text-muted-foreground">
                    <div className="flex items-center gap-1.5">
                      <MapPin className="w-3.5 h-3.5 text-gold" />
                      <span>신일산연합상가 4층</span>
                    </div>
                    <a
                      href="https://www.google.com/maps/dir/?api=1&destination=37.6688,126.7542"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-navy font-medium hover:text-gold transition-colors"
                    >
                      길찾기
                      <span>&rarr;</span>
                    </a>
                  </div>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <AnimatedSection delay={0.1} direction="up">
            <div className="relative rounded-2xl bg-navy overflow-hidden">
              {/* Decorative */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-gold/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
              <div className="absolute bottom-0 left-0 w-48 h-48 bg-navy-light/30 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />

              <div className="relative px-8 py-12 md:px-16 md:py-16 text-center">
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 border border-white/10 mb-5">
                  <Phone className="w-3.5 h-3.5 text-gold" />
                  <span className="text-xs text-white/70 font-medium">
                    상담 안내
                  </span>
                </div>
                <h2 className="font-[var(--font-playfair)] text-2xl md:text-3xl font-bold text-white mb-3">
                  Start Your Journey
                </h2>
                <p className="text-white/60 text-sm md:text-base max-w-md mx-auto mb-8">
                  와이스펜 어학원에서 영어 실력을 한 단계 높여보세요.
                  <br className="hidden sm:block" />
                  상담 예약은 전화로 문의해 주세요.
                </p>
                <a
                  href="tel:031-915-2185"
                  className="inline-flex items-center gap-2.5 px-8 py-3.5 rounded-xl bg-gold text-navy font-bold text-sm hover:bg-gold-light transition-all duration-300 shadow-lg shadow-gold/20 hover:shadow-xl hover:shadow-gold/30 hover:-translate-y-0.5"
                >
                  <Phone className="w-4 h-4" />
                  031-915-2185
                </a>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
}
