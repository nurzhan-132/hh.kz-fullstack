'use strict'

import { useState, useEffect } from "react"
import Input from "../input"

export default function AutoCompleteTags({ label, placeholder, type, size, items, onSelect, selected }) {
    const [value, setValue] = useState([])

    const [filteredItems, setFilteredItems] = useState([])

    const onClick = (item) => {
        setValue([...value, item])
    }

    const deleteTag = (tag) => {
        let v = [...value]
        let index = value.indexOf(tag)
        v.splice(index, 1)
        setValue(v)

        setFilteredItems([...filteredItems, tag])
    }

    const onChange = (e) => {
        if (e.target.value === "") {
            setFilteredItems([])
        } else {
            const filter = items.filter(item => item.name.includes(e.target.value))
            let fi = [];
            filter.map(item => {
                let exists = false;
                value.map(tag => {
                    if (tag.name === item.name) {
                        exists = true;
                    }
                })
                if (!exists) {
                    fi.push(item)
                }
            })
            setFilteredItems(fi)
        }
    }

    useEffect(() => {
        if(JSON.stringify(value) !== JSON.stringify(selected)) {
            setValue(selected)
        }
    }, [selected])

    useEffect(() => {
        let fi = [];
        filteredItems.map(item => {
            let exists = false;
            value.map(tag => {
                if (tag.name === item.name) {
                    exists = true;
                }
            })
            if (!exists) {
                fi.push(item)
            }
        })
        setFilteredItems(fi);
        onSelect(value)
    }, [value])

    return (
        <div className="fieldset-lg">
            <div className={"autocomplete " + size}>
                <div className="tags">
                    {value.length > 0 &&
                        value.map((tag, index) => (
                            <div className="tag" key={index}>
                                <span>{tag.name}</span>
                                <i onClick={() => deleteTag(tag)}>X</i>
                            </div>
                        ))
                    }
                </div>

                <Input
                    type={type}
                    label={label}
                    onChange={onChange}
                    size={size}
                    placeholder={placeholder}
                />

                {filteredItems.length > 0 &&
                    <div className="dropdown dropdown-tags">
                        <h4>Рекомендуемые навыки</h4>
                        {filteredItems.map((item, index) => (<a key={index} onClick={() => onClick(item)}>{item.name}</a>))}
                    </div>}
            </div>
        </div>

    )
}