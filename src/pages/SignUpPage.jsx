import { IoIosArrowForward } from "react-icons/io";
import { Link, useNavigate } from "react-router-dom";
import Benefits from "../components/Benefits";
import useAuth from "../hooks/useAuth";
import toast from 'react-hot-toast';
import { imageUpload } from "../utils";
import { FcGoogle } from "react-icons/fc";
import useAxiosCommon from "../hooks/useAxiosCommon";


const SignUpPage = () => {
    const { createUser, signInWithGoogle, updateUserProfile, setLoading } = useAuth()
    const axiosCommon = useAxiosCommon()
    const navigate = useNavigate();
    const handleSubmit = async e => {
        e.preventDefault()

        const form = e.target
        const name = form.name.value
        const image = form.image.files[0]
        const email = form.email.value
        const password = form.password.value

        
        // console.log(userinfo);



        try {
            setLoading(true)
            // 1. Upload image and get image url
            const image_url = await imageUpload(image)

            //2. user ragistration
            const result = await createUser(email, password)
            toast.success('signup Successful')
          
            //2. update user profile
            await updateUserProfile(name, image_url)
            const userinfo = {
                name: name,
                email: email,
                image: image_url,
            }
            axiosCommon.post('/users', userinfo)
                .then(res => {
                    toast.success('signup Successful')
                })
            navigate('/')
        } catch (err) {
            toast.error(err.message)
        }
    }

    const handleGoogleSignIn = async () => {

        try {
            setLoading(true)
            await signInWithGoogle()
            navigate('/')
            toast.success('signup Successful')
        }
        catch (err) {
            setLoading(false)
            toast.error(err.message)
        }
    }
    return (
        <>

            <div className="max-w-[1398px] px-4 mx-auto">
                <ul className="flex flex-wrap items-center mb-10 xl:mb-0">
                    <li className="mr-6">
                        <Link className="flex items-center text-sm font-medium transition-all duration-300  hover:text-gray-500" href="#">
                            <span>Home</span>
                            <IoIosArrowForward />
                        </Link>
                    </li>
                    <li className="mr-6">
                        <Link className="text-sm font-medium text-[#A3A3A3] transition-all duration-300  hover:text-gray-700" href="#">
                            <span>Login</span>
                        </Link>
                    </li>


                </ul>
                <h2 className="text-3xl font-semibold">Customer Login</h2>
                <div className="flex justify-center gap-8">
                    <div className="px-[57px] py-10 bg-slate-100">
                        <h2 className="text-lg font-semibold">Registered Customers</h2>
                        <p className="text-sm font-light leading-10">If you have an account, sign in with your email address.</p>
                        <form action="" onSubmit={handleSubmit}>
                            <div className="flex flex-col  mt-3">
                                <label htmlFor="name">name *</label>
                                <input type="text" name="name" id="name" placeholder="your name" className="p-2 border border-[#A2A6B0] outline-none mt-2" />
                            </div>

                            <div className="flex flex-col  mt-3">
                                <label htmlFor="email">Email *</label>
                                <input type="email" name="email" id="email" placeholder="your Email" className="p-2 border border-[#A2A6B0] outline-none mt-2" />
                            </div>
                            <div className="flex flex-col  mt-3">
                                <label htmlFor='image' className='block mb-2 text-sm '>
                                    Select Image:
                                </label>
                                <input
                                    required
                                    type='file'
                                    id='image'
                                    name='image'
                                    accept='image/*'
                                    className="p-2 border border-[#A2A6B0] outline-none"
                                />
                            </div>
                            <div className="flex flex-col  mt-3">
                                <label htmlFor="password">password *</label>
                                <input type="password" name="password" id="password" placeholder="your password" className="p-2 border border-[#A2A6B0] outline-none mt-2" />
                            </div>
                            <div className="flex justify-center items-center gap-6 ">
                                <button type='submit' className="mt-4 inline-block py-3 px-10  text-[14px]  text-white font-semibold text-center bg-blue-600   rounded-full" href="#">Login</button>
                                <p className="text-blue-600 font-normal">Forgot Your Password?</p>
                            </div>

                        </form>
                        <button

                            onClick={handleGoogleSignIn}
                            className='disabled:cursor-not-allowed flex justify-center  items-center space-x-2 border m-3 p-2 border-gray-300 border-rounded cursor-pointer'>
                            <FcGoogle size={32} />

                            <p>Continue with Google</p>
                        </button>

                    </div>
                    <div className="px-[57px] py-10 bg-slate-100">
                        <h2 className="text-lg font-semibold">New Customer?</h2>
                        <p className="text-sm font-light leading-5">Creating an account has many benefits: </p>
                        <ul className='list-disc list-inside mt-6 text-sm font-light '>
                            <li className="text-sm font-light leading-5">Check out faster</li>
                            <li className="text-sm font-light leading-5" >Keep more than one address</li>
                            <li className="text-sm font-light leading-5">Track orders and more</li>

                        </ul>

                    </div>
                </div>
            </div>
            <div className="bg-[#F5F7FF] mt-14">
                <Benefits></Benefits>
            </div>
        </>

    );
};

export default SignUpPage;