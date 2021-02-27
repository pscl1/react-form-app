export const IDENTIFIER = {
  COMPANY: 'company',
  PRIVATE: 'private',
  COMPANY_OR_PRIVATE: 'COMPANY_OR_PRIVATE',
  NEXT: 'NEXT',
  CONFIRM: 'CONFIRM',
  CANCEL: 'CANCEL',
  USTID: 'USTID',
  FIRST_NAME: 'FIRST_NAME',
  LAST_NAME: 'LAST_NAME',
  EMAIL: 'EMAIL',
  COUNTRY: 'COUNTRY',
  SUMMARY: 'SUMMARY'
}

export const TRANSLATION = {
  de: {
    [IDENTIFIER.FIRST_NAME]:'Vorname',
    [IDENTIFIER.LAST_NAME]: 'Nachname',
    [IDENTIFIER.EMAIL]: 'E-Mail Adresse',
    [IDENTIFIER.USTID]: 'USt-IdNr.',
    [IDENTIFIER.COUNTRY]: 'Land',
    [IDENTIFIER.COMPANY_OR_PRIVATE]: 'Sind Sie eine Privatperson oder handelt es sich um eine Firma?',
    [IDENTIFIER.COMPANY]: 'Firma',
    [IDENTIFIER.PRIVATE]: 'Privatperson',
    [IDENTIFIER.NEXT]: 'Weiter',
    [IDENTIFIER.CONFIRM]: 'Bestätigen',
    [IDENTIFIER.CANCEL]: 'Abbrechen',
    [IDENTIFIER.SUMMARY]: 'Zusammenfassung',
    'germany': 'Deutschland',
    'netherlands': 'Niederlande',
    'england': 'England',
    'poland': 'Polen',
    'austria': 'Österreich',
    'unitedStates': 'USA'
  },
  eng: {
    [IDENTIFIER.FIRST_NAME]:'Firstname',
    [IDENTIFIER.LAST_NAME]: 'Lastname',
    [IDENTIFIER.EMAIL]: 'Mail',
    [IDENTIFIER.USTID]: 'USt-IdNr.',
    [IDENTIFIER.COUNTRY]: 'Country',
    [IDENTIFIER.COMPANY_OR_PRIVATE]: 'Are you a private person or a company?',
    [IDENTIFIER.COMPANY]: 'Company',
    [IDENTIFIER.PRIVATE]: 'Private',
    [IDENTIFIER.NEXT]: 'Next',
    [IDENTIFIER.CONFIRM]: 'Confirm',
    [IDENTIFIER.CANCEL]: 'Cancel',
    [IDENTIFIER.SUMMARY]: 'Summary',
    'germany': 'Germany',
    'netherlands': 'Netherlands',
    'england': 'England',
    'poland': 'Poland',
    'austria': 'Austria',
    'unitedStates': 'USA'
  }
}
