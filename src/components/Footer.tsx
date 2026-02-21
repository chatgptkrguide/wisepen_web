import Link from "next/link";
import Image from "next/image";
import { MapPin, Phone, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-navy text-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="border-t border-white/10" />

        {/* Main Footer */}
        <div className="py-10 grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="relative w-10 h-10 overflow-hidden rounded-none">
                <Image
                  src="/logo.png"
                  alt="Wisepen Logo"
                  fill
                  className="object-cover"
                />
              </div>
              <p className="font-[var(--font-playfair)] text-xl font-bold tracking-tight">
                WISEPEN
              </p>
            </div>
            <p className="text-sm text-white/60 leading-relaxed max-w-xs">
              완전한 이해와 숙달을 우선시하며, 학생들에게 따뜻하고 효과적인
              학습 환경을 제공합니다.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-sm font-semibold text-white/70">바로가기</h3>
            <nav className="flex flex-col gap-3">
              <Link
                href="/"
                className="text-sm text-white/60 hover:text-white transition-colors"
              >
                학원 소개
              </Link>
              <Link
                href="/curriculum"
                className="text-sm text-white/60 hover:text-white transition-colors"
              >
                교육과정
              </Link>
              <Link
                href="/location"
                className="text-sm text-white/60 hover:text-white transition-colors"
              >
                오시는길
              </Link>
            </nav>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-sm font-semibold text-white/70">연락처</h3>
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 mt-0.5 text-white/50 shrink-0" />
                <p className="text-sm text-white/60 leading-relaxed">
                  경기도 고양시 일산서구 일산로 562
                  <br />
                  신일산연합상가 4층 409,410호
                </p>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-white/50 shrink-0" />
                <a
                  href="tel:031-915-2185"
                  className="text-sm text-white/60 hover:text-white transition-colors"
                >
                  031-915-2185
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-white/50 shrink-0" />
                <a
                  href="mailto:Arnold@wisepenenglish.com"
                  className="text-sm text-white/60 hover:text-white transition-colors"
                >
                  Arnold@wisepenenglish.com
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="py-5 border-t border-white/10 flex flex-col sm:flex-row justify-between items-center gap-3">
          <p className="text-xs text-white/50">
            &copy; {new Date().getFullYear()} Wisepen Language Institute. All
            rights reserved.
          </p>
          <p className="text-xs text-white/30">와이스펜 어학원</p>
        </div>
      </div>
    </footer>
  );
}
