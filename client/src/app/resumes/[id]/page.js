"use client"

import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getMyResumes, getResumeById } from '@/app/store/slices/resumeSlice';
import Header from '@/components/header';
import MyResumes from '@/components/myresumes'
import Link from 'next/link';
import { useParams } from 'next/navigation';
import { dateFormatterMonthYear, formatAgeAndGender, formatPhoneNumber, formatNumber, calculateYearMonthDifference, getFullYear } from '@/utils/formatter'
import PreLoader from '@/components/PreLoader';

export default function ResumePage() {
  const dispatch = useDispatch()
  const { id } = useParams()
  const resume = useSelector((state) => state.resume.resume)
  const currentUser = useSelector(state => state.auth.currentUser)


  const didMount = () => {
    dispatch(getResumeById(id))
  }
  useEffect(didMount, [])

  const hasResumeData = resume && Object.keys(resume).length > 0;
  return (
    <main>
      <Header />
      {hasResumeData &&
        <div className='container resume-page'>
          <div className='flex flex-ai-c flex-jc-sb ptb-7'>
            <Link className='link' href="/resumes">К списку резюме</Link>
            {currentUser && currentUser.id === resume.userId && <Link className='button button-secondary-bordered' href={`/edit-resume/${resume.id}`}>Редактировать</Link>}
          </div>
          <h1>{resume.first_name} {resume.last_name}</h1>
          <p>{resume.gender}, {formatAgeAndGender(resume.birthday, resume.gender)} </p>
          <p className='secondary'>Контакты</p>
          <p>{formatPhoneNumber(resume.phone)}</p>
          <p>{resume.email}</p>
          <p>Место проживания: {resume.city.name}</p>

          <div className='mt7 flex flex-ai-c flex-jc-sb'>
            <h2>{resume.position}</h2>
            <h2>{formatNumber(resume.salary)} {resume.salary_type} на руки</h2>
          </div>
          <h4 className='emp-type'>Занятость: <span>{resume.employmentTypes.map((type, index) => type.name + " ")}</span></h4>
          <h3>Опыт работы</h3>
          {resume.workingHistories && resume.workingHistories.map((job, index) => {
            return (
              <div className='experience' key={job.id}>
                <div className='experience-date'>
                  <p>{dateFormatterMonthYear(job.start_date)} - {dateFormatterMonthYear(job.end_date)}</p>
                  <p className='experience-date-duration'>{calculateYearMonthDifference(job.start_date, job.end_date)}</p>
                </div>
                <div className='experience-info'>
                  <h4>{job.company_name}</h4>
                  <h4>{job.company_description}</h4>
                  <p>{job.responsibilities}</p>
                </div>
              </div>

            )
          })}

          <h3>Ключевые навыки</h3>
          <div className='skills'>
            {(resume.skills && resume.skills.length > 0) &&
              resume.skills.split(',').map((item, index) => (
                <p key={index} className="skills-tag">{item}</p>
              ))
            }
          </div>

          <h3>Обо мне</h3>
          <p>{resume.about}</p>

          <h3>Высшее образование</h3>
          {resume.education && resume.education.map((ed, index) => {
            return (
              <div className='experience' key={index}>
                <div className='experience-date'>
                  <p>{getFullYear(ed.end_date)}</p>
                </div>
                <div className='experience-info'>
                  <h4>{ed.university_name}</h4>
                  <p className='education-faculty'>{ed.faculty}, {ed.major}</p>
                </div>
              </div>

            )
          })}

          <h3>Знание языков</h3>
          <div>
            <p className='langs-tag'>{resume.main_language} — Родной</p>
            {(resume.foreignLanguages && resume.foreignLanguages.length > 0) &&
              resume.foreignLanguages.map((lang, index) => (
                <p key={index} className='langs-tag'>{lang.name} — {lang.level}</p>
              ))
            }
          </div>

          <h3>Гражданство</h3>
          <p>{resume.citizenshipObj.name}</p>
        </div>}

      {!hasResumeData && <PreLoader />}
    </main>
  )
}
