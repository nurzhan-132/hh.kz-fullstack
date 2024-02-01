'use strict'

import { useState, useEffect } from "react";

export default function SelectEmploymentTypes({allEmploymentTypes, employmentTypes, label, size, onChange}) {
    // const [eTypes, setETypes] = useState([])

    const onSelect = (e) => {
        const types = [...employmentTypes]
        const value = e.target.value * 1; 

        if(e.target.checked) {
            onChange([...types, value])
        } else {
            onChange(types.filter((type) => type !== value))
        }
    }
    
    // useEffect(() => {
    //     onChange(eTypes)
    // }, [eTypes])

    return(
        <fieldset className={"fieldset " + size}>
            <label>{ label }</label>
            <div>
                {allEmploymentTypes.map((type, index) => (
                    <div className="checkbox" key={index}>
                        {employmentTypes.includes(type.id) && <input onChange={onSelect} type="checkbox" name="employmentTypes" value={type.id} id={type.id + "-type"} checked/>}
                        {!employmentTypes.includes(type.id) && <input onChange={onSelect} type="checkbox" name="employmentTypes" value={type.id} id={type.id + "-type"} />}
                        <label htmlFor={type.id + "-type"}>{type.name}</label>
                    </div>
                ))}
            </div>
        </fieldset>
    )
}