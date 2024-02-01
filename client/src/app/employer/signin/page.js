'use client'

import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Link from 'next/link'
import { setError, signin } from '@/app/store/slices/authSlice'
import { useEffect } from 'react'
import { useRouter } from 'next/navigation'

export default function EmployerSignIn() {
    const router = useRouter()
    const dispatch = useDispatch()
    const error = useSelector(state => state.auth.error)

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState("")

    const handleSignin = () => {
        dispatch(signin({
            email,
            password
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
                    <div className="signup-card">
                        <h1>Вход для поиска сотрудников</h1>
                        <form action="">
                            <input className="input" type="text" placeholder="Электронная почта" value={email} onChange={(e) => setEmail(e.target.value)} />
                            <input className="input" type="password" placeholder="Введите пароль" value={password} onChange={(e) => setPassword(e.target.value)} />
                            <button type="button" className="button button-primary" onClick={handleSignin}>Войти</button>
                            <div className='signup-navigate'>
                                <p>Еще не зарегистрированы?</p>
                                <Link className="link" href="/employer/signup">Перейти к регистрации</Link>
                            </div>
                        </form>
                        {error && Object.keys(error).map((key, index) => (<p key={index} className='error'>{error[key]}</p>))}
                    </div>
                </div>
                <div className='signup-authority'>© 2023 Группа компаний HeadHunter</div>
            </div>
        </main>
    )
}
