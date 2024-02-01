"use client"

import { useEffect, useState } from 'react';
import { useSearchParams, useRouter } from 'next/navigation'
import { useDispatch, useSelector } from 'react-redux';
import Header from '@/components/header/index'
import { getSearchedVacancies, getSpecializations, getCities, getExperiences, getEmpTypes } from "@/app/store/slices/vacancySlice"
import ModalSelectSpec from "@/components/ModalSelectSpec"
import AutoCompleteSelect from "@/components/AutoCompleteSelect"
import MyVacancies from '@/components/myvacancies';

export default function SearchVacancy() {
    const searchParams = useSearchParams()
    const dispatch = useDispatch();
    const router = useRouter();

    const cities = useSelector(state => state.vacancy.cities)
    const experiences = useSelector(state => state.vacancy.experiences)
    const empTypes = useSelector(state => state.vacancy.empTypes)

    const [q, setQ] = useState(searchParams.get("q"))
    const [specializationId, setSpecializationId] = useState(searchParams.get("specializationId"))
    const [cityId, setCityId] = useState(searchParams.get("cityId"))
    const [salary, setSalary] = useState(searchParams.get("salary"))
    const [salary_type, setSalaryType] = useState(searchParams.get("salary_type"))
    const [experienceId, setExperienceId] = useState(searchParams.get("experienceId"))
    const [employmentTypeId, setEmploymentTypeId] = useState(searchParams.get("employmentTypeId"))
    const [specializationName, setSpecializationName] = useState()
    const [isSpecModalOpen, setSpecModalOpen] = useState(false)

    const closeSpecModal = () => {
        setSpecModalOpen(false)
    }

    const handleSetSpec = (e) => {
        setSpecializationId(e.target.value * 1)
        setSpecializationName(e.target.dataset.name)
        closeSpecModal()
    }

    const handleExpChange = (e) => {
        setExperienceId(e.target.value)
    }

    const handleSearch = () => {
        dispatch(getSearchedVacancies({
            q,
            specializationId,
            cityId,
            salary,
            salary_type,
            experienceId,
            employmentTypeId
        }, router))        
    }

    useEffect(() => {
        handleSearch()
        dispatch(getSpecializations())
        dispatch(getCities())
        dispatch(getExperiences())
        dispatch(getEmpTypes())
    }, [])

    useEffect(handleSearch, [specializationId, cityId, salary, salary_type, experienceId, employmentTypeId])

    return (
        <main>
            <Header />
            <div className='container'>
                <div className='flex'>
                    <fieldset className="fieldset-vertical search-field">
                        <input type="text" className="input" placeholder="Название" value={q} onChange={e => setQ(e.target.value)} />
                    </fieldset>
                    <button className='button button-primary' onClick={handleSearch}>Найти</button>
                </div>

                <div className='search-vacancy-container'>
                    <div className='search-vacancy-left-bar'>
                        <fieldset className="fieldset-vertical">
                            <label htmlFor="">Специализация</label>
                            {specializationName && <p>{specializationName}</p>}
                            <p className="link" onClick={() => setSpecModalOpen(true)}>Указать специализацию</p>
                        </fieldset>
                        {isSpecModalOpen && <ModalSelectSpec close={closeSpecModal} onChange={handleSetSpec} value={specializationId} />}

                        <AutoCompleteSelect placeholder="Регион" type="text" label="Где искать сотрудника" size="fieldset-md fieldset-vertical" items={cities} onSelect={(data) => setCityId(data.id)} />

                        <fieldset className="fieldset-vertical fieldset-md">
                            <label htmlFor="">Предпологаемый уровень дохода в месяц</label>
                            <div className="input-group">
                                <input type="text" className="input" value={salary} onChange={e => setSalary(e.target.value)} />
                                <select className="input" name="salary_type" value={salary_type} onChange={(e) => setSalaryType(e.target.value)}>
                                    <option value="KZT">KZT</option>
                                    <option value="RUB">RUB</option>
                                    <option value="USD">USD</option>
                                </select>
                            </div>
                        </fieldset>

                        <fieldset className="fieldset-vertical fieldset-md">
                            <label htmlFor="">Требуемый опыт работы</label>
                            <div>
                                {experiences.map((exp, index) =>
                                    <div key={index} className="radio">
                                        <input name="exp" type="radio" className="input" value={exp.id} onChange={handleExpChange} />
                                        <label htmlFor="">{exp.duration}</label>
                                    </div>)}
                            </div>
                        </fieldset>

                        <fieldset className="fieldset-vertical fieldset-md">
                            <label htmlFor="">Тип занятости</label>
                            <div>
                                {empTypes.map(type =>
                                    <div key={type.id} className="radio">
                                        <input name="emp_type" type="radio" className="input" value={type.id} onChange={e => setEmploymentTypeId(e.target.value)} />
                                        <label htmlFor="">{type.name}</label>
                                    </div>)}
                            </div>
                        </fieldset>
                    </div>

                    <div className='search-vacancy-right-bar'>
                        <MyVacancies/>
                    </div>
                </div>

            </div>
        </main>
    )
}
