'use strict'

import { useEffect, useState } from "react"
import { useSelector } from "react-redux"
import SpecType from "./SpecType"

export default function ModalSelectSpec({close, onChange, value}) {   
    const [search, setSearch] = useState("")
    const [filteredSpecTypes, setFilteredSpecTypes] = useState([])
    const specializationTypes = useSelector(state => state.vacancy.specializations)

    const onSearch = (e) => {
        const searchValue = e.target.value;
        setSearch(searchValue);
    
        const filteredTypes = specializationTypes.filter(type => {
            return type.specializations.some(specialization => {
                return specialization.name.includes(searchValue);
            });
        });    
        setFilteredSpecTypes(filteredTypes);
    };
    

    useEffect(() => {
        setFilteredSpecTypes(specializationTypes)
    }, [specializationTypes])

    return(
        <div className="modal">
            <div className="modal-backdrop" onClick={close}></div>
            <div className="modal-inner">
                <h2>Кого вы хотите найти?</h2>                
                <input type="text" placeholder="Быстрый поиск" className="input" value={search} onChange={onSearch}/>
                { filteredSpecTypes.map((specType, index) =>  (<SpecType key={index} specType={specType} onChange={onChange} value={value}/>) ) }
            </div>
        </div>
    )
}