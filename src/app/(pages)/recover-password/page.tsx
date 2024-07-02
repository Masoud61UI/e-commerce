import React from 'react'
import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'

import { RenderParams } from '../../_components/RenderParams'
import { mergeOpenGraph } from '../../_utilities/mergeOpenGraph'
import { RecoverPasswordForm } from './RecoverPasswordForm'

import classes from './index.module.scss'

export default async function RecoverPassword() {
  return (
    <section className="grid grid-cols-1 md:grid-cols-2 h-screen overflow-auto">
      <div
        style={{ backgroundImage: `url('/assets/images/image-3.svg')` }}
        className="flex justify-center md:h-full bg-cover bg-no-repeat bg-center h-screen md:justify-start"
      >
        <Link href="/" className="flex w-fit h-fit">
          <h3 className="z-10 m-10 md:m-[40px] text-2xl font-bold p-2 bg-white rounded-md">
            <span className="text-violet-500">MB</span> eShop
          </h3>
        </Link>
      </div>

      <div className="flex flex-col justify-start items-center h-full md:justify-center p-4 mt-[-200px] md:mt-0">
        <div className="max-w-[600px] w-full p-7 rounded-lg bg-white backdrop-blur-30 shadow-md md:shadow-none md:p-12">
          <RenderParams className="mt-5" />

          <Link href="/login" className="flex items-center mb-7 gap-1 text-none">
            <Image src="/assets/icons/arrow-left.svg" alt="left arrow" width={24} height={24} />
            <p className="text-gray-700 text-base">Back</p>
          </Link>
          <div className="flex flex-col gap-4 w-full">
            <h3 className="mb-2 text-lg md:text-xl font-semibold">Forgot Password</h3>
          </div>

          <RecoverPasswordForm />
        </div>
      </div>
    </section>
  )
}

export const metadata: Metadata = {
  title: 'Recover Password',
  description: 'Enter your email address to recover your password.',
  openGraph: mergeOpenGraph({
    title: 'Recover Password',
    url: '/recover-password',
  }),
}
