import LoginCard from "@/components/login/LoginCard";
import Image from "next/image";

const Login = ()=>{
    return (
        <div className="min-h-screen relative">
            <div className="absolute inset-0 bg-cover"
            style={{
               backgroundImage:"url(https://static.canva.com/web/images/002d737e30b90787006afee36ee53149.jpg)"
            }}
            />
        
            <div className="absolute inset-0 opacity-85 bg-gradient-to-b from-black via-transparent  to-black" />

            <div>
                <Image
                src="https://static.canva.com/web/images/856bac30504ecac8dbd38dbee61de1f1.svg"
                alt="canva"
                className="absolute top-5 left-8"
                width={80}
                height={80}
                priority
                />
            </div>

            <LoginCard />
        
           
        </div>
    )
}

export default Login;