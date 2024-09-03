import { LoginForm } from "@/components/LoginForm"
import Logo from "@/components/Logo"

const page = () => {
  return (
    <div className="flex bg-slate-300 h-screen min-h-screen">
      <div className="flex m-auto shadow-md bg-yellow-50 h-3/4 w-3/4">
        <div className="flex justify-evenly w-full laptop:mx-10">
          <LoginForm />
          <Logo />
        </div>
      </div>
    </div>
  )
}

export default page