'use client'
import React, { useEffect, useState } from 'react'

import Link from 'next/link'

const Promotion = () => {
  const [time, setTime] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  })

  const targetDate = new Date()
  targetDate.setDate(targetDate.getDate() + 3)

  useEffect(() => {
    const timerInterval = setInterval(() => {
      const currentTime = new Date()
      const timeDifference = Math.max(Number(targetDate) - Number(currentTime), 0)

      const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24))
      const hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
      const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60))
      const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000)

      setTime({ days, hours, minutes, seconds })

      if (timeDifference === 0) {
        clearInterval(timerInterval)
        // You can add code here to handle what happens when the target date is reached.
      }
    }, 1000)

    return () => {
      clearInterval(timerInterval) // Cleanup the interval when the component unmounts.
    }
  }, [])

  return (
    <section className="grid grid-cols-1 gap-8 mb-8">
      <div className="flex flex-col sm:flex-row justify-center gap-9">
        <div className="basis-1/2">
          <h3 className="text-xl font-semibold ">Deals of the Month</h3>
          <p className="text-sm font-normal text-gray-500 mt-4 mb-8">
            Get ready for a shopping experience like never before with our Deals of the Month! Every
            purchase comes with exclusive perks and offers, making this month a celebration of savvy
            choices and amazing deals. Don't miss out! 🎁🛒
          </p>

          <Link
            href={'/products'}
            className="bg-violet-500 text-white text-sm font-medium rounded-md py-2.5 px-4 hover:opacity-85 transition duration-180 ease-out hover:ease-in"
          >
            Shop Now
          </Link>
        </div>

        <ul className="grid grid-cols-2 basis-1/2 gap-5">
          <StatBox label="Days" value={time.days} />
          <StatBox label="Hours" value={time.hours} />
          <StatBox label="Minutes" value={time.minutes} />
          <StatBox label="Seconds" value={time.seconds} />
        </ul>
      </div>
    </section>
  )
}

const StatBox = ({ label, value }: { label: string; value: number }) => (
  <li className="bg-red-50 p-4 rounded-lg min-w-[100px] w-full text-center">
    <h4 className="font-bold text-red-500">{value}</h4>
    <p className="text-sm font-medium">{label}</p>
  </li>
)

export default Promotion
