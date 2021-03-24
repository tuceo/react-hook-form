import * as Yup from "yup";

export const loginSchema = Yup.object().shape({
    phoneNumber: Yup.string().required("required").matches(/[0]*\([0]*([0-9]{3}|0{1}((x|[0-9]){2}[0-9]{2}))\)\s*[0-9]{3,4}[- ][0-9]{2}\s*[0-9]{2}/, {
        message: "Must start with zero and contains 11 digits.",
    }),

    password: Yup.string().required("required").matches( /^(?=.*\d)(?=.*[a-zA-Z]).{6,20}$/, {
        message: "Must between 6 and 20 characters and contains a number and a letter.",
    }),
});

export const maskPhoneNumber = (phone) => {
    const x = phone.replace(/\D/g, "").match(/(\d?)(\d{0,3})(\d{0,3})(\d{0,2})(\d{0,2})/);
    return !x[3] ? x[1] + x[2] : `${x[1]}(${x[2]}) ${x[3]}${x[4] ? ` ${x[4]}` : ""}${x[5] ? ` ${x[5]}` : ""}`;
};
