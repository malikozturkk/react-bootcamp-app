import { memo, useState } from "react";
import { useAuth, useSite } from "../context";

const Header = () => {
    console.log('header rendered')
    const { theme, setTheme, language, setLanguage } = useSite()
    const { user, setUser } = useAuth()

    const loginHandle = () => {
        setUser({
            username: 'malikozturkk',
            email: 'malikozturk975@gmail.com'
        })
    }

    const logoutHandle = () => {
        setUser(false)
    }

    return (
        <header>
            Mevcut Tema = {theme}
            <button onClick={() => setTheme(theme => theme === 'light' ? 'dark' : 'light')}>Temayı Değiştir</button> <br />
            Site Dili = {language}
            <button onClick={() => setLanguage(lang => lang === 'tr' ? 'en' : 'tr')}>Dili Değiştir</button> <br />
            <hr />
            {!user && <button onClick={loginHandle}>Giriş Yap</button> || user && <button onClick={logoutHandle}>Çıkış Yap</button>}<br />
            {user && (
                <pre>{JSON.stringify(user, null, 2)}</pre>
            )}
            
        </header>
    )
}


export default memo(Header)