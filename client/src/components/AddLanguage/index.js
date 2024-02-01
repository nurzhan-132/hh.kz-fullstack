'use strict'

import { useEffect, useState } from "react"


export default function AddLanguage({onChange, foreignLanguages}) {
    const remove = (index) => {
        const updatedLanguages = foreignLanguages.filter((_, i) => i !== index);
        onChange(updatedLanguages);
    }

    const onSelect = (e) => {
        const [index, key] = e.target.name.split("-")
        const updatedLanguages = [...foreignLanguages]
        updatedLanguages[index][key] = e.target.value;
        onChange(updatedLanguages)
    }

    const langs = foreignLanguages.map((lang, index) => (
        <div className="languages fieldset-md selectdate selectdate-noday" key={index}>
            <span className="remove" onClick={() => remove(index)}>X</span>
            <select placeholder="Язык" className="input" value={foreignLanguages[index].name} onChange={onSelect} name={index+"-name"}>
                <option value="Казахский">Казахский</option>
                <option value="Английский">Английский</option>
                <option value="Русский">Русский</option>
            </select>
            <select placeholder="Уровень" className="input" value={foreignLanguages[index].level} onChange={onSelect} name={index+"-level"}>
                <option value="A1">А1 - Начальный</option>
                <option value="A2">А2 - Элементарный</option>
                <option value="B1">В1 - Средний</option>
                <option value="B2">В2 - Средне-продвинутый</option>
                <option value="C1">С1 - Продвинутый</option>
                <option value="C2">С2 - В совершенстве</option>
            </select>
        </div>
    ))

    return(
        <div className="educations">
            {langs}
            <a onClick={() => onChange([...foreignLanguages, {name: "", level: ""}])}>Добавить язык</a>
        </div>
    )
}