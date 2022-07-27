import { Helmet } from "react-helmet"
import { Formik, Field, Form } from "formik"
import Input from "../components/form/Input"
import Textarea from "../components/form/Textarea"
import Select from "../components/form/Select"
import Checkbox from "../components/form/Checkbox"
import Radio from "../components/form/Radio"
import File from "../components/form/File"

export default function Home() {
    return (
        <>
            <Helmet>
                <title>Home Page</title>
            </Helmet>
            <h1>Home Page</h1>
        </>
        
    )
}