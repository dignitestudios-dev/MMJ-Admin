import LOGO from '../../assets/MMJ_LOGO.svg';
import { useFormik } from "formik";
import {
    Form,
    NavLink,
    useLocation,
    useNavigation,
    useSubmit,
} from "react-router-dom";
import * as yup from "yup";
import { InputField } from "../input/InputField";


type ForgotPasswordFormData = {
    email: string;
};

const validationSchema = yup.object({
    email: yup
        .string()
        .email("Invalid email address")
        .required("Email is required"),
});

export default function ForgotPassForm() {
    const { state: forgottenPasswordEmail } = useLocation();
    const navigation = useNavigation();
    const submit = useSubmit();

    const formik = useFormik<ForgotPasswordFormData>({
        initialValues: {
            email: forgottenPasswordEmail,
        },
        validationSchema: validationSchema,
        onSubmit: async (values) => {
            submit(values, { method: "post" });
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
                        onSubmit={formik.handleSubmit}>
                        <InputField
                            id="email"
                            type="email"
                            label="Email"
                            name="email"
                            value={formik.values.email}
                            onChange={formik.handleChange}
                            readOnly
                            errormessage={formik.touched.email ? formik.errors.email : ""}
                        />

                        <div>
                            <button
                                type="submit"
                                className="flex w-full justify-center rounded-md bg-primaryGreen px-3 py-1.5 text-sm leading-6 text-primaryBlack shadow-sm hover:bg-secondaryBlue hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primaryGreen duration-150"
                            >
                                {navigation.state === "submitting"
                                    ? "sending email..."
                                    : "Forgot Password"}
                            </button>
                        </div>

                        <div className="w-full text-center">
                            <NavLink
                                to={"/login"}
                                replace
                                className="w-full text-xs text-center font-medium text-primaryDarkGray hover:underline"
                            >
                                Wrong email address back to Sign In?
                            </NavLink>
                        </div>
                    </Form>
                </div>
            </div>
        </>
    )
}
