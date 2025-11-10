"use client"

import { useEffect, useState } from "react"

interface Snowflake {
  id: number
  left: number
  animationDuration: number
  fontSize: number
  delay: number
}

export function Snowfall() {
  const [snowflakes, setSnowflakes] = useState<Snowflake[]>([])

  useEffect(() => {
    const createSnowflakes = () => {
      const flakes: Snowflake[] = []
      const numberOfFlakes = 30

      for (let i = 0; i < numberOfFlakes; i++) {
        flakes.push({
          id: i,
          left: Math.random() * 100,
          animationDuration: 10 + Math.random() * 20,
          fontSize: 10 + Math.random() * 20,
          delay: Math.random() * 5,
        })
      }

      setSnowflakes(flakes)
    }

    createSnowflakes()
  }, [])

  return (
    <div className="pointer-events-none fixed inset-0 z-50">
      {snowflakes.map((flake) => (
        <div
          key={flake.id}
          className="snowflake"
          style={{
            left: `${flake.left}%`,
            fontSize: `${flake.fontSize}px`,
            animationDuration: `${flake.animationDuration}s`,
            animationDelay: `${flake.delay}s`,
          }}
        >
          ❄
        </div>
      ))}
    </div>
  )
}
