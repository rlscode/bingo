'use client';

import { useState, useEffect } from 'react';
import { TrendingUp, Ticket, Target, Gift } from 'lucide-react';

export function FundraisingDisplay() {
  const [amount, setAmount] = useState(0);
  const targetAmount = 600000;
  const soldCards = 94;
  const totalCards = 150;

  useEffect(() => {
    const finalAmount = soldCards * 4000;
    const duration = 2000;
    const steps = 60;
    const increment = finalAmount / steps;
    let currentStep = 0;

    const timer = setInterval(() => {
      currentStep++;
      if (currentStep <= steps) {
        setAmount(Math.floor(increment * currentStep));
      } else {
        setAmount(finalAmount);
        clearInterval(timer);
      }
    }, duration / steps);

    return () => clearInterval(timer);
  }, []);

  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat('es-CR', {
      style: 'decimal',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0
    }).format(value);
  };

  const percentage = Math.min((amount / targetAmount) * 100, 100);
  const cardsPercentage = (soldCards / totalCards) * 100;

  return (
    <div className='bg-white/95 backdrop-blur-md rounded-3xl p-4 sm:p-6 md:p-10 shadow-2xl border-2 border-red-300'>
      <div className='text-center mb-4 md:mb-6'>
        <div className='inline-flex items-center gap-2 md:gap-3 bg-gradient-to-r from-red-50 to-rose-50 px-3 py-1.5 sm:px-4 sm:py-2 md:px-6 md:py-3 rounded-full border-2 border-red-200 mb-3'>
          <TrendingUp className='w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-red-600' />
          <h2 className='text-base sm:text-lg md:text-2xl lg:text-3xl font-bold text-gray-800'>
            Recaudación Actual
          </h2>
        </div>
      </div>

      <div className='text-center mb-5 md:mb-8'>
        <p className='text-[10px] sm:text-xs md:text-base text-gray-600 mb-2 md:mb-3 font-medium uppercase tracking-wide'>
          Total Recaudado
        </p>
        <div className='bg-gradient-to-br from-red-50 via-rose-50 to-red-50 rounded-2xl sm:rounded-3xl p-4 sm:p-6 md:p-12 shadow-inner border-2 md:border-3 border-red-200 relative overflow-hidden'>
          <div className='absolute inset-0 bg-gradient-to-br from-red-100/50 to-transparent animate-pulse' />
          <p className='text-4xl sm:text-5xl md:text-7xl lg:text-8xl xl:text-9xl font-black gradient-red-elegant mb-1 sm:mb-2 tabular-nums relative z-10 leading-none break-all'>
            ₡{formatCurrency(amount)}
          </p>
        </div>
      </div>

      <div className='max-w-2xl mx-auto space-y-4 md:space-y-6'>
        <div className='bg-gradient-to-br from-emerald-50 to-green-50 rounded-xl sm:rounded-2xl p-3 sm:p-4 md:p-6 border-2 border-emerald-200 shadow-lg'>
          <div className='flex items-center gap-1.5 sm:gap-2 justify-center mb-2 sm:mb-3 md:mb-4'>
            <Ticket className='w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-emerald-700' />
            <h3 className='text-sm sm:text-base md:text-xl lg:text-2xl font-bold text-gray-800'>
              Cartones Vendidos
            </h3>
          </div>
          <p className='text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-center gradient-green-text tabular-nums mb-2 sm:mb-3 md:mb-4'>
            {soldCards} / {totalCards}
          </p>
          <div className='w-full h-2.5 sm:h-3 md:h-4 bg-gray-200 rounded-full overflow-hidden border-2 border-emerald-300 shadow-inner'>
            <div
              className='h-full bg-gradient-to-r from-emerald-500 via-green-500 to-emerald-600 transition-all duration-1000'
              style={{ width: `${cardsPercentage}%` }}
            />
          </div>
          <p className='text-center text-[10px] sm:text-xs md:text-sm text-gray-600 font-semibold mt-1.5 sm:mt-2 md:mt-3'>
            {totalCards - soldCards} cartones disponibles
          </p>
        </div>

        <div className='bg-gradient-to-br from-rose-50 to-red-50 rounded-xl sm:rounded-2xl p-3 sm:p-4 md:p-6 border-2 border-red-200 shadow-lg'>
          <div className='flex items-center justify-center gap-1.5 sm:gap-2 mb-2 sm:mb-3 md:mb-4'>
            <Gift className='w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-red-700' />
            <h3 className='text-sm sm:text-base md:text-xl lg:text-2xl font-bold text-gray-800'>
              Regalos para Niños
            </h3>
          </div>

          <p className='text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-center text-red-700 tabular-nums mb-2 sm:mb-3 md:mb-4'>
            50 / 150
          </p>

          <div className='w-full h-2.5 sm:h-3 md:h-4 bg-gray-200 rounded-full overflow-hidden border-2 border-red-300 shadow-inner'>
            <div
              className='h-full bg-gradient-to-r from-red-500 via-rose-500 to-red-600 transition-all duration-1000'
              style={{ width: `${(24 / 150) * 100}%` }}
            />
          </div>

          <p className='text-center text-[10px] sm:text-xs md:text-sm text-gray-600 font-medium italic mt-2 sm:mt-3 md:mt-4'>
            Todos los juguetes serán donados a niños que no cuentan con un
            amparo familiar, llevando esperanza y alegría en esta Navidad.
            ❤️🎄✨
          </p>
        </div>

        <div className='bg-gradient-to-br from-amber-50 to-yellow-50 rounded-xl sm:rounded-2xl p-3 sm:p-4 md:p-6 border-2 border-amber-200 shadow-lg'>
          <div className='flex items-center justify-center gap-1.5 sm:gap-2 mb-2 sm:mb-3 md:mb-4'>
            <Target className='w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-amber-700' />
            <span className='font-bold text-gray-800 text-xs sm:text-sm md:text-base lg:text-xl'>
              Meta: ₡{formatCurrency(targetAmount)}
            </span>
          </div>
          <div className='flex justify-between text-[10px] sm:text-xs md:text-sm text-gray-700 mb-1.5 sm:mb-2 md:mb-3'>
            <span className='font-semibold'>Progreso</span>
            <span className='font-bold text-amber-700'>
              {percentage.toFixed(1)}%
            </span>
          </div>
          <div className='w-full h-4 sm:h-5 md:h-6 bg-gray-200 rounded-full overflow-hidden border-2 border-amber-300 shadow-inner'>
            <div
              className='h-full bg-gradient-to-r from-amber-500 via-yellow-500 to-amber-600 transition-all duration-1000 ease-out flex items-center justify-end pr-1.5 sm:pr-2 md:pr-3'
              style={{ width: `${percentage}%` }}
            >
              {percentage > 10 && (
                <span className='text-[8px] sm:text-[10px] md:text-xs font-bold text-white drop-shadow-md'>
                  ₡{formatCurrency(amount)}
                </span>
              )}
            </div>
          </div>
          <p className='text-center text-[10px] sm:text-xs md:text-sm text-gray-600 font-medium italic mt-2 sm:mt-3 md:mt-4'>
            Cada cartón nos acerca más a nuestra meta
          </p>
        </div>
      </div>
    </div>
  );
}
