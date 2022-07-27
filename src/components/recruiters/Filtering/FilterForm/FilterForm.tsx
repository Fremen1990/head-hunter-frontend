import React, { useState } from 'react'
import { Form } from './FilterForm.styles'
import { OneInput } from './OneInput/OneInput'

interface ElementsInterface {
   name: string
   value: string
}

const courseEvaluation: ElementsInterface[] = [
   {
      name: 'courseEvaluation',
      value: '1',
   },
   {
      name: 'courseEvaluation',
      value: '2',
   },
   {
      name: 'courseEvaluation',
      value: '3',
   },
   {
      name: 'courseEvaluation',
      value: '4',
   },
   {
      name: 'courseEvaluation',
      value: '5',
   },
]
const activityAssessment: ElementsInterface[] = [
   {
      name: 'activityAssessment',
      value: '1',
   },
   {
      name: 'activityAssessment',
      value: '2',
   },
   {
      name: 'activityAssessment',
      value: '3',
   },
   {
      name: 'activityAssessment',
      value: '4',
   },
   {
      name: 'activityAssessment',
      value: '5',
   },
]

export const FilterForm = () => {
   const [filter, setFilter] = useState<any>({
      courseEvaluation: [],
   })

   const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      const { value, checked } = e.target
      const { courseEvaluation } = filter

      if (checked) {
         setFilter({
            courseEvaluation: [...courseEvaluation, value],
         })
      } else {
         setFilter({
            courseEvaluation: courseEvaluation.filter(
               (e: boolean | string) => e !== value
            ),
         })
      }
   }

   return (
      <Form>
         <h2>courseEvaluation: {filter.courseEvaluation}</h2>
         <div>
            <p>Ocena przjścia kursu</p>
            {courseEvaluation.map((el) => (
               <OneInput
                  key={`${el.name}${el.value}`}
                  onChange={handleChange}
                  name={el.name}
                  value={el.value}
               />
            ))}
         </div>
         <div>
            <p>Ocena aktywności</p>
            {activityAssessment.map((el) => (
               <OneInput
                  key={`${el.name}${el.value}`}
                  onChange={handleChange}
                  name={el.name}
                  value={el.value}
               />
            ))}
         </div>
      </Form>
   )
}
