{
  /* eslint-disable @next/next/no-img-element */
}

import React from 'react'

import { HeaderProps } from '../../../payload/payload-types'
import { fetchHeader } from '../../_api/fetchGlobals'
import HeaderComponent from './HeaderComponent'

export async function Header() {
  let header: HeaderProps | null = null

  try {
    header = await fetchHeader()
  } catch (error) {
    console.error(error)
  }

  return (
    <>
      <HeaderComponent header={header} />
    </>
  )
}
