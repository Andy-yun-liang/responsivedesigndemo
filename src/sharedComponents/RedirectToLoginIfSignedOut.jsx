import { useNavigate } from "react-router-dom";
import { useEffect, useContext } from "react";
import SessionContext from "Contexts/SessionContext";

const RedirectToLoginIfSignedOut = (props) => {
    const {username} = useContext(SessionContext);
    const navigate = useNavigate();

    useEffect(()=> {
        if (username === null){
            navigate("/admin-portal")
        }
    },[username])

    return props.children;
};

export default RedirectToLoginIfSignedOut;