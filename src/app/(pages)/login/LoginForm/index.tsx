'use client'

import React, { useCallback, useRef } from 'react'
import { useForm } from 'react-hook-form'
import Link from 'next/link'
import { useRouter, useSearchParams } from 'next/navigation'

import { Button } from '../../../_components/Button'
import { Input } from '../../../_components/Input'
import { Message } from '../../../_components/Message'
import { useAuth } from '../../../_providers/Auth'

type FormData = {
  email: string
  password: string
}

const LoginForm: React.FC = () => {
  const searchParams = useSearchParams()
  const allParams = searchParams.toString() ? `?${searchParams.toString()}` : ''
  const redirect = useRef(searchParams.get('redirect'))
  const { login } = useAuth()
  const router = useRouter()
  const [error, setError] = React.useState<string | null>(null)

  const {
    register,
    handleSubmit,
    formState: { errors, isLoading },
  } = useForm<FormData>()

  const onSubmit = useCallback(
    async (data: FormData) => {
      try {
        await login(data)
        if (redirect?.current) router.push(redirect.current as string)
        else router.push('/')
        window.location.href = '/'
      } catch (_) {
        setError('There was an error with the credentials provided. Please try again.')
      }
    },
    [login, router],
  )

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="w-full mb-5 flex flex-col gap-7 mt-8 items-start"
    >
      <Message error={error} className="mb-5" />
      <Input
        name="email"
        label="Email Address"
        required
        register={register}
        error={errors.email}
        type="email"
      />
      <Input
        name="password"
        type="password"
        label="Password"
        required
        register={register}
        error={errors.password}
      />
      <Button
        type="submit"
        appearance="primary"
        label={isLoading ? 'Processing' : 'Login'}
        disabled={isLoading}
        className="w-full py-3 hover:opacity-85 transition duration-180 ease-out hover:ease-in"
      />
      <div className="flex items-center justify-between w-full">
        <Link
          href={`/create-account${allParams}`}
          className="text-sm text-gray-500 font-medium underline hover:text-violet-500 transition duration-180 ease-out hover:ease-in"
        >
          Create an account
        </Link>
        <br />
        <Link
          href={`/recover-password${allParams}`}
          className="text-sm text-gray-500 font-medium underline hover:text-violet-500 transition duration-180 ease-out hover:ease-in"
        >
          Recover your password
        </Link>
      </div>
    </form>
  )
}

export default LoginForm
