export default function manageBand(state = {
  bands: [],
}, action) {
  switch(action.type) {
    case "ADD_BAND":
      const band = { id: Math.random(), name: action.name }
      return {...state, bands: [...state.bands, band] }

    case "DELETE_BAND":
      console.log("payload below")
      console.log(action)
      const bands = state.bands.filter((band) => band.id !== action.id)
      console.log(bands)
      return { bands }
    default:
      return state
  
  }
};
