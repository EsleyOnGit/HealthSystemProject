import { Header } from "@/sections/landingpage/Header";

export const Login = () =>{
    <>
        <div className="flex flex-col items-center justify-center min-h-screen py-2">
            <Header/>
                

            <main className="flex flex-col items-center justify-center w-full flex-1 px-20 text-center">
                <div className="bg-white rounded-2xl shadown-2xl flex w-2/3 max-w-4xl">
                    <div className="w-3/5 p-5">
                    <div className="text-left font-bold ">
                        <span className="text-green-500">company</span>Name
                    </div>
                        <p>singn in Sction</p>
                    </div>
                    <div className="w-2/5 bg-green-500 text-white rounded-tr-2xl rounded-br-2xl py-36 px-12">
                        <h2 className="text-3xl font-bold mb-2">Hello, friend!</h2>
                        <div className="border-2 w-10 border-white inline-block mb-2"></div>
                        
                        <a href="#" className="border-2 border-white rounded -full px-12 py-2 inline-block font-semibold hover:bg-white hover:text-green-500">Sing Up</a>
                        <div className="flex justify-center my-2">
                            <a href="#" className="border-2  border-gray-200 rounded-full p-3 mx-1"><FaFacebookF className="text-sm" /></a>
                            <a href="#" className="border-2  border-gray-200 rounded-full p-3 mx-1"><FaLinkedIn className="text-sm" /></a>

                            <a href="#" className="border-2  border-gray-200 rounded-full p-3 mx-1"><FaGoogle className="text-sm" /></a>
                        </div>
                        {/* Social Login Section */}

                        <p className="text-gray-400 my-3">or use your email account</p>
                        <div className="flex flex-col items-center">
                            <FaRegEnvelope className="text-gray-400 mr-2" />
                            <input type="email" name="email" placeholder="Email" className="bg-gray-100 outline-none"/>
                        </div>
                        {/* Sign in Section */}
                        <div className="w-2/5 bg-green-500 text-white rounded-tr-2xl rounded-br-2xl py-36 px-12"></div>
                        <h2 className="text-3xl font-bold mb-2"></h2>
                        <div className="border-2 w-10 border-white inline-block mb-2"></div>
                        <p className="mb-2">fill up personal information and start journey with us.</p>
                    </div>
                </div>
            </main>
        </div>
    </>
}

//export default Login;