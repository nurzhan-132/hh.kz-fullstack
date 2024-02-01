'use strict'

import { useEffect, useState } from "react"


export default function AddEducation({onChange, education}) {

    const onChangeData = (e) => {
        let [index, name] = (e.target.name).split("-")
        index = index * 1
        let edu = [...education];
        edu[index][name] = e.target.value;
        onChange(edu)
    }

    const newEducation = () => {
        console.log(education);
        onChange([...education, {
            level: "Высшее",
            university_name: "",
            faculty: "",
            major: "",
            end_date: "",
        }])
    }

    const removeEducation = (ed) => {
        const edu = [...education];
        const index = education.indexOf(ed)
        edu.splice(index, 1)
        onChange(edu)
    }

    const educations = education.map((ed, index) => (
        <div className="education" key={index}>
                <span onClick={() => removeEducation(ed)}>X</span>
                <fieldset className={"fieldset fieldset-md"}>
                    <label>Уровень</label>
                    <select name={index+"-level"} value={ed.level} className="input" onChange={onChangeData}>
                        <option value={"Высшее"}>Высшее</option>
                        <option value={"Неполное высшее"}>Неполное высшее</option>
                    </select>
                </fieldset>
                <fieldset className={"fieldset fieldset-md"}>
                    <label>Название учебного заведения</label>
                    <input name={index+"-university_name"} value={ed.university_name} type="text" onChange={onChangeData} className="input"/>
                </fieldset>
                <fieldset className={"fieldset fieldset-md"}>
                    <label>Факультет</label>
                    <input name={index+"-faculty"} value={ed.faculty} type="text" onChange={onChangeData} className="input"/>
                </fieldset>
                <fieldset className={"fieldset fieldset-md"}>
                    <label>Специализация</label>
                    <input name={index+"-major"} value={ed.major} type="text" onChange={onChangeData} className="input"/>
                </fieldset>
                <fieldset className={"fieldset fieldset-md"}>
                    <label>Год окончания</label>
                    <input name={index+"-end_date"} value={ed.end_date} type="text" onChange={onChangeData} className="input"/>
                </fieldset>
            </div>
    ))

    return(
        <div className="educations">
            {educations}
            <a onClick={newEducation}>{education.length > 0 ? "Указать еще одно место обучения" : "Указать место обучения"}</a>
        </div>
    )
}