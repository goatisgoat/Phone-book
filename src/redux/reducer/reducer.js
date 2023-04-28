let initialState = {
  information: [],
  count: 0,
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

    case "COUNT":
      return { ...state, count: state.count + 1 };
    default:
      return { ...state };
  }
}

export default reducer;
