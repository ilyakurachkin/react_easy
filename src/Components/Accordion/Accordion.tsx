import React from "react";

type AccordionPropsType = {
    titleValue: string
    collapsed: boolean
}

export const Accordion = (props: AccordionPropsType) => {
    console.log("Accordion")

    if (props.collapsed === true) {
        return  <div>
            <AccordionTitle title={props.titleValue}/>
            <AccordionBody/>
        </div>
    } else {
        return (
            <div>
                <AccordionTitle title={props.titleValue}/>

            </div>
        );
    }
}

type AccordionTitlePropsType = {
    title: string
}

export const AccordionTitle = (props: AccordionTitlePropsType) => {
    console.log("AccordionTitle rendering")
    return (
        <div>
            <h2>{props.title}</h2>
        </div>
    );
}

export const AccordionBody = () => {
    console.log("AccordionBody rendering")
    return (
        <div>
            <ul>
                <li>1</li>
                <li>2</li>
                <li>3</li>
            </ul>
        </div>
    );
}