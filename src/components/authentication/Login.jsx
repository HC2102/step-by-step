import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import "./login.css"
const Login = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();

    return (
        <div className="body">
            <div className="back-to-home">
                <Link to="/">Home</Link>
            </div>
            <div className="container">
                <div className="row justify-content-center">
                    <div className="inner-wrap col">
                        <div className="header">
                            <h1>Login form</h1>
                        </div>
                        <div className="data w-100">
                            <form id="form" className="form" onSubmit={handleSubmit((data) => { console.log(data) })}>
                                <div className="form-group">
                                    <input type="text" placeholder="email" className="form-control" id="email" name="email"{...register("email", {
                                        required: "Email ko dc de trong",
                                        pattern: {
                                            value: `/^[\w-.]+@([\w-]+.)+[\w-]{2, 4}$/`,
                                            message:"Ko dung dinh dang",
                                        },
                                    })} />
                                    {errors.email&&(
                                        <p className="text-danger">{errors.email.message}</p>
                                    )}
                                </div>
                                <div className="form-group">
                                    <input type="password" placeholder="Password" className="form-control" id="password" name="password"
                                    {...register("password",{
                                        required: "mat khau ko de trong",
                                        minLength:{
                                            value: 6,
                                            message: "toi thieu 6 ki tu"
                                        },
                                        maxLength:{
                                            value: 20,
                                            message:"toi da 20 ki tu"
                                        }
                                    })} />
                                    {errors.password&&(
                                        <p className="text-danger">{errors.password.message}</p>
                                    )}
                                </div>
                                <div className="form-group">
                                    <button className="btn form-control btn-success">Login</button>
                                </div>
                            </form>
                        </div>
                        <div className="sign-up">
                            <Link to="/signup">Sign Up</Link>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
}
export default Login;
