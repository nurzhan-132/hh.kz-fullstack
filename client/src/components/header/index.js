'use client'

import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux"
import jwt_decode from "jwt-decode"
import { authorize, logOut } from "@/app/store/slices/authSlice";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function Header({page}) {
    const dispatch = useDispatch();
    const router = useRouter();
    const isAuth = useSelector(state => state.auth.isAuth)
    const currentUser = useSelector(state => state.auth.currentUser)

    useEffect(() => {
        const token = localStorage.getItem("token");

        if (token) {
            let decodedToken = jwt_decode(token)
            if (decodedToken.exp * 1000 >= Date.now()) {
                dispatch(authorize({ token }))
            } else {
                localStorage.removeItem("token")
            }
        }
    }, [])

    return (
        <header className={`header${page ? " header-transparent" : ""}`}>
            <div className="container">
                <div className="header-inner">
                    <div>
                        <Link href="/">
                            <img src="/images/hh-logo.svg" alt="HH.KZ" />
                        </Link>
                        {currentUser && currentUser.role && (
                            <Link href={currentUser.role.name === 'manager' ? '/vacancy' : '/resumes'}>
                                {currentUser.role.name === 'manager' ? 'Мои вакансии' : 'Мои резюме'}
                            </Link>
                        )}
                        {currentUser && currentUser.role && currentUser.role.name !== 'manager' && (
                            <Link href='/applies'>Отклики</Link>
                        )}
                        <a href="">Помощь</a>
                    </div>
                    <div>
                        <Link href="/search/vacancy/advanced" className="header-search">
                            <img src="/images/icon-search.svg" alt="" />
                            Поиск
                        </Link>
                        {currentUser && currentUser.role && (
                            <Link
                                href={currentUser.role.name === 'manager' ? '/create-vacancy' : '/create-resume'}
                                className="header-button header-button--green"
                            >
                                {currentUser.role.name === 'manager' ? 'Создать вакансию' : 'Создать резюме'}
                            </Link>
                        )}
                        {!isAuth &&
                            <Link href="/login" className="header-button">
                                Войти
                            </Link>}
                        {isAuth &&
                            <a className="header-button" onClick={() => dispatch(logOut(router))}>
                                Выйти
                            </a>
                        }
                    </div>
                </div>
            </div>
        </header>

    );
}