import React from 'react'
import { Metadata } from 'next'

import { RenderParams } from '../../_components/RenderParams'
import { getMeUser } from '../../_utilities/getMeUser'
import { mergeOpenGraph } from '../../_utilities/mergeOpenGraph'
import LoginForm from './LoginForm'

import classes from './index.module.scss'
import Link from 'next/link'
import Image from 'next/image'

export default async function Login() {
  await getMeUser({
    validUserRedirect: `/account?warning=${encodeURIComponent('You are already logged in.')}`,
  })

  return (
    <section className="grid grid-cols-1 md:grid-cols-2 h-screen">
      <div
        style={{ backgroundImage: `url('/assets/images/image-1.svg')` }}
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

          <div className="flex items-center gap-4 w-full">
            <h3 className="text-2xl font-semibold">Welcome</h3>
            <Image src="/assets/icons/hand.png" alt="hand" width={30} height={30} />
          </div>

          <p className="text-sm text-gray-500 mt-3">
            Unlock a world of possibilities by logging into your account!
          </p>

          <LoginForm />
        </div>
      </div>
    </section>
  )
}

export const metadata: Metadata = {
  title: 'Login',
  description: 'Login or create an account to get started.',
  openGraph: mergeOpenGraph({
    title: 'Login',
    url: '/login',
  }),
}
