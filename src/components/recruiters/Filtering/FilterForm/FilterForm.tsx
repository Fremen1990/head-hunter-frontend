import React, { useState } from 'react'
import { Form, StarInput } from './FilterForm.styles'
import { AiOutlineStar } from 'react-icons/ai'

export const FilterForm = () => {
   const [filter, setFilter] = useState<any>({
      courseEvaluation: [],
   })

   const handleChange = (e: any) => {
      const { value, checked } = e.target
      const { courseEvaluation } = filter

      if (checked) {
         setFilter({
            courseEvaluation: [...courseEvaluation, value],
         })
      } else {
         setFilter({
            courseEvaluation: courseEvaluation.filter((e: any) => e !== value),
         })
      }
   }

   return (
      <Form>
         <h2>courseEvaluation: {filter.courseEvaluation}</h2>
         <div>
            <p>Ocena przjścia kursu</p>
            <StarInput>
               <input
                  type="checkbox"
                  id={'mark1'}
                  name="courseEvaluation"
                  value="1"
                  onChange={handleChange}
               />
               <label htmlFor="mark1">
                  1 <AiOutlineStar />
               </label>
            </StarInput>
            <StarInput>
               <input
                  type="checkbox"
                  id={'mark2'}
                  name="courseEvaluation"
                  value="2"
                  onChange={handleChange}
               />
               <label htmlFor="mark2">
                  2 <AiOutlineStar />
               </label>
            </StarInput>
            <StarInput>
               <input
                  type="checkbox"
                  id={'mark3'}
                  name="courseEvaluation"
                  value="3"
                  onChange={handleChange}
               />
               <label htmlFor="mark3">
                  3 <AiOutlineStar />
               </label>
            </StarInput>
            <StarInput>
               <input
                  type="checkbox"
                  id={'mark4'}
                  name="courseEvaluation"
                  value="4"
                  onChange={handleChange}
               />
               <label htmlFor="mark4">
                  4 <AiOutlineStar />
               </label>
            </StarInput>
            <StarInput>
               <input
                  type="checkbox"
                  id={'mark5'}
                  name="courseEvaluation"
                  value="5"
                  onChange={handleChange}
               />
               <label htmlFor="mark5">
                  5 <AiOutlineStar />
               </label>
            </StarInput>
         </div>
      </Form>
   )
}
