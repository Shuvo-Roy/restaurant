import COMMENTS from "../data/comments";
import DISHES from "../data/dishes";


const initalSate={
    dishes:DISHES,
    comments:COMMENTS
}

export const Reducer=(state=initalSate,action)=>{
    return state;
}