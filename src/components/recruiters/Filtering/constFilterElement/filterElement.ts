interface ElementsInterface {
   name: string
   value: string
}

interface ElementsButtonsInterface extends ElementsInterface {
   inputTitle: string
}

export const courseEvaluation: ElementsInterface[] = [
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
export const activityAssessment: ElementsInterface[] = [
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
export const codeEvaluation: ElementsInterface[] = [
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
export const jobEvaluation: ElementsInterface[] = [
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
export const typeOfWork: ElementsButtonsInterface[] = [
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
export const typeOfContract: ElementsButtonsInterface[] = [
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
