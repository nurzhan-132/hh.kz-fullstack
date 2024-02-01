'use client'

import Header from "@/components/header"
import ModalSelectSpec from "@/components/ModalSelectSpec"
import AutoCompleteSelect from "@/components/AutoCompleteSelect"
import { useState, useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { getSpecializations, getCities, getExperiences, getEmpTypes } from "@/app/store/slices/vacancySlice"
import { useRouter } from 'next/navigation';

export default function SearchVacancyAdvanced() {
    const dispatch = useDispatch();
    const router = useRouter();
    const [isSpecModalOpen, setSpecModalOpen] = useState(false)
    const [q, setQ] = useState()
    const [specializationId, setSpecializationId] = useState()
    const [specializationName, setSpecializationName] = useState()
    const [cityId, setCityId] = useState()
    const [salary, setSalary] = useState()
    const [salary_type, setSalaryType] = useState("KZT")
    const [experienceId, setExperienceId] = useState()
    const [employmentTypeId, setEmploymentTypeId] = useState()

    const cities = useSelector(state => state.vacancy.cities)
    const experiences = useSelector(state => state.vacancy.experiences)
    const empTypes = useSelector(state => state.vacancy.empTypes)

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

    useEffect(() => {
        dispatch(getSpecializations())
        dispatch(getCities())
        dispatch(getExperiences())
        dispatch(getEmpTypes())
    }, [])

    const handleSearch = () => {
        const queryParams = {
            q,
            cityId,
            specializationId,
            salary,
            salary_type,
            experienceId,
            employmentTypeId,
        };

        const queryString = Object.keys(queryParams)
            .filter((key) => (queryParams[key] !== undefined))
            .map((key) => `${key}=${queryParams[key]}`)
            .join('&');

        router.push(`/search/vacancy/?${queryString}`);
    };


    return (
        <main>
            <Header />
            <div className="container p7">
                <h1>Поиск вакансии</h1>

                <fieldset className="fieldset-vertical">
                    <label htmlFor="">Ключевые слова</label>
                    <input type="text" className="input" placeholder="Название" value={q} onChange={e => setQ(e.target.value)} />
                </fieldset>
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

                <button className='button button-primary' onClick={handleSearch}>Поиск</button>
            </div>
        </main>
    )
}