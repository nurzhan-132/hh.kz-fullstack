'use strict'

import { useState } from "react"

export default function ModalAddExp({close, addWorkingHistory}) {    
    const [start_date, setStartDate] = useState(new Date())
    const [end_date, setEndDate] = useState(new Date())
    const [company_name, setCompanyName] = useState('')
    const [company_description, setCompanyDescription] = useState('') 
    const [responsibilities, setResponsibilities] = useState('') 

    const onChageMonth = (e) => {
        let date = start_date;
        date.setMonth(e.target.value);
        setStartDate(date);
    }
    const onChangeYear = (e) => {
        let date = start_date;
        date.setFullYear(e.target.value);
        setStartDate(date);
    }

    const onChageMonthEnd = (e) => {
        let date = end_date;
        date.setMonth(e.target.value);
        setEndDate(date);
    }
    const onChangeYearEnd = (e) => {
        let date = end_date;
        date.setFullYear(e.target.value);
        setEndDate(date);
    }
    
    const onChangeCompanyName = (e) => {
        setCompanyName(e.target.value)
    }

    const onChangeCompanyDesc = (e) => {
        setCompanyDescription(e.target.value)
    }

    const onChangeResponsibilities = (e) => {
        setResponsibilities(e.target.value)
    }

    const save = () => {
        const workingHistory = {
            start_date,
            end_date,
            company_name,
            company_description,
            responsibilities
        }
        addWorkingHistory(workingHistory);
    }

    return(
        <div className="modal">
            <div className="modal-backdrop" onClick={close}></div>
            <div className="modal-inner">
                <h2>Опыт работы</h2>
                
                <h4>Начало работы</h4>
                <div className="selectdate selectdate-noday">
                    <select onChange={onChageMonth} placeholder="Месяц" className="input">
                        <option disabled>Выберите месяц</option>
                        <option value="0">Январь</option>
                        <option value="1">Февраль</option>
                        <option value="2">Март</option>
                        <option value="3">Апрель</option>
                        <option value="4">Май</option>
                        <option value="5">Июнь</option>
                        <option value="6">Июль</option>
                        <option value="7">Август</option>
                        <option value="8">Сентябрь</option>
                        <option value="9">Октябрь</option>
                        <option value="10">Ноябрь</option>
                        <option value="11">Декабрь</option>
                    </select>
                    <input type="text" placeholder="Год" onChange={onChangeYear} className="input"/>
                </div>  
                <h4>Конец работы</h4>     
                <div className="selectdate selectdate-noday">
                    <select onChange={onChageMonthEnd} placeholder="Месяц" className="input">
                        <option value="0">Январь</option>
                        <option value="1">Февраль</option>
                        <option value="2">Март</option>
                        <option value="3">Апрель</option>
                        <option value="4">Май</option>
                        <option value="5">Июнь</option>
                        <option value="6">Июль</option>
                        <option value="7">Август</option>
                        <option value="8">Сентябрь</option>
                        <option value="9">Октябрь</option>
                        <option value="10">Ноябрь</option>
                        <option value="11">Декабрь</option>
                    </select>
                    <input type="text" placeholder="Год" onChange={onChangeYearEnd} className="input"/>
                </div>    

                <h4>Организация</h4>       
                <input type="text" placeholder="Название компании" className="input" onChange={onChangeCompanyName} value={company_name}/>  

                <h4>Должность</h4>       
                <input type="text" placeholder="Должность" className="input" onChange={onChangeCompanyDesc} value={company_description}/>  

                <h4>Обязанности на рабочем месте</h4>
                <textarea className="textarea" placeholder="Опишите что вы делали на работе" onChange={onChangeResponsibilities}>{responsibilities}</textarea>
                <div className="modal-actions">
                    <button className="button button-primary-bordered" onClick={close}>Отменить</button>
                    <button className="button button-primary" onClick={save}>Сохранить</button>                
                </div>
            </div>

        </div>
    )
}