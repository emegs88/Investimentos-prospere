'use client'

import { Slide1 } from '@/components/slides/Slide1'
import { Slide2 } from '@/components/slides/Slide2'
import { Slide3 } from '@/components/slides/Slide3'
import { Slide4 } from '@/components/slides/Slide4'
import { Slide5 } from '@/components/slides/Slide5'
import { Slide6 } from '@/components/slides/Slide6'
import { Slide7 } from '@/components/slides/Slide7'
import { Slide8 } from '@/components/slides/Slide8'
import { Slide9 } from '@/components/slides/Slide9'
import { Slide10 } from '@/components/slides/Slide10'
import { Slide11 } from '@/components/slides/Slide11'

const slides = [
  Slide1,
  Slide2,
  Slide3,
  Slide4,
  Slide5,
  Slide6,
  Slide7,
  Slide8,
  Slide9,
  Slide10,
  Slide11
]

export default function PrintPage() {
  return (
    <div className="bg-background text-foreground">
      {slides.map((Slide, index) => (
        <div
          key={index}
          className="w-full min-h-screen flex items-center justify-center border-b border-white/10 print-page"
          style={{ pageBreakAfter: 'always' }}
        >
          <Slide />
        </div>
      ))}
      <style jsx>{`
        @media print {
          .print-page {
            page-break-after: always;
            page-break-inside: avoid;
          }
          body {
            margin: 0;
            padding: 0;
          }
          @page {
            size: A4 landscape;
            margin: 0;
          }
        }
      `}</style>
    </div>
  )
}
