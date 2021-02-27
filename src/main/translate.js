import { TRANSLATION } from './constants'

export const getTranslation = ({ value, translationSource = TRANSLATION, language = 'eng' }) => {
  return translationSource[language][value] || value
}
