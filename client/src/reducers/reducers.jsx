let defaultState = {
  phones: []
}

const reducers = (state = defaultState, action) => {

  switch (action.type) {
    case "ALL":
      return {
        ...state,
        phones: action.payload
      }
    default: return state
  }
}

export default reducers