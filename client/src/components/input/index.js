'use strict'

export default function Input({label, placeholder, type, size, onChange, value}) {
    return(
        <fieldset className={"fieldset " + size}>
            <label>{ label }</label>
            <input type={type} placeholder={placeholder} onChange={onChange} className="input" value={value}/>
        </fieldset>
    )
}