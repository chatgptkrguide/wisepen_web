"use client";

import AnimatedSection from "@/components/AnimatedSection";
import { MapPin, Phone, Mail, Bus, Car } from "lucide-react";

export default function LocationPage() {
  return (
    <div className="min-h-screen bg-cream/30">
      {/* Hero */}
      <section className="relative bg-navy grain pt-32 pb-14">
        <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
          <AnimatedSection delay={0.1} direction="up">
            <h1 className="font-[var(--font-playfair)] text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-3">
              오시는길
            </h1>
            <p className="text-lg text-white/75 max-w-md">
              와이스펜 어학원을 방문해주세요
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Contact + Map */}
      <section className="py-12 md:py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-12">
            {/* Contact Info */}
            <div className="lg:col-span-2">
              <AnimatedSection delay={0.1} direction="left">
                <h2 className="font-[var(--font-playfair)] text-2xl md:text-3xl font-bold text-navy mb-1">
                  Contact Us
                </h2>
                <p className="text-muted-foreground text-sm mb-8">
                  문의사항이 있으시면 언제든 연락해 주세요.
                </p>
              </AnimatedSection>

              <AnimatedSection delay={0.2} direction="left">
                <div className="border-l-2 border-gold pl-5 space-y-6">
                  {/* Address */}
                  <div>
                    <p className="text-xs font-semibold text-gold uppercase tracking-wider mb-1 flex items-center gap-1.5">
                      <MapPin className="w-4 h-4" />
                      주소
                    </p>
                    <p className="text-sm text-foreground/80 leading-relaxed whitespace-pre-line">
                      경기도 고양시 일산서구 일산로 562{"\n"}신일산연합상가 4층
                      409,410호
                    </p>
                    <a
                      href="https://map.naver.com/v5/search/%EC%8B%A0%EC%9D%BC%EC%82%B0%EC%97%B0%ED%95%A9%EC%83%81%EA%B0%80"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-xs text-navy font-medium hover:text-gold transition-colors mt-1 py-2"
                    >
                      네이버 지도에서 보기 &rarr;
                    </a>
                  </div>

                  {/* Phone */}
                  <div>
                    <p className="text-xs font-semibold text-gold uppercase tracking-wider mb-1 flex items-center gap-1.5">
                      <Phone className="w-4 h-4" />
                      전화
                    </p>
                    <p className="text-sm text-foreground/80">031-915-2185</p>
                    <a
                      href="tel:031-915-2185"
                      className="inline-flex items-center gap-1 text-xs text-navy font-medium hover:text-gold transition-colors mt-1 py-2"
                    >
                      전화 걸기 &rarr;
                    </a>
                  </div>

                  {/* Email */}
                  <div>
                    <p className="text-xs font-semibold text-gold uppercase tracking-wider mb-1 flex items-center gap-1.5">
                      <Mail className="w-4 h-4" />
                      이메일
                    </p>
                    <p className="text-sm text-foreground/80">
                      Arnold@wisepenenglish.com
                    </p>
                    <a
                      href="mailto:Arnold@wisepenenglish.com"
                      className="inline-flex items-center gap-1 text-xs text-navy font-medium hover:text-gold transition-colors mt-1 py-2"
                    >
                      이메일 보내기 &rarr;
                    </a>
                  </div>
                </div>
              </AnimatedSection>

              {/* Transport */}
              <AnimatedSection delay={0.35} direction="left">
                <div className="mt-10">
                  <h3 className="text-sm font-bold text-navy mb-3">
                    교통편 안내
                  </h3>
                  <div className="space-y-2 text-sm text-muted-foreground">
                    <p className="flex items-center gap-2">
                      <Bus className="w-4 h-4 text-navy-light" />
                      <span>
                        <span className="font-medium text-navy">
                          대중교통
                        </span>{" "}
                        &mdash; 일산역 3번 출구에서 도보 약 10분
                      </span>
                    </p>
                    <p className="flex items-center gap-2">
                      <Car className="w-4 h-4 text-navy-light" />
                      <span>
                        <span className="font-medium text-navy">자가용</span>{" "}
                        &mdash; 건물 내 주차장 이용 가능
                      </span>
                    </p>
                  </div>
                </div>
              </AnimatedSection>
            </div>

            {/* Map */}
            <div className="lg:col-span-3">
              <AnimatedSection delay={0.2} direction="right">
                <div className="sticky top-28">
                  <div className="rounded-sm overflow-hidden border border-border/50">
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

                  <div className="mt-3 flex items-center justify-between text-xs text-muted-foreground">
                    <span className="flex items-center gap-1.5">
                      <MapPin className="w-3.5 h-3.5 text-gold" />
                      신일산연합상가 4층
                    </span>
                    <a
                      href="https://www.google.com/maps/dir/?api=1&destination=37.6688,126.7542"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-navy font-medium hover:text-gold transition-colors py-2"
                    >
                      길찾기 &rarr;
                    </a>
                  </div>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="pb-16 md:pb-24 pt-4">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <AnimatedSection delay={0.1} direction="up">
            <div className="relative rounded-sm bg-navy grain overflow-hidden px-8 py-12 md:px-16 md:py-14 text-center">
              <h2 className="font-[var(--font-playfair)] text-2xl md:text-3xl font-bold text-white mb-3">
                Start Your Journey
              </h2>
              <p className="text-white/75 text-sm md:text-base max-w-md mx-auto mb-8">
                와이스펜 어학원에서 영어 실력을 한 단계 높여보세요.
                <br className="hidden sm:block" />
                상담 예약은 전화로 문의해 주세요.
              </p>
              <a
                href="tel:031-915-2185"
                className="inline-flex items-center gap-2 px-8 py-3.5 rounded-sm bg-gold text-navy font-bold text-sm hover:bg-gold-light transition-colors"
              >
                <Phone className="w-4 h-4" />
                031-915-2185
              </a>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
}
