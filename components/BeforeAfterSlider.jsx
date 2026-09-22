"use client"

import { useState } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"

export default function BeforeAfterSlider({
  beforeImage,
  afterImage,
  beforeAlt = "Initial website sketch",
  afterAlt = "Final website design",
}) {
  const [position, setPosition] = useState(50)

  return (
    <div className="relative w-full">

      {/* Slider */}
      <div
        className="
          relative
          mx-auto
          box-border

          w-full
          max-w-[1400px]

          aspect-video

          overflow-hidden

          rounded-2xl
          sm:rounded-3xl

          border
          border-zinc-900/[0.08]
          dark:border-white/[0.08]

          bg-zinc-100
          dark:bg-zinc-950

          shadow-2xl

          select-none
        "
      >

        {/* =====================================================
            FINAL DESIGN
        ====================================================== */}
        <img
          src={afterImage}
          alt={afterAlt}
          draggable="false"
          className="
            absolute
            inset-0
            w-full
            h-full
            object-cover
            object-center

            pointer-events-none
            select-none
          "
        />

        {/* =====================================================
            SKETCH REVEAL
        ====================================================== */}
        <div
          className="
            absolute
            inset-0
            overflow-hidden
            pointer-events-none
          "
          style={{
            clipPath: `inset(0 ${100 - position}% 0 0)`,
          }}
        >
          <img
            src={beforeImage}
            alt={beforeAlt}
            draggable="false"
            className="
              absolute
              inset-0
              w-full
              h-full
              object-cover
              object-center

              pointer-events-none
              select-none
            "
          />
        </div>

        {/* =====================================================
            DIVIDER
        ====================================================== */}
        <div
          className="
            absolute
            top-0
            bottom-0
            z-20

            w-[2px]

            bg-white

            shadow-[0_0_12px_rgba(255,255,255,0.75)]

            pointer-events-none
          "
          style={{
            left: `${position}%`,
            transform: "translateX(-50%)",
          }}
        />

        {/* =====================================================
            HANDLE
        ====================================================== */}
        <div
          className="
            absolute
            top-1/2
            z-30

            -translate-x-1/2
            -translate-y-1/2

            w-11
            h-11

            sm:w-14
            sm:h-14

            rounded-xl
            sm:rounded-2xl

            bg-cyan-500
            hover:bg-cyan-400

            border
            border-white/30

            shadow-xl
            shadow-cyan-500/30

            flex
            items-center
            justify-center

            pointer-events-none

            transition-colors
          "
          style={{
            left: `${position}%`,
          }}
        >
          <div className="flex items-center text-white">
            <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6" />
            <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6" />
          </div>
        </div>

        {/* =====================================================
            RANGE SLIDER
        ====================================================== */}
        <input
          type="range"
          min="0"
          max="100"
          step="0.1"
          value={position}
          onChange={(e) => setPosition(Number(e.target.value))}
          aria-label="Compare initial sketch with final design"
          className="
            absolute
            inset-0

            z-40

            w-full
            h-full

            opacity-0

            cursor-ew-resize

            touch-none
          "
        />

        {/* =====================================================
            SKETCH LABEL
        ====================================================== */}
        <div
          className="
            absolute
            top-4
            left-4

            sm:top-6
            sm:left-6

            z-10

            px-3
            py-1.5

            rounded-full

            bg-black/60
            backdrop-blur-md

            border
            border-white/10

            text-white

            text-xs
            sm:text-sm

            font-medium

            pointer-events-none
          "
        >
          Sketch
        </div>

        {/* =====================================================
            FINAL DESIGN LABEL
        ====================================================== */}
        <div
          className="
            absolute
            top-4
            right-4

            sm:top-6
            sm:right-6

            z-10

            px-3
            py-1.5

            rounded-full

            bg-black/60
            backdrop-blur-md

            border
            border-white/10

            text-white

            text-xs
            sm:text-sm

            font-medium

            pointer-events-none
          "
        >
          Final Design
        </div>

      </div>

      {/* Instruction */}
      <p
        className="
          mt-4
          text-center
          text-sm
          text-zinc-500
          dark:text-zinc-400
        "
      >
        Drag the slider to compare the original sketch with the final design.
      </p>

    </div>
  )
}