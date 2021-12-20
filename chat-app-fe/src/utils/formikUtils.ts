import { TextFieldProps } from "@material-ui/core"

export const generateFormikArgs = (key: any, formik: any) => {
    return {
        error: formik.touched[key] && Boolean(formik.errors[key]),
        helperText: formik.touched[key] && formik.errors[key],
        onChange: formik.handleChange,
        value: formik.values[key],
        name: key,
    } as TextFieldProps
}