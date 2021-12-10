//Base component which is used to create multiple contexts like list of - blog posts, comments, likes, etc...
import React, {useReducer} from 'react';

//Reusable function to set up the Context and Provider.
export default (reducer, actions, initialState) => {

    const Context = React.createContext();

    const Provider = ({children}) => {
        const [state, dispatch] = useReducer(reducer, initialState);

        const boundActions = {};
        for (let key in actions) {
            boundActions[key] = actions[key](dispatch);
        }

        return <Context.Provider value={{ state, ...boundActions }}>
            {children}
        </Context.Provider>
    }

    return { Context, Provider };
};