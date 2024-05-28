import { useEffect, useState } from "react"
import Step2 from "./Step2"
import { api } from "./App"
import { useNavigate, useParams } from "react-router-dom"

export const ChangePassword = ({ onChangePassword }: { onChangePassword: () => void }) => {
    const [data, setData] = useState({password: '', confirmPassword: ''})
    const { email } = useParams()
    const onSubmit = async () => {
	if(await api.changePassword(email, data.password))
	    onChangePassword()
    }
    return <>
		<Step2 data={data} updateData={(obj) => setData({ ...data, ...obj })} onSubmit={onSubmit} />
	</>
}
