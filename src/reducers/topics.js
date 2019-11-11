import { ADD_TOPIC } from '../constants/actionTypes'

const initialState = [
  {
    id: 1,
    name: 'Shakhtar Donetsk'
  },
  {
    id: 2,
    name: 'Dynamo Kyiv'
  },
  {
    id: 3,
    name: 'Aleksandriya'
  }
];

//const countId = 3;

const topicsReducer = (state = initialState, action) => {
  switch(action.type) {
    case ADD_TOPIC:
      return [
        ...state, {
        id: action.id,
        name: action.name
        }
      ];
    default:
      return state;
  }
}

export default topicsReducer;