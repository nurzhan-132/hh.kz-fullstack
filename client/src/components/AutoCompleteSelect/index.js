'use strict'

import { useEffect } from "react"
import { useState } from "react"
import Input from "../input"

export default function AutoCompleteSelect({ label, placeholder, type, size, items, onSelect, selected }) {
    const [value, setValue] = useState({ name: "" })

    const [filteredItems, setFilteredItems] = useState([])

    const onClick = (item) => {
        onSelect(item)
        setValue(item)
        setFilteredItems([])
    }

    const reset = () => {
        setValue({ name: "" })
        onSelect(null)
    }

    const onChange = (e) => {
        if(e.target.value === "") {
            setFilteredItems([])
        } else {
            setFilteredItems([...items.filter(item => item.name.includes(e.target.value))]);
        }
    }

    useEffect(() => {
        items.map(item => {
            if(item.id === selected) setValue(item)
        })
    }, [selected, items])

    return (
        <div className={"autocomplete " + size}>
            <Input 
                type={type} 
                label={label} 
                onChange={onChange} 
                size={size} 
                placeholder={placeholder} 
            />
            {value.name !== "" && 
            <div className="tag">
                <span>{value.name}</span> <i onClick={reset}>X</i>
            </div>}

            {filteredItems.length>0 && 
            <div className="dropdown">
                {filteredItems.map((item, index) => (<a key={index} onClick={() => onClick(item)}>{item.name}</a>))}
            </div>}
        </div>
    )
}