import {createAction} from 'redux-actions'
import {
    path,
    nav_select
} from './myConst'

const actions = {}
actions[path] = createAction(path)
actions[nav_select] = createAction(nav_select)
export default actions