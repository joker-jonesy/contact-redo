import React from "react";
function Contact(props){

    const [contacted, setContacted]=React.useState(false)

    return(
        <div>
            <h1>{props.data.name}</h1>
            <p>{props.data.adr}</p>
            <div className={contacted ? "contacted":"not-contacted"}>
                {contacted ? "Has Been Contacted!": "Needs to be contacted!"}
            </div>
        </div>
    )
}

export default Contact;