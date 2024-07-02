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
    <section className={classes.login}>
      <div className={classes.heroImg}>
        <Link href="/" className="flex w-fit">
          <h3 className="z-10 m-10 md:m-[40px] text-2xl font-bold p-2 bg-white rounded-md">
            <span className="text-violet-500">MB</span> eShop
          </h3>
        </Link>
      </div>

      <div className="flex flex-col justify-start items-center h-full w-full md:justify-center p-4">
        <div className={classes.formContainer}>
          <RenderParams className={classes.params} />

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
