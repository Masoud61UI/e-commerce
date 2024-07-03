import Link from 'next/link'
import classes from './index.module.scss'
import { Category } from '../../../payload/payload-types'
import CategoryCard from './CategoryCard'

export default function Categories({ categories }: { categories: Category[] }) {
  return (
    <section className="flex flex-col gap-12">
      <div className="flex justify-between items-center">
        <h3 className="text-lg font-medium">Shop by Categories</h3>
        <Link
          href={'/products'}
          className="text-base text-gray-500 hover:text-violet-600 transition duration-180 ease-out hover:ease-in"
        >
          Show All
        </Link>
      </div>

      <div className="grid grid-cols-1 gap-7 p-0 sm:grid-cols-3">
        {categories.map(category => (
          <CategoryCard key={category.id} category={category} />
        ))}
      </div>
    </section>
  )
}
