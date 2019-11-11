import { ADD_TOPIC } from '../constants/actionTypes'

export const addTopic = (id, name) => ({   
    type: ADD_TOPIC,
    id,
    name    
});