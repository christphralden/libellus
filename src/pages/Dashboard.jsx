import { useEffect, useState } from "react";
import ContentSlider from "../components/sliders/ContentSlider";

export default function Dashboard(){
    const [isEnrolled, setIsEnrolled] = useState();

    useEffect(()=>{
        const enrolled = JSON.parse(localStorage.getItem('LIBELLUS_ENROLLED'))
        setIsEnrolled(enrolled)
    },[])
    if(!isEnrolled || isEnrolled.length === 0){
        return(<div>LOADING...</div>)
    }
    else{
        return(
            <div className="w-full h-full p-20">
                <ContentSlider title="Python 101" courses={isEnrolled} category="python"></ContentSlider>
            </div>
        );
    }
    
}