'use client'

import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Link from 'next/link'
import { setError, signup } from '@/app/store/slices/authSlice'
import { useEffect } from 'react'
import { useRouter } from 'next/navigation'

export default function EmployerSignup() {
    const router = useRouter()
    const dispatch = useDispatch()
    const error = useSelector(state => state.auth.error)

    const [email, setEmail] = useState('')
    const [first_name, setFirstName] = useState('')
    const [last_name, setLastName] = useState('')
    const [company_name, setCompanyName] = useState('')
    const [company_description, setCompanyDescription] = useState('')
    const [company_address, setCompanyAddress] = useState('')
    const [company_logo, setCompanyLogo] = useState()
    const [password, setPassword] = useState("")
    const [password2, setRePassword] = useState("")

    const [password2Touched, setPassword2Touched] = useState(false);
    const [step, setStep] = useState(1)

    const onLogoChange = (e) => {
        console.log(e.target.files[0]);
        setCompanyLogo(e.target.files[0])
    }

    const handleSignup = () => {
        dispatch(signup({
            email,
            full_name: `${first_name} ${last_name}`,
            company_name,
            company_description,
            company_address,
            company_logo,
            password,
            password2
        }, router))
    }

    useEffect(() => {
        return () => {
            dispatch(setError(null))
        }
    }, [])

    return (
        <main className='bg'>
            <div className='signup-page'>
                <Link href='/'>
                    <img src="/images/hh-logo.svg" alt="logo" />
                </Link>
                <div className="login-page">
                    {step === 1 && <div className="signup-card">
                        <h1>Регистрация для поиска сотрудников</h1>
                        <p>В завершении на почту придёт пароль</p>
                        <form action="">
                            <input className="input" type="text" placeholder="Электронная почта" value={email} onChange={(e) => setEmail(e.target.value)} />
                            <button className="button button-primary" onClick={() => setStep(2)}>Продолжить</button>
                        </form>
                        <div className='signup-navigate'>
                                <p>Уже зарегистрированы?</p>
                                <Link className="link" href="/employer/signin">Войти</Link>
                            </div>
                        <p className='signup-agreement'>Продолжая регистрацию на сайте любыми доступными способами, вы подтверждаете, что ознакомлены и полностью согласны с условиями использования сайта.</p>
                        {error && Object.keys(error).map((key, index) => (<p key={index} className='error'>{error[key]}</p>))}
                    </div>}

                    {step === 2 && <div className="signup-card">
                        <h1>Как вас зовут?</h1>
                        <form action="">
                            <input className="input" type="text" placeholder="Имя" value={first_name} onChange={(e) => setFirstName(e.target.value)} />
                            <input className="input" type="text" placeholder="Фамилия" value={last_name} onChange={(e) => setLastName(e.target.value)} />
                            <button className="button button-primary" type="button" onClick={() => setStep(3)}>Продолжить</button>
                            <button className="button button-primary-bordered" onClick={() => setStep(1)}>Назад</button>
                        </form>
                        {error && Object.keys(error).map((key, index) => (<p key={index} className='error'>{error[key]}</p>))}
                    </div>}

                    {step === 3 && <div className="signup-card">
                        <h1>Введите название компании</h1>
                        <form action="">
                            <input className="input" type="text" placeholder="Название компании" value={company_name} onChange={(e) => setCompanyName(e.target.value)} />
                            <textarea className="textarea" type="text" placeholder="Описание" value={company_description} onChange={(e) => setCompanyDescription(e.target.value)}></textarea>
                            <input className="input" type="text" placeholder="Адрес" value={company_address} onChange={(e) => setCompanyAddress(e.target.value)} />
                            <input className="input" type="file" placeholder="Логотип" onChange={onLogoChange} />
                            <button className="button button-primary" type="button" onClick={() => setStep(4)}>Продолжить</button>
                            <button className="button button-primary-bordered" onClick={() => setStep(2)}>Назад</button>
                        </form>
                        {error && Object.keys(error).map((key, index) => (<p key={index} className='error'>{error[key]}</p>))}
                    </div>}
                    {step === 4 && <div className="signup-card">
                        <h1>Введите пароль</h1>
                        <form action="">
                            <input className="input" type="password" placeholder="Введите пароль" value={password} onChange={(e) => setPassword(e.target.value)} />
                            <input className="input" type="password" placeholder="Повторите пароль" value={password2} onChange={(e) => setRePassword(e.target.value)} />
                            <button className="button button-primary" type="button" onClick={handleSignup}>Регистрировать</button>
                            <button className="button button-primary-bordered" onClick={() => setStep(3)}>Назад</button>
                        </form>
                        {error && Object.keys(error).map((key, index) => (<p key={index} className='error'>{error[key]}</p>))}
                    </div>}
                </div>
                <div className='signup-authority'>© 2023 Группа компаний HeadHunter</div>
            </div>
        </main>
    )
}
