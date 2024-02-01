'use client'
import { useDispatch, useSelector } from "react-redux";
import Link from "next/link";
import { deleteVacancy } from "@/app/store/slices/vacancySlice";
import { formatNumber, dateFormatterDayMonthYear } from "@/utils/formatter";

export default function MyVacancy({ item }) {
    const dispatch = useDispatch()

    const currentUser = useSelector(state => state.currentUser)

    return (
        <div className="card mtb5">
            <div className="flex flex-jc-sb flex-ai-c">
                <Link href={`/vacancy/${item.id}`} className="h3 link">{item.name}</Link>
                {currentUser && item.userId === currentUser.id && <img className="delete-button" src="/images/trash-icon.svg" alt="Удалить вакансию" onClick={() => dispatch(deleteVacancy(item.id))} />}
            </div>
            <p>от {formatNumber(item.salary_from)} до {formatNumber(item.salary_to)} {item.salary_type}</p>
            <p>{dateFormatterDayMonthYear(item.createdAt)}</p>
        </div>
    );
}