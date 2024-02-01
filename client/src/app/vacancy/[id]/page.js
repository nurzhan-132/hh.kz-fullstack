"use client"

import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getVacancyById } from '@/app/store/slices/vacancySlice';
import Header from '@/components/header';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import { dateFormatterMonthYear, formatAgeAndGender, formatPhoneNumber, formatNumber, calculateYearMonthDifference, getFullYear } from '@/utils/formatter'
import PreLoader from '@/components/PreLoader';
import { getMyResumes } from '@/app/store/slices/resumeSlice';
import { createApply, getEmployeeApplies, getVacancyApplies } from '@/app/store/slices/applySlice';

export default function VacancyPage() {
    const dispatch = useDispatch()
    const { id } = useParams()
    const vacancy = useSelector((state) => state.vacancy.vacancy)
    const currentUser = useSelector((state) => state.auth.currentUser)
    const myResumes = useSelector((state) => state.resume.resumes)
    const applies = useSelector((state) => state.apply.applies)

    const [resumeId, setResumeId] = useState()

    console.log(applies);

    let isApplied = applies.some(apply => apply.vacancyId == id)

    const handleApply = () => {
        dispatch(createApply({
            resumeId,
            vacancyId: id
        }))
    }

    useEffect(() => {
        if (myResumes[0]) {
            setResumeId(myResumes[0].id)
        }
    }, [myResumes])

    const didMount = () => {
        dispatch(getVacancyById(id))
    }

    useEffect(() => {
        if (currentUser && currentUser.role.name === 'employee') {
            dispatch(getMyResumes())
            dispatch(getEmployeeApplies())
        } else if (currentUser) {
            dispatch(getVacancyApplies(id))
        }
    }, [currentUser])
    useEffect(didMount, [])

    const hasVacancyData = vacancy && Object.keys(vacancy).length > 0;
    return (
        <main>
            <Header />
            {hasVacancyData &&
                <div className='container resume-page'>

                    <div className='card'>
                        {currentUser && currentUser.id === vacancy.userId && <Link href={`/vacancy/${id}/applies`} className='link'>{applies.length} Соискателей</Link>}
                        <div className='flex flex-ai-c flex-jc-sb ptb-7'>
                            <h1>{vacancy.name}</h1>
                            {currentUser && currentUser.id === vacancy.userId && <Link className='button button-secondary-bordered' href={`/edit-vacancy/${vacancy.id}`}>Редактировать</Link>}
                        </div>
                        <p>от {formatNumber(vacancy.salary_from)} до {formatNumber(vacancy.salary_to)} {vacancy.salary_type}</p>
                        {vacancy.experience && <p>Требуемый опыт работы: {vacancy.experience.duration}</p>}
                        {vacancy.employmentType && <p>Тип занятости: {vacancy.employmentType.name}</p>}
                        {currentUser && currentUser.role.name === 'employee' && (
                            <select className='input mtb4 apply' value={resumeId} onChange={(e) => setResumeId(e.target.value)}>
                                {myResumes.map(item => (<option key={item.id} value={item.id}>{item.position}</option>))}
                            </select>
                        )}
                        {currentUser && currentUser.id !== vacancy.userId && !isApplied && <button className='button button-tertiary' onClick={handleApply}>Откликнуться</button>}
                        {currentUser && currentUser.id !== vacancy.userId && isApplied && <Link className='button button-tertiary applies-button' href="/applies">Смотреть отклик</Link>}
                    </div>

                    <h3>{vacancy.company.name}</h3>
                    <p className='secondary'>{vacancy.company.description}</p>

                    <div dangerouslySetInnerHTML={{ __html: vacancy.description }}></div>

                    <h3>Адрес</h3>
                    <p className='secondary'>{vacancy.address}</p>

                    <h3>Ключевые навыки</h3>
                    <div className='skills'>
                        {(vacancy.skills && vacancy.skills.length > 0) &&
                            vacancy.skills.split(',').map((item, index) => (
                                <p key={index} className="skills-tag">{item}</p>
                            ))
                        }
                    </div>
                </div>}
            {!hasVacancyData && <PreLoader />}
        </main>
    )
}