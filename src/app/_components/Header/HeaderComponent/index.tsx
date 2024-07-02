'use client'

import Link from 'next/link'
import { HeaderProps } from '../../../../payload/payload-types'
import { Gutter } from '../../Gutter'
import Image from 'next/image'
import LogoBlack from '../../../../../public/logo-black.svg'
import { HeaderNav } from '../Nav'
import { noHeaderFooterUrls } from '../../../constants'
import { usePathname } from 'next/navigation'

export default function HeaderComponent({ header }: { header: HeaderProps }) {
  const pathname = usePathname()

  return (
    <nav
      className={['py-6', noHeaderFooterUrls.includes(pathname) && 'hidden']
        .filter(Boolean)
        .join(' ')}
    >
      <Gutter className="flex items-center justify-between flex-wrap gap-2 space-x-2">
        <Link href={'/'} className='text-2xl font-bold'><span className='text-violet-500'>MB</span> eShop</Link>

        <HeaderNav header={header} />
      </Gutter>
    </nav>
  )
}
