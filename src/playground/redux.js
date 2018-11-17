console.log("This is redux example");
import {createStore} from 'redux'

const increment = ({by:b=1121}={}) => ({
    
    type:"increment",
    by:b
})

const countReducer = (state = {count : 0},action) => {
    switch(action.type){
        case "increment":
            return {
                count: state.count+action.by
            };
        case "decrement":
            return{
                count:state.count-20

            };
        default:

         return state;
    }
    
}

const store = createStore(countReducer)

console.log(store.getState())

store.subscribe(()=>{
    console.log(store.getState())
});
store.dispatch({
    type:"increment",
    by:10
})
store.dispatch({
    type:"decrement",
    by:10
})

store.dispatch(increment({by : 50}));
store.dispatch(increment());

console.log(store.getState())