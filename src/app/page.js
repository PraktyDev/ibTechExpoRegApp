import { LoginForm } from "@/components/LoginForm"
import Logo from "@/components/Logo"

const page = () => {
  return (
    <div className="flex bg-slate-300 h-screen min-h-screen">
      <div className="flex my-auto shadow-md bg-yellow-50 h-[450px] laptop:h-3/4 w-full laptop:w-3/4 mx-5 laptop:mx-auto">
        <div className="flex justify-evenly w-full laptop:mx-10">
          <LoginForm />
          <Logo />
        </div>
      </div>
    </div>
  )
}

export default page