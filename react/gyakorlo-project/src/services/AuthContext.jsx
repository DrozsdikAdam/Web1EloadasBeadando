import { createContext, useState } from "react";

const AuthContext = createContext();

function AuthProvider(props) {
    const [isloggedin, setisloggedin] = useState(false);
    return (
        <AuthContext.Provider value={[isloggedin, setisloggedin]}>
            {props.children}
        </AuthContext.Provider>
    )
}
export { AuthProvider };
export default AuthContext;