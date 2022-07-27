import React, { useReducer } from 'react'
import { Form } from './FilterForm.styles'
import { OneInput } from './OneInput/OneInput'

interface ElementsInterface {
   name: string
   value: string
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

type FilterActions =
   | ChangeCourseEvaluation
   | ChangeActivityAssessment
   | ChangeCodeEvaluation
   | ChangeJobEvaluation

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
   })

   return (
      <Form>
         <p>course: {filter.courseEvaluation}</p>
         <p>activity: {filter.activityAssessment}</p>
         <p>code: {filter.codeEvaluation}</p>
         <p>job: {filter.jobEvaluation}</p>
         <div>
            <p>Ocena przjścia kursu</p>
            {courseEvaluation.map((el) => (
               <OneInput
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
               <OneInput
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
               <OneInput
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
               <OneInput
                  key={`${el.name}${el.value}`}
                  onChange={dispatch}
                  name={el.name}
                  value={el.value}
               />
            ))}
         </div>
      </Form>
   )
}
