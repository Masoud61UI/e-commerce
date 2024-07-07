import { draftMode } from 'next/headers'
import { Category, Page } from '../../../payload/payload-types'
import { fetchDoc } from '../../_api/fetchDoc'
import { Blocks } from '../../_components/Blocks'
import { Gutter } from '../../_components/Gutter'
import Filters from './Filters'

import { fetchDocs } from '../../_api/fetchDocs'
import { HR } from '../../_components/HR'

export default async function Products() {
  const { isEnabled: isDraftMode } = draftMode()

  let page: Page | null = null
  let categories: Category[] | null = null

  try {
    page = await fetchDoc<Page>({
      collection: 'pages',
      slug: 'products',
      draft: isDraftMode,
    })

    categories = await fetchDocs<Category>('categories')
  } catch (error) {
    console.log(error)
  }

  return (
    <div className='w-full'>
      <Gutter className='grid grid-cols-1 gap-16 lg:gap-10'>
        <Filters categories={categories} />
        <Blocks blocks={page?.layout} disableTopPadding={true} />
      </Gutter>

      <HR />
    </div>
  )
}
