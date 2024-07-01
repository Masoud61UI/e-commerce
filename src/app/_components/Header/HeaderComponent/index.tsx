import Link from 'next/link'
import { HeaderProps } from '../../../../payload/payload-types'
import { Gutter } from '../../Gutter'
import Image from 'next/image'
import LogoBlack from '../../../../../public/logo-black.svg'

export default function HeaderComponent({ header }: { header: HeaderProps }) {
  return (
    <nav>
      <Gutter>
        <Link href={'/'}>
          <Image src={LogoBlack} width={124} height={124} alt="logo" />
        </Link>
      </Gutter>
      <div className='text-6xl font-bold'>tailwind kos kos</div>
    </nav>
  )
}
