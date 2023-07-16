const initalState = {
  count: 20,
  user: [],
  todos : []
};

// in nthis function add new user 

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

    case "Add_Todo1":
      console.log(action.data)
      localStorage.setItem("todos",JSON.stringify([...state.todos,action.data]))
      return {
        ...state,
        todos : [...state.todos,action.data]
        
      }

      //state

      case "get_localdata":
        return{
          ...state,
          todos : JSON.parse(localStorage.getItem("todos")) ==null ? [] :JSON.parse(localStorage.getItem("todos"))
        }

      case "update_status":
        // let data = state.todos
        // console.log(action.index)
        // data[action.index]["status"]=true//line
        // console.log(data)
        let data =[]
        for(var i=0;i<state.todos.length;i++){
          if(i==action.index){
            state.todos[i]["status"]=true
            data.push(state.todos[i])

          }
          else{
            state.todos[i]["status"]=false
            data.push(state.todos[i])
          }

        }
        return{
          ...state,
          todos:data
        }

        case "update_todo":
          console.log(action.data)
          let update_todo = []

          for(var i=0;i<state.todos.length;i++){
            if(i==action.data["index"]){
             state.todos[i]["name"]= action.data["name"]
             state.todos[i]["status"]= false

             update_todo.push(state.todos[i])
  
            }
            else{
             
              update_todo.push(state.todos[i])
            }
  
          }
          localStorage.setItem("todos",JSON.stringify(update_todo))
          return{
            ...state,
            todos:update_todo
          }





    default:
      return state;
  }
};
