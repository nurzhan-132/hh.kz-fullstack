'use client'

import { useDispatch } from "react-redux"
import Link from 'next/link'
import { acceptApply, declineApply } from "@/app/store/slices/applySlice"
import { formatAge, formatNumber } from "@/utils/formatter"

export default function Apply({ item }) {
    const dispatch = useDispatch()
    return (
        <div className="card">
            <Link className="link" href={`/resumes/${item.resume.id}`}>{item.resume.position}</Link>
            <p>{item.resume.first_name} {item.resume.last_name}, {formatAge(item.resume.birthday)}</p>
            <h3>{formatNumber(item.resume.salary)} {item.resume.salary_type}</h3>
            <div className="flex">

                {item.status !== "INVITATION" && <button className="button button-tertiary mr5" onClick={() => dispatch(acceptApply(item.id))}>Пригласить</button>}
                {item.status !== "DECLINED" && <button className="button button-secondary" onClick={() => dispatch(declineApply(item.id))}>Отказать</button>}
            </div>
        </div>
    )
}