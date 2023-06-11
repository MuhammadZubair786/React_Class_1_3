const initalState = {
  count: 20,
  user: [],
};

export default (state = initalState, action) => {
  switch (action.type) {
    case "Inc":
      return {
        ...state,
        count: state.count + 1,
      };
    case "dec":
      return {
        ...state,
        count: state.count - 1,
      };

      case "Reset":
        return {
          ...state,
          count: 0,
        };
      //add user action
      //chg
    case "AddUser":
        return{
            ...state,
            user:[...state.user,action.data]
        }

    default:
      return state;
  }
};
