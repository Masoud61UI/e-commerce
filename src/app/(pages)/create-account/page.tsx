import React from 'react'
import { Metadata } from 'next'

import { RenderParams } from '../../_components/RenderParams'
import { getMeUser } from '../../_utilities/getMeUser'
import { mergeOpenGraph } from '../../_utilities/mergeOpenGraph'
import CreateAccountForm from './CreateAccountForm'

import classes from './index.module.scss'
import Link from 'next/link'
import Image from 'next/image'

export default async function CreateAccount() {
  await getMeUser({
    validUserRedirect: `/account?warning=${encodeURIComponent(
      'Cannot create a new account while logged in, please log out and try again.',
    )}`,
  })

  return (
    <section className="grid grid-cols-1 md:grid-cols-2 h-screen overflow-auto">
      <div
        style={{ backgroundImage: `url('/assets/images/image-2.svg')` }}
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
            Create your account today and start exploring!
          </p>

          <CreateAccountForm />
        </div>
      </div>
    </section>
  )
}

export const metadata: Metadata = {
  title: 'Account',
  description: 'Create an account or log in to your existing account.',
  openGraph: mergeOpenGraph({
    title: 'Account',
    url: '/account',
  }),
}
