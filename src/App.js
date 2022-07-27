import { useState, useEffect } from "react";
import { SiteContext, AuthContext } from "./context"
import TodoApp from "./TodoApp";
import classNames from "classnames";
import { Routes, Route, Link, NavLink, useRoutes } from "react-router-dom"
import routes from "./routes";
import { getPath } from "./utils";
import CustomLink from "./components/Customlink";
function App() {
  return (
    <SiteContext>
      <AuthContext>
        <nav className="h-10 bg-black flex items-center gap-x-4 justify-center">
          <CustomLink to="index" className={({ isActive }) => classNames({
            "text-sm text-white border-b-2": true,
            "border-transparent": !isActive,
            "border-red-500": isActive,
          })}>Anasayfa</CustomLink>
          <CustomLink to="contact" className={({ isActive }) => classNames({
            "text-sm text-white border-b-2": true,
            "border-transparent": !isActive,
            "border-red-500": isActive,
          })}>İletişim</CustomLink>
          <CustomLink to="blog" className={({ isActive }) => classNames({
            "text-sm text-white border-b-2": true,
            "border-transparent": !isActive,
            "border-red-500": isActive,
          })}>Blog</CustomLink>
          <CustomLink to="todo" className={({ isActive }) => classNames({
            "text-sm text-white border-b-2": true,
            "border-transparent": !isActive,
            "border-red-500": isActive,
          })}>Todo App</CustomLink>
        </nav>
        {useRoutes(routes)}
      </AuthContext>
    </SiteContext>
  )
  

/* 3 tane checkbox koyduk ve tümünü seçme / butonu disabled etme gibi özelliklerle kullandık.
  const [rules, setRules] = useState([
    { id: 1, label: 'kural 1 kabul ediyorum', checked: false },
    { id: 2, label: 'kural 2 kabul ediyorum', checked: false },
    { id: 3, label: 'kural 3 kabul ediyorum', checked: false },
  ])
  

  const changeHandle = e => {
    setRules(rules => rules.map(rule => {
      if(Number(e.target.value) === rule.id) {
        rule.checked = e.target.checked
      }
      return rule
    }))
  }

  const disabled = rules.every(rule => rule.checked)

  const toggleCheck = () => {
    setRules(rules => rules.map(rule => ({
      ...rule,
      checked: !rule.checked
    })))
  }

  return (
    <div className="App">
      {rules.map(rule => (
        <div key={rule.id}>
          <label>
          <input type='checkbox' checked={rule.checked} value={rule.id} onChange={changeHandle} />
          {rule.label}
        </label>
      </div>
      ))}
      <button disabled={!disabled}>Devam Et</button>
      <button onClick={toggleCheck}>{disabled ? 'Hiçbirini Seçme' : 'Tümünü Seç'}</button>
      <hr />
      <pre>{JSON.stringify(rules, null, 2)}</pre>
    </div>
  );
*/
/* Sadece resim yükleyip bunu sayfada gösterdik.
  const [name, setName] = useState()
  const [image, setImage] = useState()
  
  const changeHandle = e => {
    if (e.target.files[0]) {
      setName(e.target.files[0].name)
      const fileReader = new FileReader()
      fileReader.addEventListener('load', function() {
        setImage(this.result)
      })
      fileReader.readAsDataURL(e.target.files[0])
    } else {
      setName('')
      setImage('')
    }
  }

  return (
    <div className="App">
      <input type='file' accept="image/*" onChange={changeHandle} />
      {name && image && (
        <div>
          <h3>{name}</h3>
          <img src={image} />
        </div>
      )}
    </div>
  );
*/
}

export default App;
