import { object, string } from 'yup';

const SearchValidation = object({
    search:string()
})
export {SearchValidation}