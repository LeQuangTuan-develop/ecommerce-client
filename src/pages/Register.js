import { Form, Formik } from "formik"
import * as Yup from "yup"
import FormControl from "../components/Form/FormControl"

const Register = () => {
  const initialValues = {
    fullName: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
  }

  const validationSchema = Yup.object({
    fullName: Yup.string().required("Nhập họ và tên"),
    email: Yup.string()
      .email("Nhập đúng định dạng email")
      .required("Nhập email"),
    phone: Yup.string().required("Nhập số điện thoại"),
    password: Yup.string().required("Nhập mật khẩu"),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref("password"), ""], "Nhập mật khẩu không giống nhau")
      .required("Nhập xác thực mật khẩu"),
  })

  const onSubmit = (values) => {
    console.log(values)
  }

  return (
    <div className="form__container">
      <div className="form__box">
        <h3>Đăng kí</h3>
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={onSubmit}
        >
          {(formik) => (
            <Form>
              <FormControl
                control="input"
                type="text"
                label="Họ và tên"
                name="fullName"
              />
              <FormControl
                control="input"
                type="email"
                label="Email"
                name="email"
              />
              <FormControl
                control="input"
                type="number"
                label="Số điện thoại"
                name="phone"
              />
              <FormControl
                control="input"
                type="password"
                label="Mật khẩu"
                name="password"
                autoComplete="on"
              />
              <FormControl
                control="input"
                type="password"
                label="Xác thực mật khẩu"
                name="confirmPassword"
                autoComplete="on"
              />

              <button
                type="submit"
                disabled={!formik.isValid}
                className="btn-primary"
              >
                Đăng kí
              </button>
            </Form>
          )}
        </Formik>
        <div className="form__box--options">
          <div></div>
          <span>Hoặc</span>
          <div></div>
        </div>
        <button className="btn-primary form__box--facebook">
          Đăng nhập với facebook
        </button>
        <button className="btn-primary form__box--google">
          Đăng nhập với google
        </button>
        <p className="form__box--switch">
          Bạn đã có tài khoản? <a href="/login">Đăng nhập ngay</a>
        </p>
      </div>
    </div>
  )
}

export default Register
