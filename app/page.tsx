"use client"

import { CountdownTimer } from "@/components/countdown-timer"
import { FundraisingDisplay } from "@/components/fundraising-display"
import { Snowfall } from "@/components/snowfall"
import { Calendar, Clock, MapPin, Sparkles } from "lucide-react"

export default function BingoNavidenoPage() {
  return (
    <main className="min-h-screen relative overflow-hidden">
      <Snowfall />

      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-amber-400 via-red-500 to-emerald-500 shadow-lg" />

      <div className="container mx-auto px-4 py-6 md:py-10 relative z-10 max-w-6xl">
        <div className="text-center mb-5 md:mb-8 space-y-2 md:space-y-4">
          <div className="inline-flex items-center justify-center gap-1.5 sm:gap-2 md:gap-3 mb-2">
            <Sparkles className="w-5 h-5 sm:w-6 sm:h-6 md:w-10 md:h-10 text-amber-400 animate-pulse" />
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black tracking-tight text-white drop-shadow-[0_4px_12px_rgba(0,0,0,0.8)]">
              Bingo Navideño
            </h1>
            <Sparkles className="w-5 h-5 sm:w-6 sm:h-6 md:w-10 md:h-10 text-amber-400 animate-pulse" />
          </div>
          <div className="flex items-center justify-center gap-2 md:gap-3">
            <div className="h-px w-8 sm:w-12 md:w-24 bg-gradient-to-r from-transparent to-amber-400" />
            <p className="text-sm sm:text-base md:text-xl lg:text-2xl text-amber-100 font-light tracking-wide">
              Celebra la Navidad con Nosotros
            </p>
            <div className="h-px w-8 sm:w-12 md:w-24 bg-gradient-to-l from-transparent to-amber-400" />
          </div>
        </div>

        <div className="mb-5 md:mb-6">
          <FundraisingDisplay />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 mb-5 md:mb-6">
          <div className="bg-white/95 backdrop-blur-md rounded-2xl p-4 sm:p-5 md:p-6 shadow-2xl border border-emerald-200">
            <div className="flex items-center justify-center gap-1.5 sm:gap-2 mb-3 sm:mb-4 md:mb-5">
              <Clock className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-red-600" />
              <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-800 text-center">Cuenta Regresiva</h2>
            </div>
            <CountdownTimer />

            <div className="mt-3 sm:mt-4 md:mt-5 space-y-2 pt-3 sm:pt-4 md:pt-5 border-t border-gray-200">
              <div className="flex items-center gap-2 sm:gap-3 text-gray-700">
                <Calendar className="w-4 h-4 sm:w-5 sm:h-5 text-red-600 flex-shrink-0" />
                <span className="text-xs sm:text-sm md:text-base font-semibold">Domingo 30 de Noviembre</span>
              </div>
              <div className="flex items-center gap-2 sm:gap-3 text-gray-700">
                <Clock className="w-4 h-4 sm:w-5 sm:h-5 text-emerald-600 flex-shrink-0" />
                <span className="text-xs sm:text-sm md:text-base font-semibold">4:00 PM</span>
              </div>
              <div className="flex items-center gap-2 sm:gap-3 text-gray-700 pt-2 border-t border-gray-200">
                <MapPin className="w-4 h-4 sm:w-5 sm:h-5 text-amber-600 flex-shrink-0" />
                <div className="flex flex-col">
                  <span className="text-xs sm:text-sm md:text-base font-bold">Casa Club Dos</span>
                  <span className="text-[10px] sm:text-xs md:text-sm text-gray-600">Condominio Source Living</span>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-red-600 via-red-500 to-rose-600 rounded-2xl p-5 sm:p-6 md:p-8 shadow-2xl text-center relative overflow-hidden">
            <div className="absolute inset-0 bg-[url('/christmas-pattern.jpg')] opacity-5 bg-repeat" />
            <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-white mb-2 sm:mb-3 md:mb-4 relative z-10">
              Precio del Cartón
            </h3>
            <div className="bg-white/20 backdrop-blur-sm rounded-xl p-4 sm:p-5 md:p-6 mb-2 sm:mb-3 md:mb-4 border-2 border-white/30 relative z-10">
              <p className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-white drop-shadow-[0_4px_12px_rgba(0,0,0,0.5)] tabular-nums">
                ₡4,000
              </p>
            </div>
            <p className="text-sm sm:text-base md:text-lg text-white/95 font-semibold relative z-10">
              Participa y Gana Increíbles Premios
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 md:gap-4 mb-5 md:mb-6">
          <div className="bg-white/95 backdrop-blur-md rounded-xl p-3 sm:p-4 md:p-5 text-center border border-amber-200 hover:border-amber-400 hover:shadow-xl transition-all duration-300">
            <div className="text-2xl sm:text-3xl md:text-4xl mb-1.5 sm:mb-2 md:mb-3">🎁</div>
            <h4 className="text-base sm:text-lg md:text-xl font-bold text-gray-800 mb-1 md:mb-2">Premios Increíbles</h4>
            <p className="text-[10px] sm:text-xs md:text-sm text-gray-600">Grandes premios navideños te esperan</p>
          </div>

          <div className="bg-white/95 backdrop-blur-md rounded-xl p-3 sm:p-4 md:p-5 text-center border border-red-200 hover:border-red-400 hover:shadow-xl transition-all duration-300">
            <div className="text-2xl sm:text-3xl md:text-4xl mb-1.5 sm:mb-2 md:mb-3">🎅</div>
            <h4 className="text-base sm:text-lg md:text-xl font-bold text-gray-800 mb-1 md:mb-2">Ambiente Festivo</h4>
            <p className="text-[10px] sm:text-xs md:text-sm text-gray-600">Magia navideña para toda la familia</p>
          </div>

          <div className="bg-white/95 backdrop-blur-md rounded-xl p-3 sm:p-4 md:p-5 text-center border border-emerald-200 hover:border-emerald-400 hover:shadow-xl transition-all duration-300">
            <div className="text-2xl sm:text-3xl md:text-4xl mb-1.5 sm:mb-2 md:mb-3">⭐</div>
            <h4 className="text-base sm:text-lg md:text-xl font-bold text-gray-800 mb-1 md:mb-2">Diversión Total</h4>
            <p className="text-[10px] sm:text-xs md:text-sm text-gray-600">Emoción y alegría garantizada</p>
          </div>
        </div>

        <div className="text-center">
          <p className="text-base sm:text-lg md:text-xl text-amber-100 font-medium drop-shadow-lg">
            No te Pierdas Este Evento Especial
          </p>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-emerald-500 via-red-500 to-amber-400 shadow-lg" />
    </main>
  )
}
