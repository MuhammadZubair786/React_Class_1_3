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

      case "update_status":
        console.log(action)
        let tododata =[]; //ARRAY
        // INDEX
        // 2
        // state.todos[I]["status"]=true
        // true,TRUE,FALSE
        //EDIT STATUS 
        for(let i=0;i<state.todos.length;i++){
          // console.log(state.todos[i])
          if(action.index==i){
            //CLICK
            state.todos[i]["status"]=true//2
            tododata.push(state.todos[i])

          }
          else{
            state.todos[i]["status"]=false
            tododata.push(  state.todos[i])//0,1,
          }
        }
        console.log(tododata)
        return {
          ...state,
          todos:tododata
        }

        case "update_todo":
          console.log(action)
          var updatetodo=[]
          for(var i=0;i<state.todos.length;i++){
            if(action.data["index"]==i){
             updatetodo.push(action.data)
            }
            else{
              updatetodo.push(state.todos[i])
            }

          }
         
          //set local storage
          localStorage.setItem("todos",  JSON.stringify(updatetodo))

          return {
            ...state,
            todos:updatetodo
          }

    default:
      return state;
  }
};
