"use client";
import { motion } from 'framer-motion';
import { BookOpen, Sparkles, Star } from 'lucide-react';
import TextPressure from '@/components/TextPressure';
import { Card, CardContent } from '@/components/ui/card';
import '@/styles/learn-more-button.css';

interface StandardCTAProps {
  badge?: string;
  titleHighlight?: string;
  titlePrefix?: string;
  titleSuffix?: string; // optional trailing part after highlighted segment
  paragraph?: string;
  points?: { icon: 'assessment' | 'plan' | 'rating' | 'custom'; label: string }[];
  primaryLabel?: string;
  primaryHref?: string;
  secondaryLabel?: string;
  secondaryHref?: string;
  id?: string;
  className?: string;
}

const iconMap: Record<string, JSX.Element> = {
  assessment: <BookOpen className="h-5 w-5 text-[#245E51]" />,
  plan: <Sparkles className="h-5 w-5 text-[#245E51]" />,
  rating: <Star className="h-5 w-5 text-[#245E51]" />,
  custom: <Sparkles className="h-5 w-5 text-[#245E51]" />
};

export function StandardCTA({
  badge = 'Start Your Journey',
  titlePrefix = 'Master the',
  titleHighlight = 'Qur\'an & Arabic',
  titleSuffix = 'Online',
  paragraph = 'Join thousands learning with certified teachers and structured pathways. Experience a focused trial session.',
  points = [
    { icon: 'assessment', label: 'Free placement assessment' },
    { icon: 'plan', label: 'Personalized study plan' },
    { icon: 'rating', label: '4.9/5 average rating' }
  ],
  primaryLabel = 'Start Free Trial Lesson',
  primaryHref = '#',
  secondaryLabel,
  secondaryHref = '#',
  id,
  className = ''
}: StandardCTAProps){
  return (
    <section id={id} className={`py-24 relative ${className}`}>
      <div className="container mx-auto px-4">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
          <div className="relative max-w-6xl mx-auto">
            <div className="pointer-events-none absolute inset-x-0 top-0 bottom-30 z-20 -translate-y-1/2">
              <div className="mx-auto mt-16 w-full max-w-5xl" style={{ height: 200 }}>
                <TextPressure
                  text="JOIN DHIKR"
                  textColor="#eafbe0"
                  stroke
                  strokeColor="#A8FF51"
                  flex={false}
                  scale={false}
                  minFontSize={72}
                />
              </div>
            </div>
            <Card className="relative bg-white border border-gray-100 rounded-3xl shadow-xl overflow-hidden z-10 mt-8">
              <CardContent className="p-10 md:p-14 lg:p-16 text-center relative z-10">
                <div className="inline-flex items-center px-3 py-1 text-sm font-medium text-[#245E51] bg-[#A8FF51]/20 rounded-full border border-[#A8FF51]/30">
                  {badge}
                </div>
                <motion.h2 className="mt-5 text-4xl lg:text-5xl font-extrabold tracking-tight leading-tight text-gray-900" initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1, duration: 0.5 }}>
                  {titlePrefix} <span className="text-transparent bg-gradient-to-r from-[#245E51] to-[#A8FF51] bg-clip-text">{titleHighlight}</span>{titleSuffix ? ` ${titleSuffix}` : ''}
                </motion.h2>
                <motion.p className="mt-4 text-lg md:text-xl text-gray-600 max-w-3xl mx-auto text-pretty" initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2, duration: 0.5 }}>
                  {paragraph}
                </motion.p>
                <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-4 text-sm text-gray-500">
                  {points.map(p => (
                    <div key={p.label} className="flex items-center justify-center gap-2">
                      {iconMap[p.icon]}
                      <span>{p.label}</span>
                    </div>
                  ))}
                </div>
                <motion.div
                  className="mt-12 flex flex-col sm:flex-row gap-6 justify-center items-center"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3, duration: 0.6 }}
                >
                  <a href={primaryHref} className="learn-more">{primaryLabel}</a>
                  {secondaryLabel && (
                    <a href={secondaryHref} className="px-6 py-4 rounded-xl font-semibold bg-[#0c332a] text-white text-sm shadow hover:shadow-md transition whitespace-nowrap">{secondaryLabel}</a>
                  )}
                </motion.div>
              </CardContent>
            </Card>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
