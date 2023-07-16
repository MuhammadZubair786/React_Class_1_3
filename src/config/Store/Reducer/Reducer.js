const initalState = {
  count: 20,
  user: [],
  category:[],
  todos : []
};


export default (state = initalState, action) => {

  switch (action.type) {
    case "Inc":
      return {
        ...state,
      count:state.count+1
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
      console.log(action.data)
        return{
          ...state,
          count: action.data["index"],
            user:[...state.user,action.data[""]]
        }

    case "addTodo":
      console.log(action.data)
      localStorage.setItem("todos",  JSON.stringify([...state.todos,action.data]))
      return {
        ...state,
        todos:[...state.todos,action.data]
      }

    case "localdata":
      var data = JSON.parse(localStorage.getItem("todos"))
      console.log(data)
      if(data==null){
        data=[]
      }
      return {
        ...state,
        todos:data
      }

    default:
      return state;
  }
};
