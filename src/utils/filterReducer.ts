interface ChangeCourseEvaluation {
   type: 'COURSECOMPLETION_UPDATE'
   payload: any
}

interface ChangeActivityAssessment {
   type: 'COURSEENGAGEMENT_UPDATE'
   payload: any
}

interface ChangeCodeEvaluation {
   type: 'PROJECTDEGREE_UPDATE'
   payload: any
}

interface ChangeJobEvaluation {
   type: 'TEAMPROJECTDEGREE_UPDATE'
   payload: any
}

interface ChangeTypeOfWork {
   type: 'EXPECTEDTYPEOFWORK_UPDATE'
   payload: any
}

interface ChangetypeOfContract {
   type: 'EXPECTEDCONTRACTTYPE_UPDATE'
   payload: any
}

interface ChangeMinSalary {
   type: 'EXPECTEDSALARY'
   payload: any
}

interface ChangeExperience {
   type: 'MONTHSOFCOMMERCIALEXP'
   payload: any
}

interface ChangeInternship {
   type: 'CANTAKEAPPRENTICESHIP'
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
      case 'COURSECOMPLETION_UPDATE': {
         if (action.payload.checked) {
            return {
               ...state,
               courseCompletion: [
                  ...state.courseCompletion,
                  ...action.payload.value,
               ],
            }
         } else {
            return {
               ...state,
               courseCompletion: state.courseCompletion.filter(
                  (e: any) => e !== action.payload.value
               ),
            }
         }
      }
      case 'COURSEENGAGEMENT_UPDATE': {
         if (action.payload.checked) {
            return {
               ...state,
               courseEngagement: [
                  ...state.courseEngagement,
                  ...action.payload.value,
               ],
            }
         } else {
            return {
               ...state,
               courseEngagement: state.courseEngagement.filter(
                  (e: any) => e !== action.payload.value
               ),
            }
         }
      }
      case 'PROJECTDEGREE_UPDATE': {
         if (action.payload.checked) {
            return {
               ...state,
               projectDegree: [...state.projectDegree, ...action.payload.value],
            }
         } else {
            return {
               ...state,
               projectDegree: state.projectDegree.filter(
                  (e: any) => e !== action.payload.value
               ),
            }
         }
      }
      case 'TEAMPROJECTDEGREE_UPDATE': {
         if (action.payload.checked) {
            return {
               ...state,
               teamProjectDegree: [
                  ...state.teamProjectDegree,
                  ...action.payload.value,
               ],
            }
         } else {
            return {
               ...state,
               teamProjectDegree: state.teamProjectDegree.filter(
                  (e: any) => e !== action.payload.value
               ),
            }
         }
      }
      case 'EXPECTEDTYPEOFWORK_UPDATE': {
         if (action.payload.checked) {
            return {
               ...state,
               expectedTypeOfWork: [
                  ...state.expectedTypeOfWork,
                  action.payload.value,
               ],
            }
         } else {
            return {
               ...state,
               expectedTypeOfWork: state.expectedTypeOfWork.filter(
                  (e: any) => e !== action.payload.value
               ),
            }
         }
      }
      case 'EXPECTEDCONTRACTTYPE_UPDATE': {
         if (action.payload.checked) {
            return {
               ...state,
               expectedContractType: [
                  ...state.expectedContractType,
                  action.payload.value,
               ],
            }
         } else {
            return {
               ...state,
               expectedContractType: state.expectedContractType.filter(
                  (e: any) => e !== action.payload.value
               ),
            }
         }
      }
      case 'EXPECTEDSALARY': {
         return {
            ...state,
            expectedSalary: {
               ...state.expectedSalary,
               [action.payload.name]: action.payload.value,
            },
         }
      }
      case 'CANTAKEAPPRENTICESHIP': {
         return {
            ...state,
            canTakeApprenticeship: {
               canTakeApprenticeship: action.payload.value,
            },
         }
      }
      case 'MONTHSOFCOMMERCIALEXP': {
         return {
            ...state,
            monthsOfCommercialExp: {
               ...state.monthsOfCommercialExp,
               month: Number(action.payload.value),
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
            expectedTypeOfWork: [],
            expectedContractType: [],
            expectedSalary: { min: 0, max: 0 },
            monthsOfCommercialExp: { month: 0 },
         }
      }

      default:
         return state
   }
}
