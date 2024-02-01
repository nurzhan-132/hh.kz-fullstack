'use client'

import { useState } from "react"
import Link from "next/link"
import { getSearchedVacancies } from "@/app/store/slices/vacancySlice"
import { useDispatch, useSelector } from "react-redux"
import { useRouter } from "next/navigation"

export default function MainPage() {
    const dispatch = useDispatch()
    const router = useRouter()

    const currentUser = useSelector(state => state.auth.currentUser)

    const [q, setQ] = useState()

    const handleSearch = () => {
        dispatch(getSearchedVacancies({
            q
        }, router))        
    }
    return (
        <div className="main-page">
            <h1>Найди работу мечты</h1>
            <div className='main-page-search'>
                <fieldset className="fieldset-vertical search-field">
                    <input type="text" className="input" placeholder="Профессия, должность или компания" value={q} onChange={e => setQ(e.target.value)} />
                </fieldset>
                <button className='button button-primary' onClick={handleSearch}>Найти работу</button>
            </div>
            {!currentUser && <Link className="main-page-link" href="/employer/signin">Я ищу сотрудника</Link>}
        </div>
    )
}