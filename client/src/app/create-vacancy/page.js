'use client'

import Header from "@/components/header"
import ModalSelectSpec from "@/components/ModalSelectSpec"
import AutoCompleteSelect from "@/components/AutoCompleteSelect"
import AutoCompleteTags from '@/components/AutoCompleteTags';
import { useState, useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { getSpecializations, getCities, getExperiences, getSkills, getEmpTypes, createVacancy } from "@/app/store/slices/vacancySlice"
import { useRouter } from 'next/navigation';
import dynamic from "next/dynamic";

export default function CreateVacancy() {
    const dispatch = useDispatch();
    const router = useRouter();
    const [name, setName] = useState("")
    const [isSpecModalOpen, setSpecModalOpen] = useState(false)
    const [specializationId, setSpecializationId] = useState()
    const [specializationName, setSpecializationName] = useState()
    const [cityId, setCityId] = useState()
    const [salary_from, setSalaryFrom] = useState("")
    const [salary_to, setSalaryTo] = useState("")
    const [salary_type, setSalaryType] = useState("KZT")
    const [address, setAddress] = useState("")
    const [experienceId, setExperienceId] = useState()
    const [description, setDescription] = useState("<h3>Обязанности:</h3><ul><li></li><li></li></ul><h3>Требования:</h3><ul><li></li><li></li></ul><h3>Условия:</h3><ul><li></li><li></li></ul>")
    const [skills, setSkills] = useState([])
    const [employmentTypeId, setEmploymentTypeId] = useState()

    const cities = useSelector(state => state.vacancy.cities)
    const experiences = useSelector(state => state.vacancy.experiences)
    const allSkills = useSelector(state => state.vacancy.skills)
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

    const onSkillsChange = (data) => {
        const skillNames = data.map(item => item.name).join(",")
        setSkills(skillNames)
    }

    useEffect(() => {
        dispatch(getSpecializations())
        dispatch(getCities())
        dispatch(getExperiences())
        dispatch(getSkills())
        dispatch(getEmpTypes())
    }, [])

    const saveVacancy = () => {
        dispatch(createVacancy(
            {
                name,
                specializationId: `${specializationId}`,
                cityId: `${cityId}`,
                description,
                employmentTypeId,
                salary_from,
                salary_to,
                salary_type,
                address,
                experienceId,
                skills,
                about_company: ""
            }, router))
    }

    const Editor = dynamic(() => import('./editor'), { ssr: false })

    return (
        <main>
            <Header />
            <div className="container p7">
                <h1>Создание вакансии</h1>

                <h2>Основная информация</h2>
                <fieldset className="fieldset-vertical">
                    <label htmlFor="">Название вакансии</label>
                    <input type="text" className="input" placeholder="Название" value={name} onChange={e => setName(e.target.value)} />
                </fieldset>
                <fieldset className="fieldset-vertical">
                    <label htmlFor="">Укажите специализацию</label>
                    {specializationName && <p>{specializationName}</p>}
                    <p className="link" onClick={() => setSpecModalOpen(true)}>Указать специализацию</p>
                </fieldset>
                {isSpecModalOpen && <ModalSelectSpec close={closeSpecModal} onChange={handleSetSpec} value={specializationId} />}

                <AutoCompleteSelect placeholder="Укажите город для размещения" type="text" label="Где искать сотрудника" size="fieldset-md fieldset-vertical" items={cities} onSelect={(data) => setCityId(data.id)} />

                <fieldset className="fieldset-vertical fieldset-md">
                    <label htmlFor="">Предпологаемый уровень дохода в месяц</label>
                    <div className="input-group">
                        <input type="text" className="input" placeholder="От" value={salary_from} onChange={e => setSalaryFrom(e.target.value)} />
                        <input type="text" className="input" placeholder="До" value={salary_to} onChange={e => setSalaryTo(e.target.value)} />
                        <select className="input" name="salary_type" value={salary_type} onChange={(e) => setSalaryType(e.target.value)}>
                            <option value="KZT">KZT</option>
                            <option value="RUB">RUB</option>
                            <option value="USD">USD</option>
                        </select>
                    </div>
                </fieldset>

                <fieldset className="fieldset-vertical fieldset-md">
                    <label htmlFor="">Адрес</label>
                    <input type="text" className="input" placeholder="Введите адрес" value={address} onChange={e => setAddress(e.target.value)} />
                </fieldset>

                <fieldset className="fieldset-vertical fieldset-md">
                    <label htmlFor="">Опыт работы</label>
                    <div>
                        {experiences.map((exp, index) =>
                            <div key={index} className="radio">
                                <input name="exp" type="radio" className="input" value={exp.id} onChange={handleExpChange} />
                                <label htmlFor="">{exp.duration}</label>
                            </div>)}
                    </div>
                </fieldset>

                <fieldset className='fieldset-vertical fieldset-md'>
                    <label htmlFor="">Расскажите про вакансию</label>
                    <Editor description={description} setDescription={setDescription} />
                </fieldset>

                <AutoCompleteTags type="text" label="Ключевые навыки" size="fieldset-md fieldset-vertical" items={allSkills} onSelect={onSkillsChange} selected={skills.length > 0 ? skills.split(",").map(item => ({ name: item })) : []} />

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

                <button className='button button-primary' onClick={saveVacancy}>Создать</button>
            </div>
        </main>
    )
}