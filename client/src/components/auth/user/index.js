'use client'
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { authorize, logOut, sendVerificationEmail, verifyCode } from "@/app/store/slices/authSlice";

export default function UserLogin() {
    const router = useRouter();
    const dispatch = useDispatch();
    const isAuth = useSelector(state => state.auth.isAuth)
    const [step, setStep] = useState(1)
    const [email, setEmail] = useState("")
    const [time, setTime] = useState(119)
    const [code, setCode] = useState("")

    const sendVerifyEmail = () => {
        dispatch(sendVerificationEmail(email))
        setStep(2)
    }

    const verifyCodeFunc = () => {
        dispatch(verifyCode(email, code))
    }

    useEffect(() => {
        let interval;
        if (step === 2) {
            interval = setInterval(() => {
                if (time !== 0) setTime(time => time - 1)
            }, 1000)
        } else if (interval) {
            clearInterval(interval)
        }
    }, [step])

    useEffect(() => {
        if (isAuth) router.push('/resumes')
    }, [isAuth])

    const min = parseInt(time / 60);
    const sec = time % 60;
    const formattedTime = `${min.toString().padStart(2, '0')}:${sec.toString().padStart(2, '0')}`;

    return (
        <section className="login-page">
            {step === 1 && <div className="card">
                <h1>Поиск работы</h1>
                <form action="">
                    <input className="input" type="text" placeholder="Электронная почта" value={email} onChange={(e) => setEmail(e.target.value)} />
                    <button className="button button-primary" onClick={sendVerifyEmail}>Продолжить</button>
                </form>
            </div>}

            {step === 1 && <div className="card">
                <h1>Поиск сотрудников</h1>
                <p>Размещение вакансий и доступ к базе резюме</p>
                <Link href="/employer/signin" className="button button-primary-bordered">Я ищу сотрудников</Link>
            </div>}

            {step === 2 && <div className="card">
                <h1>Отправили код на ....</h1>
                <p>Напишите его, чтобы подтвердить, что это вы, а не кто-то другой входит в личный кабинет</p>
                <form action="">
                    <input className="input" type="text" placeholder="Введите код" value={code} onChange={(e) => setCode(e.target.value)} />
                    <p>Повторить можно через {formattedTime}</p>
                    <button className="button button-primary" onClick={verifyCodeFunc} type="button">Подтвердить</button>
                    <button className="button button-primary-bordered" onClick={() => setStep(1)}>Назад</button>
                </form>
            </div>}
        </section>
    );
}