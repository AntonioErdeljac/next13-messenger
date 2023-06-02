import Image from "next/image";
import AuthForm from "./components/AuthForm";

const Auth = () => {
  return (
    <div 
      className="
        flex 
        min-h-full 
        flex-col 
        justify-center 
        py-12 
        sm:px-6 
        lg:px-8 
        bg-gray-100
      "
    >
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <Image
          height="1200"
          width="1200"
          className="mx-auto w-auto"
          src="/images/mg-gold-transparent.png"
          alt="Logo"
        />

      </div>
      <AuthForm />      
  </div>
  )
}

export default Auth;
