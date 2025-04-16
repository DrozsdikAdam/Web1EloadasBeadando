import { createContext, useState } from "react";

const AppContext = createContext();

function AppProvider(props){

    const [State, setState] = useState({
        cart: [],
        products:[]
    });

    return(
        <AppContext.Provider value={[State, setState]}>
            {props.children}
        </AppContext.Provider>
    )
}

export {AppProvider};
export default AppContext;