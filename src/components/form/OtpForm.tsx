import { useState } from 'react';
import OTPInput from '../input/OtpInput'
import { Form, useNavigation, useSubmit } from 'react-router-dom'
import LOGO from '../../assets/MMJ_LOGO.svg';
import { useFormik } from 'formik';
import * as Yup from 'yup';

const validationSchema = Yup.object().shape({
    otp: Yup.string()
        .length(4, 'OTP must be exactly 4 digits')
        .matches(/^\d{4}$/, 'OTP must contain only digits'),
});

const OtpForm = () => {
    const navigation = useNavigation();

    const submit = useSubmit();
    const queryParams = new URLSearchParams(window.location.search);
    const email = queryParams.get('email');
    
    const [otp, setOtp] = useState(['', '', '', '']);
    
    const formik = useFormik({
        initialValues: {
            email,
            OTP: 0
        },
        validationSchema,
        onSubmit: async (values) => {
            values.OTP = +otp.join().split(',').join('');

            // Submit the FormData
            submit(values, { method: "POST"});
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
                    <Form className="space-y-6" onSubmit={formik.handleSubmit}>
                        <div>
                            <OTPInput
                                otp={otp}
                                setOtp={setOtp}
                            />
                        </div>

                        <div>
                            <p className='text-sm text-gray-400 text-center'>Enter the verification code sent to your email</p>
                        </div>

                        <div>
                            <button
                                type="submit"
                                className="flex w-full justify-center rounded-md bg-primaryGreen px-3 py-1.5 text-sm leading-6 text-primaryBlack shadow-sm hover:bg-secondaryBlue hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primaryGreen duration-150"
                            >
                                {navigation.state === "submitting"
                                    ? "verifying..."
                                    : "Verify"}
                            </button>
                        </div>

                    </Form>
                </div>
            </div>
        </>
    )
}

export default OtpForm