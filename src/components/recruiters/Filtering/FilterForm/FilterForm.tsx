import React, { SyntheticEvent, useReducer, useState } from 'react'
import { ButtonBox, ClearBtn, Form } from './FilterForm.styles'
import { OneStarInput } from './OneInput/OneStarInput'
import { OneButtonInput } from './OneInput/OneButtonInput'
import { filterReducer } from '../../../../utils/filterReducer'
import {
   courseCompletion,
   courseEngagement,
   expectedContractType,
   expectedTypeOfWork,
   initialState,
   projectDegree,
   teamProjectDegree,
} from '../constFilterElement/filterElement'
import { description } from '../../../../constants/description/description'
import { Button } from '../../../commons/Button/Button'
import { SalaryInput } from '../Filttering.styles'
import { useDispatch } from 'react-redux'
import {
   fetchFilterHrCandidates,
   fetchFilterHrInterviews,
} from '../../../../features/hr/hrActions'
import { ModalFilterResults } from './ModaFilterResults/ModalFilterResults'

interface Props {
   hiddenModal: () => void
   filterState: string
   refreshStudents: () => void
}

export const FilterForm = ({
   hiddenModal,
   filterState,
   refreshStudents,
}: Props) => {
   const describe = description.filterModal
   const [filter, dispatch] = useReducer(filterReducer, initialState)
   const [filterResults, setFilterResults] = useState<[]>([])
   const [openResultsModal, setOpenResultsModal] = useState(false)

   const filterDispatch = useDispatch()

   const handleSubmit = async (e: SyntheticEvent) => {
      e.preventDefault()
      const newObj = {
         ...filter,
         monthsOfCommercialExp: filter.monthsOfCommercialExp.month,
         canTakeApprenticeship:
            filter.canTakeApprenticeship.canTakeApprenticeship ?? 'no',
         expectedSalary: {
            min:
               filter.expectedSalary.min !== 0
                  ? Number(filter.expectedSalary.min)
                  : null,
            max:
               filter.expectedSalary.max !== 0
                  ? Number(filter.expectedSalary.max)
                  : null,
         },
      }

      if (filterState === 'availableStudents') {
         try {
            const availableStudents = await filterDispatch(
               fetchFilterHrCandidates({ newObj })
            )
            console.log(availableStudents.payload)
            setFilterResults(availableStudents.payload)
         } finally {
            setOpenResultsModal(true)
         }
      } else {
         try {
            const interviewsStudents = await filterDispatch(
               fetchFilterHrInterviews({ newObj })
            )
            await setFilterResults(interviewsStudents.payload)
         } finally {
            setOpenResultsModal(true)
         }
      }
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
         {openResultsModal && (
            <ModalFilterResults
               closeModal={setOpenResultsModal}
               filteringUsers={filterResults}
               layout={
                  filterState === 'availableStudents' ? 'simple' : 'extended'
               }
               refreshStudents={refreshStudents}
            />
         )}
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
                        value={'no'}
                        checked={true}
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
               <button className={'annualBtn'} onClick={hiddenModal}>
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
