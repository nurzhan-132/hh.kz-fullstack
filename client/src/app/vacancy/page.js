'use client'

import Link from 'next/link'
import Header from '@/components/header'
import MyVacancies from '@/components/myvacancies'
import { getMyVacancies } from "@/app/store/slices/vacancySlice";
import { useDispatch } from "react-redux";
import { useEffect } from 'react';

export default function Vacancy() {
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getMyVacancies())
    }, [])

    return (
        <main>
            <Header />
            <div className='container'>
                <div className='flex flex-ai-c flex-jc-sb pb7'>
                    <h1>Мои вакансии</h1>
                    <Link className='button button-secondary-bordered' href='create-vacancy'>Создать вакансию</Link>
                </div>
                <MyVacancies />
            </div>
        </main>
    )
}
