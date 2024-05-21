import { useFormik } from "formik";
import { Form, useNavigation, useSubmit } from "react-router-dom"
import * as Yup from 'yup';
import { InputField } from "../input/InputField";
import { TextAreaField } from "../input/TextArea";

const validationSchema = Yup.object().shape({
    title: Yup.string().required('Title is required').min(1, 'Title cannot be empty'),
    message: Yup.string().required('Message is required').max(200, 'Message cannot exceed 200 characters'),
    notification_type: Yup.string().oneOf(['is_app_updated_noti_allowed']).required('Notification type is required'),
});

const initialValues = {
    title: '',
    message: '',
    notification_type: 'is_app_updated_noti_allowed'
}

const NotificationForm = () => {
    const navigation = useNavigation();
    const submit = useSubmit();

    const formik = useFormik({
        initialValues,
        validationSchema,
        onSubmit: async (values, { resetForm }) => {
            // Submit the FormData
            submit(values, { method: "POST", action: '/notifications' });

            resetForm();
        },
    });

    return (
        <div className="p-10 max-sm:p-5 space-y-10">
            <section>
                <h1 className="text-3xl font-medium">Notification</h1>
                <p className="text-md text-gray-600">Send App Updates and News to users</p>
            </section>

            <section className="max-w-2xl">
                <Form onSubmit={formik.handleSubmit} method="POST" className="space-y-5">
                    <InputField
                        id="title"
                        type="text"
                        label="Title"
                        name="title"
                        value={formik.values.title}
                        onChange={formik.handleChange}
                        errormessage={formik.touched.title ? formik.errors.title : ""}
                    />
                    <TextAreaField
                        id="message"
                        type="text"
                        label="message"
                        name="message"
                        value={formik.values.message}
                        onChange={formik.handleChange}
                        errormessage={formik.touched.message ? formik.errors.message : ""}
                    />
                    <div>
                        <button
                            type="submit"
                            className="flex justify-center rounded-md bg-primaryGreen px-3 py-3 text-md leading-6 text-primaryBlack shadow-sm hover:bg-secondaryBlue hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primaryGreen duration-150 w-36"
                        >
                            {navigation.state === "submitting"
                                ? "Sending..."
                                : "Send"}
                        </button>
                    </div>
                </Form>
            </section>
        </div>
    )
}

export default NotificationForm