'use client'

import Link from 'next/link'
import { Category, Media } from '../../../../payload/payload-types'
import { useFilter } from '../../../_providers/Filter'

type CategoryCardProps = {
  category: Category
}

export default function CategoryCard({ category }: CategoryCardProps) {
  const media = category.media as Media
  const { setCategoryFilters } = useFilter()

  return (
    <Link
      href={'/products'}
      className="relative bg-gray-100 min-h-[360px] w-full flex justify-center items-end p-5 cursor-pointer bg-cover bg-center bg-no-repeat rounded-xl"
      style={{ backgroundImage: `url(${media.url})` }}
      onClick={() => setCategoryFilters([category.id])}
    >
      <h3 className="rounded-lg p-2.5 w-full text-center bg-white text-violet-600">
        {category.title}
      </h3>
    </Link>
  )
}
