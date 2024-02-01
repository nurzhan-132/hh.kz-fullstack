'use client'
import { useDispatch, useSelector } from "react-redux";
import Link from "next/link";
import { dateFormatterFullDateAndTime } from "@/utils/formatter";
import { deleteApply } from "@/app/store/slices/applySlice";

export default function MyApply({ item }) {
    const dispatch = useDispatch()

    const currentUser = useSelector(state => state.currentUser)

    return (
        <div className="row flex">
            <div className="col">
                {item.status}
            </div>
            <div className="col">
                {item.vacancy.name}
                <div className="link mt2" onClick={() => dispatch(deleteApply(item.id))}>Удалить</div>
            </div>
            <div className="col">
                {dateFormatterFullDateAndTime(item.updatedAt)}
            </div>
        </div>
    );
}