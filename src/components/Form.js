import React, {useState} from 'react';
import {yupResolver} from "@hookform/resolvers/yup";
import {useForm} from "react-hook-form";
import {loginSchema, maskPhoneNumber} from "../utils";
import './form.css'

const Form = () => {
    const [showPassword, setShowPassword] = useState(false);

    const {register, handleSubmit, errors, setValue} = useForm({
        resolver: yupResolver(loginSchema),
    });

    const handleLogin = (values) => {
        console.log("handleLogin", values)
    };

    return (
        <form autoComplete="off" onSubmit={handleSubmit(handleLogin)}>
            <input
                className="form-input"
                type="text"
                name="phoneNumber"
                ref={register}
                onChange={(e) => setValue("phoneNumber", maskPhoneNumber(e.target.value))}
            />
            {errors.phoneNumber && <div>{errors.phoneNumber.message}</div>}

            <input
                className="form-input"
                type={showPassword ? "text" : "password"}
                name="password"
                ref={register}
                autoComplete="new-password"
            />
            <i
                onClick={() => setShowPassword(!showPassword)}
            />
            {errors.password && <div>{errors.password.message}</div>}

            <button type="submit" className="form-button">
                Login
            </button>
        </form>
    );
};

export default Form;
