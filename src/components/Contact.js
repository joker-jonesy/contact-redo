import React from "react";
function Contact(props){

    const [contacted, setContacted]=React.useState(false);

    const returnClass = ()=>{
        return contacted ? "contacted":"not-contacted"
    }

    return(
        <div>
            <h1>{props.data.name}</h1>
            <p>{props.data.adr}</p>
            <div className={"contact "+returnClass()}>
                {contacted ? "Has Been Contacted!": "Needs to be contacted!"}
            </div>
        </div>
    )
}

export default Contact;