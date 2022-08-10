interface ElementsInterface {
   name: string
   value: string
}

interface ElementsButtonsInterface extends ElementsInterface {
   inputTitle: string
}

export const courseCompletion: ElementsInterface[] = [
   {
      name: 'courseCompletion',
      value: '1',
   },
   {
      name: 'courseCompletion',
      value: '2',
   },
   {
      name: 'courseCompletion',
      value: '3',
   },
   {
      name: 'courseCompletion',
      value: '4',
   },
   {
      name: 'courseCompletion',
      value: '5',
   },
]
export const courseEngagement: ElementsInterface[] = [
   {
      name: 'courseEngagement',
      value: '1',
   },
   {
      name: 'courseEngagement',
      value: '2',
   },
   {
      name: 'courseEngagement',
      value: '3',
   },
   {
      name: 'courseEngagement',
      value: '4',
   },
   {
      name: 'courseEngagement',
      value: '5',
   },
]
export const projectDegree: ElementsInterface[] = [
   {
      name: 'projectDegree',
      value: '1',
   },
   {
      name: 'projectDegree',
      value: '2',
   },
   {
      name: 'projectDegree',
      value: '3',
   },
   {
      name: 'projectDegree',
      value: '4',
   },
   {
      name: 'projectDegree',
      value: '5',
   },
]
export const teamProjectDegree: ElementsInterface[] = [
   {
      name: 'teamProjectDegree',
      value: '1',
   },
   {
      name: 'teamProjectDegree',
      value: '2',
   },
   {
      name: 'teamProjectDegree',
      value: '3',
   },
   {
      name: 'teamProjectDegree',
      value: '4',
   },
   {
      name: 'teamProjectDegree',
      value: '5',
   },
]
export const expectedTypeOfWork: ElementsButtonsInterface[] = [
   {
      name: 'expectedTypeOfWork',
      value: 'office',
      inputTitle: 'praca z biura',
   },
   {
      name: 'expectedTypeOfWork',
      value: 'remote',
      inputTitle: 'praca z domu',
   },
]
export const expectedContractType: ElementsButtonsInterface[] = [
   {
      name: 'expectedContractType',
      value: 'uop',
      inputTitle: 'umowa o prace',
   },
   {
      name: 'expectedContractType',
      value: 'b2b',
      inputTitle: 'b2b',
   },
   {
      name: 'expectedContractType',
      value: 'uz_uod',
      inputTitle: 'umowa o zlecenie/dzieło',
   },
   {
      name: 'expectedContractType',
      value: 'any',
      inputTitle: 'bez naczenia',
   },
]

export const initialState = {
   courseCompletion: [],
   courseEngagement: [],
   projectDegree: [],
   teamProjectDegree: [],
   expectedTypeOfWork: [],
   expectedContractType: [],
   expectedSalary: { min: 0, max: 0 },
   canTakeApprenticeship: {},
   monthsOfCommercialExp: { month: 0 },
}
