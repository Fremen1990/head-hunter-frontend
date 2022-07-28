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

interface ChangeMinSalary {
   type: 'SALARY'
   payload: any
}

interface ChangeExperience {
   type: 'EXPERIENCE'
   payload: any
}

interface ChangeInternship {
   type: 'INTERNSHIP'
   payload: any
}

interface ClearForm {
   type: 'CLEAR'
}

type FilterActions =
   | ChangeCourseEvaluation
   | ChangeActivityAssessment
   | ChangeCodeEvaluation
   | ChangeJobEvaluation
   | ChangeTypeOfWork
   | ChangetypeOfContract
   | ChangeMinSalary
   | ChangeExperience
   | ChangeInternship
   | ClearForm

export const filterReducer = (state: any, action: FilterActions) => {
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
      case 'SALARY': {
         return {
            ...state,
            salary: {
               ...state.salary,
               [action.payload.name]: action.payload.value,
            },
         }
      }
      case 'INTERNSHIP': {
         return {
            ...state,
            internship: {
               internship: action.payload.value,
            },
         }
      }
      case 'EXPERIENCE': {
         return {
            ...state,
            experience: {
               ...state.experience,
               month: action.payload.value,
            },
         }
      }

      case 'CLEAR': {
         return {
            ...state,
            courseEvaluation: [],
            activityAssessment: [],
            codeEvaluation: [],
            jobEvaluation: [],
            typeOfWork: [],
            typeOfContract: [],
            salary: { min: 0, max: 0 },
            experience: { month: 0 },
         }
      }

      default:
         return state
   }
}
