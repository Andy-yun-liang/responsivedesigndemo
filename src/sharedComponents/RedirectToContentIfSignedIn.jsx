import { useNavigate } from "react-router-dom";
import { useEffect, useContext } from "react";
import SessionContext from "Contexts/SessionContext";

const RedirectToContentIfSignedIn = (props) => {
    const {username} = useContext(SessionContext);
    const navigate = useNavigate();

    useEffect(()=> {
        if (username !== null){
            navigate("/content-management-system")
        }
    },[username])

    return props.children;
};

export default RedirectToContentIfSignedIn;