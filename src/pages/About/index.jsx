
import { useEffect } from "react";


const About = () => {

    const fetchData = async() =>{
        const response = await fetch("http://127.0.0.1:8000/accounts")
        const result = await response.json();
        console.log(result)
    };

    useEffect(()=>{
        fetchData();
    },[])


    return <div>
        i am the about page
    </div>

};

export default About;