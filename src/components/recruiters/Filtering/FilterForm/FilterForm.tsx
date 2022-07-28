import React, { useReducer } from 'react'
import { Form } from './FilterForm.styles'
import { OneStarInput } from './OneInput/OneStarInput'
import { OneButtonInput } from './OneInput/OneButtonInput'

interface ElementsInterface {
   name: string
   value: string
}

interface ElementsButtonsInterface extends ElementsInterface {
   inputTitle: string
}

interface ChangeCourseEvaluation {
   type: 'COURSEEVALUATION_UPDATE'
   payload: any
}

interface ChangeActivityAssessment {
   type: 'ACTIVITYASSESSMENT_UPDATE'
   payload: any
}

interface ChangeCodeEvaluation {
   type: 'CODEEVALUATION_UPDATE'
   payload: any
}

interface ChangeJobEvaluation {
   type: 'JOBEVALUATION_UPDATE'
   payload: any
}

interface ChangeTypeOfWork {
   type: 'TYPEOFWORK_UPDATE'
   payload: any
}

interface ChangetypeOfContract {
   type: 'TYPEOFCONTRACT_UPDATE'
   payload: any
}

type FilterActions =
   | ChangeCourseEvaluation
   | ChangeActivityAssessment
   | ChangeCodeEvaluation
   | ChangeJobEvaluation
   | ChangeTypeOfWork
   | ChangetypeOfContract

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
const codeEvaluation: ElementsInterface[] = [
   {
      name: 'codeEvaluation',
      value: '1',
   },
   {
      name: 'codeEvaluation',
      value: '2',
   },
   {
      name: 'codeEvaluation',
      value: '3',
   },
   {
      name: 'codeEvaluation',
      value: '4',
   },
   {
      name: 'codeEvaluation',
      value: '5',
   },
]
const jobEvaluation: ElementsInterface[] = [
   {
      name: 'jobEvaluation',
      value: '1',
   },
   {
      name: 'jobEvaluation',
      value: '2',
   },
   {
      name: 'jobEvaluation',
      value: '3',
   },
   {
      name: 'jobEvaluation',
      value: '4',
   },
   {
      name: 'jobEvaluation',
      value: '5',
   },
]
const typeOfWork: ElementsButtonsInterface[] = [
   {
      name: 'typeOfWork',
      value: 'workOffice',
      inputTitle: 'praca z biura',
   },
   {
      name: 'typeOfWork',
      value: 'homeoffice',
      inputTitle: 'praca z domu',
   },
]
const typeOfContract: ElementsButtonsInterface[] = [
   {
      name: 'typeOfContract',
      value: 'contractOfEmployment',
      inputTitle: 'umowa o prace',
   },
   {
      name: 'typeOfContract',
      value: 'b2b',
      inputTitle: 'b2b',
   },
   {
      name: 'typeOfContract',
      value: 'contractOfMandate',
      inputTitle: 'umowa zlecenie',
   },
   {
      name: 'typeOfContract',
      value: 'workContract',
      inputTitle: 'umowa o dzieło',
   },
]

const filterReducer = (state: any, action: FilterActions) => {
   switch (action.type) {
      case 'COURSEEVALUATION_UPDATE': {
         if (action.payload.checked) {
            return {
               ...state,
               courseEvaluation: [
                  ...state.courseEvaluation,
                  ...action.payload.value,
               ],
            }
         } else {
            return {
               ...state,
               courseEvaluation: state.courseEvaluation.filter(
                  (e: any) => e !== action.payload.value
               ),
            }
         }
      }
      case 'ACTIVITYASSESSMENT_UPDATE': {
         if (action.payload.checked) {
            return {
               ...state,
               activityAssessment: [
                  ...state.activityAssessment,
                  ...action.payload.value,
               ],
            }
         } else {
            return {
               ...state,
               activityAssessment: state.activityAssessment.filter(
                  (e: any) => e !== action.payload.value
               ),
            }
         }
      }
      case 'CODEEVALUATION_UPDATE': {
         if (action.payload.checked) {
            return {
               ...state,
               codeEvaluation: [
                  ...state.codeEvaluation,
                  ...action.payload.value,
               ],
            }
         } else {
            return {
               ...state,
               codeEvaluation: state.codeEvaluation.filter(
                  (e: any) => e !== action.payload.value
               ),
            }
         }
      }
      case 'JOBEVALUATION_UPDATE': {
         if (action.payload.checked) {
            return {
               ...state,
               jobEvaluation: [...state.jobEvaluation, ...action.payload.value],
            }
         } else {
            return {
               ...state,
               jobEvaluation: state.jobEvaluation.filter(
                  (e: any) => e !== action.payload.value
               ),
            }
         }
      }
      case 'TYPEOFWORK_UPDATE': {
         if (action.payload.checked) {
            return {
               ...state,
               typeOfWork: [...state.typeOfWork, action.payload.value],
            }
         } else {
            return {
               ...state,
               typeOfWork: state.typeOfWork.filter(
                  (e: any) => e !== action.payload.value
               ),
            }
         }
      }
      case 'TYPEOFCONTRACT_UPDATE': {
         if (action.payload.checked) {
            return {
               ...state,
               typeOfContract: [...state.typeOfContract, action.payload.value],
            }
         } else {
            return {
               ...state,
               typeOfContract: state.typeOfContract.filter(
                  (e: any) => e !== action.payload.value
               ),
            }
         }
      }
      default:
         return state
   }
}

export const FilterForm = () => {
   const [filter, dispatch] = useReducer(filterReducer, {
      courseEvaluation: [],
      activityAssessment: [],
      codeEvaluation: [],
      jobEvaluation: [],
      typeOfWork: [],
      typeOfContract: [],
   })

   return (
      <Form>
         <p>kontrakt:{filter.typeOfContract}</p>
         <div>
            <p>Ocena przjścia kursu</p>
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
            <p>Ocena aktywności</p>
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
            <p>Ocena kodu</p>
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
            <p>Ocena pracy</p>
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
            <p>Rodzaj pracy</p>
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
            <p>Oczekiwany tryb kontraktu</p>
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
      </Form>
   )
}
