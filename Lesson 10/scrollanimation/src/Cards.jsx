import React from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useEffect } from 'react'

gsap.registerPlugin(ScrollTrigger)

const Cards = () => {
  useEffect(() => {
    gsap.utils.toArray('.card').forEach((card) => {
      gsap.to(card, {
        scale: 0.5,
        opacity: 0,
        scrollTrigger: {
          trigger: card,
          start: 'top 8%',
          end: 'bottom 8%',
          scrub: true,
        },
      })
    })
  })
  return (
    <main className="w-full flex flex-col items-center gap-10 text-center py-[8vh]">
        {[1, 2, 3, 4, 5, 6].map((num) => (
            <div
                key={num}
                className={`card card-${num} w-[24vw] sticky top-[10vh] rounded-lg px-8 py-16 flex flex-col items-center gap-10 bg-[#26251e]`}>
                <img className="w-[180px] aspect-square" src={`./image/${num}.png`} alt="Card image" />
                <h1 className="text-4xl font-thin">The<br />
                    <span className="font-normal">Algorithm</span>
                </h1>
                <p className="text-sm">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.</p>
            </div>
        ))}
    </main>
  )
}

export default Cards