let initialState = {
  information: [],
  connet: '',
};

function reducer(state = initialState, action) {
  const { type, paylode } = action;
  switch (type) {
    case "INFO":
      return {
        ...state,
        information: [
          ...state.information,
          { name: paylode.name, number: paylode.number },
        ],
      };
    case "SEARCH":
      return {...state, connet: paylode.searchinfo}
    default:
      return { ...state };
  }
}

export default reducer;
