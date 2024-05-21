import { Form, NavLink, useNavigation, useSubmit } from "react-router-dom";
import LOGO from '../../assets/MMJ_LOGO.svg';
import * as yup from "yup";
import { useFormik } from "formik";
import { InputField } from "../input/InputField";

type SignInFormData = {
    email: string;
    password: string;
};

const validationSchema = yup.object({
    email: yup
        .string()
        .email("Invalid email address")
        .required("Email is required"),
    password: yup.string().required("Password is required"),
    // .min(6, "Password must be 6 characters long or more"),
});

export default function LoginForm() {
    const navigation = useNavigation();
    const submit = useSubmit();

    const formik = useFormik<SignInFormData>({
        initialValues: {
            email: "",
            password: "",
        },
        validationSchema: validationSchema,
        onSubmit: async (values) => {
            submit(values, { method: "post", action: "/login" });
        },
    });
    return (
        <>
            <div className="flex h-screen flex-1 flex-col justify-center px-6 py-12 lg:px-8">
                <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                    <img
                        className="mx-auto h-24 w-auto"
                        src={LOGO}
                        alt="MyMedicalJourney"
                    />
                </div>

                <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                    <Form
                        className="space-y-6"
                        method="POST"
                        onSubmit={formik.handleSubmit}
                    >
                        <InputField
                            id="email"
                            type="email"
                            label="Email"
                            name="email"
                            value={formik.values.email}
                            onChange={formik.handleChange}
                            errormessage={formik.touched.email ? formik.errors.email : ""}
                        />
                        <InputField
                            id="password"
                            type="password"
                            label="password"
                            name="password"
                            value={formik.values.password}
                            onChange={formik.handleChange}
                            errormessage={formik.touched.password ? formik.errors.password : ""}
                        />

                        <div>
                            <button
                                type="submit"
                                className="flex w-full justify-center rounded-md bg-primaryGreen px-3 py-1.5 text-sm leading-6 text-primaryBlack shadow-sm hover:bg-secondaryBlue hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primaryGreen"
                            >
                                {navigation.state === "submitting" ? "Submitting" : "Sign In"}
                            </button>
                        </div>

                        <div className="text-center w-full">
                            <NavLink
                                to={formik.values.email ? "/forgot-password" : "#"}
                                state={formik.values.email}
                                className={`text-gray-400 font-jakartaPlus sm:text-[14px] text-[12px] text-right capitalize ${!formik.values.email ? "disabled-link cursor-not-allowed" : ""
                                    }`}
                                title="Enter email to enable"
                            >
                                Forgot password?
                            </NavLink>
                        </div>
                    </Form>
                </div>
            </div>
        </>
    )
}
