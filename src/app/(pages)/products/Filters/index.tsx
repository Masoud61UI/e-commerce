'use client'

import { Category } from '../../../../payload/payload-types'
import { Checkbox } from '../../../_components/CheckBox'
import { RadioButton } from '../../../_components/RadioButton'
import { useFilter } from '../../../_providers/Filter'

export default function Filters({ categories }: { categories: Category[] }) {
  const { categoryFilters, sort, setCategoryFilters, setSort } = useFilter()

  const handleCategories = (categoryId: string) => {
    if (categoryFilters.includes(categoryId)) {
      const updatedCategories = categoryFilters.filter(id => id !== categoryId)

      setCategoryFilters(updatedCategories)
    } else {
      setCategoryFilters([...categoryFilters, categoryId])
    }
  }
  const handleSort = (value: string) => setSort(value)

  return (
    <div className="mt-4 flex flex-col gap-5 lg:flex-row lg:gap-10 lg:mt-12">
      <div className="w-full flex gap-16 sm:gap-64">
        <div>
          <h6 className="text-sm md:text-base 2xl:text-lg font-semibold whitespace-nowrap">
            Product Categories:
          </h6>
          <div className="flex flex-col gap-4 mt-5 lg:flex-row">
            {categories.map(category => {
              const isSelected = categoryFilters.includes(category.id)

              return (
                <Checkbox
                  key={category.id}
                  label={category.title}
                  value={category.id}
                  isSelected={isSelected}
                  onClickHandler={handleCategories}
                />
              )
            })}
          </div>
        </div>
        <div>
          <h6 className="text-sm md:text-base 2xl:text-lg font-semibold whitespace-nowrap">
            Sort By:
          </h6>
          <div className="flex flex-col gap-4 mt-5 lg:flex-row">
            <RadioButton
              label="Latest"
              value="-createdAt"
              isSelected={sort === '-createdAt'}
              onRadioChange={handleSort}
              groupName="sort"
            />
            <RadioButton
              label="Oldest"
              value="createdAt"
              isSelected={sort === 'createdAt'}
              onRadioChange={handleSort}
              groupName="sort"
            />
          </div>
        </div>
      </div>
    </div>
  )
}
