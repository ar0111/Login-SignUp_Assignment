import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import UserContext, { AuthContext } from '../../Context/UserContext';



const SignUp = () => {
    const {createUser, googleSignIn } = useContext(AuthContext);
    // console.log(createUser);

    const handleSignUp = (event)=>{
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;

        // console.log(name, email, password);
        createUser(email, password)
        .then(result=>{
            const user = result.user;
            console.log(user);
            alert("User created Successfully")
            form.reset();
        })
        .catch(error=>console.log(error))
    }

    const handleGoogleLogin = ()=>{
        googleSignIn()
        .then(result=>{
            const user = result.user;
            console.log(user);
            alert("User google registration is done Successfully")
            form.reset();
        })
        .catch(error=>console.log(error))
    }

    return (
        <div className="hero min-h-screen bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90% ...">
            <div className="hero-content flex-col">
                <div className="text-center lg:text-left">
                    <h1 className="text-3xl font-bold">Please Signup!</h1>
                </div>
                <div className="card flex-shrink-0 w-96 max-w-sm shadow-2xl bg-base-100">
                    <form onSubmit={handleSignUp} className="card-body bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500 ... rounded-lg">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" name = "name" placeholder="name" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" name = "email" placeholder="email" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" name="password" placeholder="password" className="input input-bordered" />

                        </div>

                        <label className="label">
                            <Link to="/login" href="#" className="label-text-alt link link-hover">Already Have an Account? Please Login</Link>
                        </label>

                        <div className="form-control mt-6">
                            <input type="submit" className="btn btn-primary" value="Sign Up" />
                        </div>

                        <div className="form-control mt-6">
                            <button onClick={handleGoogleLogin} className="btn btn-primary">Sign in With Google</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default SignUp;