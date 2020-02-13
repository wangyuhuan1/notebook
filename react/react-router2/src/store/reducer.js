const defaultState = {
    msg: "react",
    list: []
}
//reducer是函数，用来改变state
const reducer = (state = defaultState, action) => {
    console.log(action)
    if (action.type == "change_input_value") {
        let newState = { ...state };
        newState.msg = action.value;
        return newState
    } else {
        if (action.type === "add_todo_item") {
            let newState = { ...state };
            newState.list.push(newState.msg)
            return newState
        }else{
            if(action.type==="delete_todo_item"){
                let newState={...state};
                newState.list.splice(action.value,1)
                return newState
            }
        }
    }
    return state;
}
export default reducer;