import React, { useReducer } from 'react'
import { Form } from './FilterForm.styles'
import { OneStarInput } from './OneInput/OneStarInput'
import { OneButtonInput } from './OneInput/OneButtonInput'
import { filterReducer } from '../../../../ultils/filterReducer'
import {
   activityAssessment,
   codeEvaluation,
   courseEvaluation,
   jobEvaluation,
   typeOfContract,
   typeOfWork,
} from '../constFilterElement/filterElement'
import { description } from '../../../../constants/description/description'
import { SalaryInput } from '../Filtering.styles'

export const FilterForm = () => {
   const describe = description.filterModal
   const [filter, dispatch] = useReducer(filterReducer, {
      courseEvaluation: [],
      activityAssessment: [],
      codeEvaluation: [],
      jobEvaluation: [],
      typeOfWork: [],
      typeOfContract: [],
      salary: { min: 0, max: 0 },
   })

   console.log(filter.salary)

   return (
      <Form>
         <div>
            <p>{describe.courseEvaluation}</p>
            {courseEvaluation.map((el) => (
               <OneStarInput
                  key={`${el.name}${el.value}`}
                  onChange={dispatch}
                  name={el.name}
                  value={el.value}
               />
            ))}
         </div>
         <div>
            <p>{describe.activityAssessment}</p>
            {activityAssessment.map((el) => (
               <OneStarInput
                  key={`${el.name}${el.value}`}
                  onChange={dispatch}
                  name={el.name}
                  value={el.value}
               />
            ))}
         </div>
         <div>
            <p>{describe.codeEvaluation}</p>
            {codeEvaluation.map((el) => (
               <OneStarInput
                  key={`${el.name}${el.value}`}
                  onChange={dispatch}
                  name={el.name}
                  value={el.value}
               />
            ))}
         </div>
         <div>
            <p>{describe.jobEvaluation}</p>
            {jobEvaluation.map((el) => (
               <OneStarInput
                  key={`${el.name}${el.value}`}
                  onChange={dispatch}
                  name={el.name}
                  value={el.value}
               />
            ))}
         </div>
         <div>
            <p>{describe.typeOfWork}</p>
            {typeOfWork.map((el) => (
               <OneButtonInput
                  key={`${el.name}${el.value}`}
                  onChange={dispatch}
                  name={el.name}
                  value={el.value}
                  inputName={el.inputTitle}
               />
            ))}
         </div>
         <div>
            <p>{describe.typeOfContract}</p>
            {typeOfContract.map((el) => (
               <OneButtonInput
                  key={`${el.name}${el.value}`}
                  onChange={dispatch}
                  name={el.name}
                  value={el.value}
                  inputName={el.inputTitle}
               />
            ))}
         </div>
         <div>
            <p>{describe.salary}</p>
            <SalaryInput>
               od:
               <input
                  type="number"
                  value={filter.salary.min}
                  name={'min'}
                  onChange={(e) =>
                     dispatch({ type: 'SALARY', payload: e.target })
                  }
               />
            </SalaryInput>
            <SalaryInput>
               do:
               <input
                  type="number"
                  value={filter.salary.max}
                  name={'max'}
                  onChange={(e) =>
                     dispatch({ type: 'SALARY', payload: e.target })
                  }
               />
            </SalaryInput>
         </div>
         <div>
            <p>{describe.internship}</p>
            <div className={'internshipBox'}>
               <label>
                  Tak
                  <input type={'radio'} name={'internship'} value={'yes'} />
               </label>
               <label>
                  Nie
                  <input type="radio" name="internship" value="no" />
               </label>
            </div>
         </div>
         <div>
            <p>{describe.experience}</p>
            <SalaryInput>
               <input type="number" />
            </SalaryInput>
         </div>
      </Form>
   )
}
