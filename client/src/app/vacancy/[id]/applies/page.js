'use client'

import Link from 'next/link'
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';
import { getVacancyApplies } from '@/app/store/slices/applySlice';
import Header from '@/components/header'
import PreLoader from '@/components/PreLoader';
import Applies from '@/components/VacancyApplies';
import ProtectedRoute from '@/components/ProtectedRoute';

export default function VacancyApplies() {
    const dispatch = useDispatch()
    const { id } = useParams()

    const applies = useSelector(state => state.apply.applies)

    const [loading, setLoading] = useState(false)
    const [status, setStatus] = useState("NEW")

    const filteredApplies = applies.filter(apply => apply.status === status)

    useEffect(() => {
        dispatch(getVacancyApplies(id))
    }, [])

    return (
        <ProtectedRoute>
            <main>
                <Header />
                <div className='container'>
                    <div className='flex flex-ai-c flex-jc-sb pb7'>
                        <h1>Отклики {applies.length}</h1>
                    </div>
                    <div className='flex flex-jc-sb'>
                        <div className='list'>
                            <div className={`list-item${status === "NEW" ? " active" : ""}`} onClick={() => setStatus("NEW")}>Все неразобранные</div>
                            <div className={`list-item${status === "INVITATION" ? " active" : ""}`} onClick={() => setStatus("INVITATION")}>Приглашенные</div>
                            <div className={`list-item${status === "DECLINED" ? " active" : ""}`} onClick={() => setStatus("DECLINED")}>Отказы</div>
                        </div>
                        <Applies applies={filteredApplies} />
                    </div>

                </div>
            </main>
        </ProtectedRoute>
    )
}