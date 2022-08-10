import React, { SyntheticEvent, useReducer } from 'react'
import { ButtonBox, ClearBtn, Form } from './FilterForm.styles'
import { OneStarInput } from './OneInput/OneStarInput'
import { OneButtonInput } from './OneInput/OneButtonInput'
import { filterReducer } from '../../../../utils/filterReducer'
import {
   courseEngagement,
   projectDegree,
   courseCompletion,
   teamProjectDegree,
   initialState,
   expectedContractType,
   expectedTypeOfWork,
} from '../constFilterElement/filterElement'
import { description } from '../../../../constants/description/description'
import { Button } from '../../../commons/Button/Button'
import { SalaryInput } from '../Filttering.styles'

interface Props {
   hiddenModal: () => void
}

export const FilterForm = (props: Props) => {
   const describe = description.filterModal
   const [filter, dispatch] = useReducer(filterReducer, initialState)

   const handleSubmit = (e: SyntheticEvent) => {
      console.log(filter)
      e.preventDefault()
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
               {courseCompletion.map((el) => (
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
               {courseEngagement.map((el) => (
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
               {projectDegree.map((el) => (
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
               {teamProjectDegree.map((el) => (
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
               {expectedTypeOfWork.map((el) => (
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
               {expectedContractType.map((el) => (
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
                     value={filter.expectedSalary.min}
                     name={'min'}
                     min={0}
                     max={1000000}
                     onChange={(e) =>
                        dispatch({ type: 'EXPECTEDSALARY', payload: e.target })
                     }
                  />
               </SalaryInput>
               <SalaryInput>
                  do:
                  <input
                     type="number"
                     value={filter.expectedSalary.max}
                     name={'max'}
                     min={0}
                     max={1000000}
                     onChange={(e) =>
                        dispatch({ type: 'EXPECTEDSALARY', payload: e.target })
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
                        name={'canTakeApprenticeship'}
                        value={'yes'}
                        onChange={(e) =>
                           dispatch({
                              type: 'CANTAKEAPPRENTICESHIP',
                              payload: e.target,
                           })
                        }
                     />
                  </label>
                  <label>
                     Nie
                     <input
                        type="radio"
                        name="canTakeApprenticeship"
                        value="no"
                        onChange={(e) =>
                           dispatch({
                              type: 'CANTAKEAPPRENTICESHIP',
                              payload: e.target,
                           })
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
                     value={filter.monthsOfCommercialExp.month}
                     min={0}
                     max={120}
                     onChange={(e) =>
                        dispatch({
                           type: 'MONTHSOFCOMMERCIALEXP',
                           payload: e.target,
                        })
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
