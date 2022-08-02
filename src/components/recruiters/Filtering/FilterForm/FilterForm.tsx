import React, { SyntheticEvent, useReducer } from 'react'
import { ButtonBox, ClearBtn, Form } from './FilterForm.styles'
import { OneStarInput } from './OneInput/OneStarInput'
import { OneButtonInput } from './OneInput/OneButtonInput'
import { filterReducer } from '../../../../utils/filterReducer'
import {
   activityAssessment,
   codeEvaluation,
   courseEvaluation,
   initialState,
   jobEvaluation,
   typeOfContract,
   typeOfWork,
} from '../constFilterElement/filterElement'
import { description } from '../../../../constants/description/description'
import { SalaryInput } from '../Filtering.styles'
import { Button } from '../../../commons/Button/Button'

interface Props {
   hiddenModal: () => void
}

export const FilterForm = (props: Props) => {
   const describe = description.filterModal
   const [filter, dispatch] = useReducer(filterReducer, initialState)

   const handleSubmit = (e: SyntheticEvent) => {
      e.preventDefault()
      console.log(filter)
   }

   const handleClear = () => {
      dispatch({ type: 'CLEAR' })
      // eslint-disable-next-line no-undef
      const el: NodeListOf<HTMLInputElement> = document.querySelectorAll(
         'input[type="checkbox"]:checked'
      )
      if (el) {
         el.forEach((el) => {
            el.checked = false
         })
      }
   }

   return (
      <>
         <Form onSubmit={handleSubmit}>
            <div>
               <p>{describe.courseEvaluation}</p>
               {courseEvaluation.map((el) => (
                  <OneStarInput
                     key={`${el.name}${el.value}`}
                     onChange={() => dispatch}
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
                     onChange={() => dispatch}
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
                     onChange={() => dispatch}
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
                     onChange={() => dispatch}
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
                     onChange={() => dispatch}
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
                     onChange={() => dispatch}
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
                     <input
                        type={'radio'}
                        name={'internship'}
                        value={'yes'}
                        onChange={(e) =>
                           dispatch({ type: 'INTERNSHIP', payload: e.target })
                        }
                     />
                  </label>
                  <label>
                     Nie
                     <input
                        type="radio"
                        name="internship"
                        value="no"
                        onChange={(e) =>
                           dispatch({ type: 'INTERNSHIP', payload: e.target })
                        }
                     />
                  </label>
               </div>
            </div>
            <div>
               <p>{describe.experience}</p>
               <SalaryInput>
                  <input
                     type="number"
                     value={filter.experience.month}
                     onChange={(e) =>
                        dispatch({ type: 'EXPERIENCE', payload: e.target })
                     }
                  />
               </SalaryInput>
            </div>
            <ButtonBox>
               <button className={'annualBtn'} onClick={props.hiddenModal}>
                  {description.buttons.annual}
               </button>
               <Button buttonTitle={description.buttons.search} />
            </ButtonBox>
         </Form>
         <ClearBtn onClick={handleClear} className={'clearForm'}>
            {description.filterModal.clearAll}
         </ClearBtn>
      </>
   )
}
