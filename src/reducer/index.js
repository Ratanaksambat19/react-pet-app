import { combineReducers } from "redux"
import location from "./location.js"
import breed from './breed'
import animal from './animal'
import theme from './theme'

export default combineReducers({
    location,
    breed,
    animal, 
    theme,
})