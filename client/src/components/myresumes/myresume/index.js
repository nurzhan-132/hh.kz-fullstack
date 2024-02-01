'use client'
import { useDispatch } from "react-redux";
import Link from "next/link";
import { deleteResume } from "@/app/store/slices/resumeSlice";

export default function MyResume({item}) {
    const dispatch = useDispatch()
    return(
        <div className="card mtb5">
            <div className="flex flex-jc-sb flex-ai-c">
                <Link href={`/resumes/${item.id}`} className="h3 link">{item.position}</Link>   
                <img className="delete-button" src="/images/trash-icon.svg" alt="Удалить резюме" onClick={() => dispatch(deleteResume(item.id))}/>
            </div>
            <p>{item.createdAt}</p>
            <h3>Статистика</h3>
            <div className="flex">
                <a href="">{0} показов</a>
                <a href="">{0} просмотров</a>
                <a href="">{0} приглашений</a>
            </div>
        </div>
    );
}