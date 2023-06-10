//app start store
const state1 = {
  count: 0,
  user:"new@gmail.com",
  center:"smit"
};

export default (state = state1, action) => {
  switch (action.type) {

    case "inc":
      return { ...state, count: state.count + 1 };

      case "dec":
        return { ...state, count: state.count - 1 };
      
    default:
      return state;
  }
};
