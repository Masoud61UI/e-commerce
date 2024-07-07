'use client'

import { usePathname } from 'next/navigation'
import { inclusions, noHeaderFooterUrls, profileNavItems } from '../../../constants'
import { Gutter } from '../../Gutter'
import Image from 'next/image'
import Link from 'next/link'
import { FooterProps, Media } from '../../../../payload/payload-types'
import { Button } from '../../Button'

export default function FooterComponent({ footer }: { footer: FooterProps }) {
  const pathname = usePathname()

  const navItems = footer?.navItems || []

  return (
    <footer className={noHeaderFooterUrls.includes(pathname) ? 'hidden' : ''}>
      <Gutter>
        <ul className="grid justify-center gap-6 p-0 md:grid-cols-2 my-5 lg:grid-cols-4">
          {inclusions.map(inclusion => (
            <li key={inclusion.title}>
              <Image
                src={inclusion.icon}
                alt={inclusion.title}
                width={36}
                height={36}
                className="mb-4"
              />
              <h5 className="text-base 2xl:text-lg font-semibold">{inclusion.title}</h5>
              <p className="text-sm text-gray-500">{inclusion.description}</p>
            </li>
          ))}
        </ul>
      </Gutter>

      <div className="py-12 sm:py-6 bg-black">
        <Gutter>
          <div className="flex justify-between items-center flex-wrap gap-5 sm:mt-6 sm:flex-col sm:justify-center sm:text-center">
            <Link href={'/'} className="text-2xl text-white font-bold">
              MB eShop
            </Link>

            <p className="text-white">{footer.copyright}</p>

            <div className="flex gap-5 pb-3">
              {navItems.map(item => {
                const icon = item?.link?.icon as Media

                return (
                  <Button
                    key={item.link.label}
                    el="link"
                    href={item.link.url}
                    newTab={true}
                    className="w-full"
                  >
                    <Image
                      src={icon?.url}
                      alt={item.link.label}
                      width={24}
                      height={24}
                      className="w-6 h-6"
                    />
                  </Button>
                )
              })}
            </div>
          </div>
        </Gutter>
      </div>
    </footer>
  )
}
