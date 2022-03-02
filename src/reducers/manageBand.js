export default function manageBand(state = {
  bands: [],
}, action) {
  switch(action.type) {
    case "ADD_BAND":
      const combined = Object.assign(state, { name: action.name} )
      console.log(combined)
      return {...state, bands: [...state.bands, combined] }
    default:
      return state
  
  }
};
