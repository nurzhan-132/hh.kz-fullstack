'use client'

import Header from '@/components/header'
import MyApplies from '@/components/MyApplies';
import { getEmployeeApplies } from "@/app/store/slices/applySlice";
import { useDispatch } from "react-redux";
import { useEffect } from 'react';

export default function Applies() {
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getEmployeeApplies())
    }, [])

    return (
        <main>
            <Header />            
            <div className='container'>
                <div className='flex flex-ai-c flex-jc-sb pb7'>
                    <h1>Отклики и приглашения</h1>
                </div>
                <MyApplies/>
            </div>
        </main>
    )
}
