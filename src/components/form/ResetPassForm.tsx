import { InputField } from '../input/InputField'
import LOGO from '../../assets/MMJ_LOGO.svg';
import { useFormik } from "formik";
import {
    Form,
    useNavigation,
    useSubmit,
} from "react-router-dom";
import * as Yup from 'yup';

const validationSchema = Yup.object().shape({
    password: Yup.string()
        .min(6, 'Password must be at least 6 characters long')
        .required('Password is required'),
    confirm_password: Yup.string()
        .oneOf([Yup.ref('password')], 'Passwords must match')
        .required('Confirm Password is required')
        .min(6, 'Confirm Password must be at least 6 characters long'),
});

const initialValues = {
    password: '',
    confirm_password: '',
};

const ResetPassForm = () => {
    const navigation = useNavigation();
    const submit = useSubmit();
    const queryParams = new URLSearchParams(window.location.search);
    const email = queryParams.get('email');

    const formik = useFormik({
        initialValues,
        validationSchema: validationSchema,
        onSubmit: async (values) => {
            submit({ ...values, email }, { method: "post" });
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
                            id="password"
                            type="password"
                            label="Password"
                            name="password"
                            value={formik.values.password}
                            onChange={formik.handleChange}
                            errormessage={formik.touched.password ? formik.errors.password : ""}
                        />

                        <InputField
                            id="confirm_password"
                            type="password"
                            label="Confirm Password"
                            name="confirm_password"
                            value={formik.values.confirm_password}
                            onChange={formik.handleChange}
                            errormessage={formik.touched.confirm_password ? formik.errors.confirm_password : ""}
                        />

                        <div>
                            <button
                                type="submit"
                                className="flex w-full justify-center rounded-md bg-primaryGreen px-3 py-1.5 text-sm leading-6 text-primaryBlack shadow-sm hover:bg-secondaryBlue hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primaryGreen duration-150"
                            >
                                {navigation.state === "submitting"
                                    ? "resetting..."
                                    : "Reset Password"}
                            </button>
                        </div>
                    </Form>
                </div>
            </div>
        </>
    )
}

export default ResetPassForm