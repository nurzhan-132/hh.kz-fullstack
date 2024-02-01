'use client'

import axios from 'axios'
import { useEffect, useState } from 'react'
import Header from '@/components/header/index'
import Input from '@/components/input'
import AutoCompleteSelect from '@/components/AutoCompleteSelect'
import SelectDate from '@/components/SelectDate'
import ModalAddExp from '@/components/ModalAddExp'
import WorkingHistory from '@/components/WorkingHistory'
import AutoCompleteTags from '@/components/AutoCompleteTags'
import AddEducation from '@/components/AddEducation'
import AddLanguage from '@/components/AddLanguage'
import SelectEmploymentTypes from '@/components/SelectEmploymentTypes'
import { END_POINT } from '@/config/end-point'
import { useParams, useRouter } from 'next/navigation'
import { useDispatch, useSelector } from 'react-redux'
import { editResume, getResumeById } from '@/app/store/slices/resumeSlice'
import { getFullYear } from '@/utils/formatter'

export default function CreateResume() {
    const router = useRouter();
    const dispatch = useDispatch();

    const { id } = useParams()
    const resume = useSelector((state) => state.resume.resume)

    const [cities, setCities] = useState([])
    const [countries, setCountries] = useState([])
    const [allSkills, setAllSkills] = useState([])
    const [modalExpIsOpen, setModalExpIsOpen] = useState(false)
    const [workingHistories, setWorkingHistories] = useState([])
    const [allEmploymentTypes, setEmploymentTypes] = useState([])
    const [first_name, setFirstName] = useState("")
    const [last_name, setLastName] = useState("")
    const [phone, setPhone] = useState()
    const [cityId, setCityId] = useState()
    const [birthday, setBirthday] = useState()
    const [gender, setGender] = useState("")
    const [citizenship, setCitizenship] = useState()
    const [position, setPosition] = useState()
    const [salary, setSalary] = useState()
    const [salary_type, setSalaryType] = useState("KZT")
    const [about, setAbout] = useState("")
    const [skills, setSkills] = useState("")
    const [education, setEducation] = useState([])
    const [main_language, setMainLanguages] = useState("")
    const [foreignLanguages, setForeignLanguages] = useState([])
    const [employmentTypes, setSelectedEmpTypes] = useState([])

    useEffect(() => {
        dispatch(getResumeById(id))

        axios.get(`${END_POINT}/api/region/cities`).then(res => {
            setCities(res.data)
        })

        axios.get(`${END_POINT}/api/region/countries`).then(res => {
            setCountries(res.data)
        })

        axios.get(`${END_POINT}/api/skills`).then(res => {
            setAllSkills(res.data)
        })

        axios.get(`${END_POINT}/api/employment-types`).then(res => {
            setEmploymentTypes(res.data)
        })
    }, [])

    useEffect(() => {
        if (resume.id) {
            setCityId(resume.cityId)
            setSelectedEmpTypes(resume.employmentTypes.map(type => type.id))
            setFirstName(resume.first_name)
            setLastName(resume.last_name)
            setPhone(resume.phone)
            setGender(resume.gender)
            setCitizenship(resume.citizenship)
            setPosition(resume.position)
            setSalary(resume.salary)
            setSalaryType(resume.salary_type)
            setWorkingHistories(resume.workingHistories)
            setAbout(resume.about)
            setSkills(resume.skills)
            setMainLanguages(resume.main_language)
            setForeignLanguages(resume.foreignLanguages)
            setEducation(resume.education.map(ed => {
                return {
                    ...ed,
                    end_date: getFullYear(ed.end_date)
                }
            }))
        }
    }, [resume])

    const closeModalExp = () => {
        setModalExpIsOpen(false)
    }

    const addWorkingHistory = (item) => {
        setWorkingHistories([...workingHistories, item])
        closeModalExp()
    }

    const removeWorkingHistory = (workingHistory) => {
        let wh = [...workingHistories]
        let index = workingHistories.indexOf(workingHistory);
        wh.splice(index, 1);
        setWorkingHistories(wh)
    }

    const handleGenderChange = (e) => {
        setGender(e.target.value)
    }

    const onSkillsChange = (data) => {
        const skillNames = data.map(item => item.name).join(",")
        setSkills(skillNames)
    }

    const saveResume = () => {
        dispatch(editResume(
            {
                id: resume.id,
                employmentTypes,
                foreignLanguages,
                education,
                skills,
                workingHistories,
                about,
                salary,
                salary_type,
                first_name,
                last_name,
                phone,
                cityId,
                birthday,
                gender,
                citizenship,
                position,
                main_language
            }, router))
    }
    return (
        <main>
            <Header />
            <div className='container p7'>
                <h1>Ваше резюме</h1>

                <h3>Контактные данные</h3>
                <Input type="text" label="Имя" size="fieldset-md" onChange={(e) => setFirstName(e.target.value)} value={first_name} />
                <Input type="text" label="Фамилия" size="fieldset-md" onChange={(e) => setLastName(e.target.value)} value={last_name} />
                <Input type="text" label="Мобильный телефон" size="fieldset-md" onChange={(e) => setPhone(e.target.value)} value={phone} />
                <AutoCompleteSelect type="text" label="Город проживания" size="fieldset-md" items={cities} onSelect={(data) => setCityId(data.id)} selected={cityId} />

                <h3>Основная информация</h3>
                <SelectDate size="fieldset-sm" label="Дата рождения" onChange={(date) => setBirthday(date)} value={resume.birthday} />
                <fieldset className="fieldset fieldset-sm">
                    <label>Пол</label>
                    <div className='radio-group'>
                        <div className="radio" >
                            {resume.gender && resume.gender === "Мужской" && <input type="radio" name='gender' id="g1" onChange={handleGenderChange} value="Мужской" checked />}
                            {!resume.gender || resume.gender !== "Мужской" && <input type="radio" name='gender' id="g1" onChange={handleGenderChange} value="Мужской" />}
                            <label htmlFor="g1">Мужской</label>
                        </div>
                        <div className="radio" >
                            {resume.gender && resume.gender === "Женский" && <input type="radio" name='gender' id="g2" onChange={handleGenderChange} value="Женский" checked />}
                            {!resume.gender || resume.gender !== "Женский" && <input type="radio" name='gender' id="g2" onChange={handleGenderChange} value="Женский" />}
                            <label htmlFor="g2" >Женский</label>
                        </div>
                    </div>
                </fieldset>
                <AutoCompleteSelect type="text" label="Гражданство" size="fieldset-md" items={countries} onSelect={(data) => setCitizenship(data.id)} selected={citizenship} />

                <h3>Специальность</h3>
                <Input type="text" label="Желаемая должность" size="fieldset-lg" onChange={(e) => { setPosition(e.target.value) }} value={position} />
                <fieldset className="fieldset fieldset-lg">
                    <label>Зарплата</label>
                    <div className='salary'>
                        <input type="text" className='input' value={salary} onChange={(e) => setSalary(e.target.value * 1)} />
                        <select className='input' onChange={(e) => setSalaryType(e.target.value)} value={salary_type}>
                            <option value="KZT">KZT</option>
                            <option value="USD">USD</option>
                            <option value="RUB">RUB</option>
                        </select>
                        на руки
                    </div>
                </fieldset>

                <h3>Опыт работы</h3>
                {modalExpIsOpen && <ModalAddExp close={closeModalExp} addWorkingHistory={addWorkingHistory} />}
                <fieldset className="fieldset fieldset-lg">
                    <label>Место работы</label>
                    <div className='exp'>
                        {workingHistories.map(item => (<WorkingHistory key={item.id} workingHistory={item} remove={removeWorkingHistory} />))}
                        <button className='button button-primary-bordered' onClick={() => setModalExpIsOpen(true)}>Добавить место работы</button>
                    </div>
                </fieldset>
                <fieldset className="fieldset fieldset-lg">
                    <label>О себе</label>
                    <textarea className="textarea" placeholder='Расскажите о себе' value={about} onChange={(e) => setAbout(e.target.value)}></textarea>
                </fieldset>
                <AutoCompleteTags type="text" label="Ключевые навыки" size="fieldset-md" items={allSkills} onSelect={onSkillsChange} selected={skills.length > 0 ? skills.split(",").map(item => ({ name: item })) : []} />

                <h3>Образование</h3>
                <AddEducation onChange={(eds) => setEducation(eds)} education={education} />

                <h3>Владение языками</h3>
                <Input type="text" label="Родной язык" size="fieldset-md" value={main_language} onChange={(e) => setMainLanguages(e.target.value)} />
                <AddLanguage onChange={(lns) => setForeignLanguages(lns)} foreignLanguages={foreignLanguages} />

                <h3>Другая важная информация</h3>
                <SelectEmploymentTypes allEmploymentTypes={allEmploymentTypes} employmentTypes={employmentTypes} size="fieldset-md" label="Занятость" onChange={types => setSelectedEmpTypes(types)} />

                <button onClick={saveResume} className='button button-primary'>Сохранить изменения</button>
            </div>
        </main>
    )
}
