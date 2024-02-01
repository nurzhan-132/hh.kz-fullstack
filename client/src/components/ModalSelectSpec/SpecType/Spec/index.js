import { useState } from "react"

export default function Spec({spec, onChange, value}) {
    return(        
        <div className={`collapse-child`}>
            {value === spec.id && <input type="radio" name="spec" data-name={spec.name} value={spec.id} id={`${spec.id}`} onChange={onChange} checked/>}
            {value !== spec.id && <input type="radio" name="spec" data-name={spec.name} value={spec.id} id={`${spec.id}`} onChange={onChange} />}
            <label htmlFor={`${spec.id}`}>{spec.name}</label>
        </div>
    )
}