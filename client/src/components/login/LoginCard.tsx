"use client"

import { signIn } from "next-auth/react";
import {
    Card,
    CardAction,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import "./index.css";


const LoginCard = () => {

    async function handleLoginClick() {
        await signIn("google")
    }

    return (
        <div className="relative w-[400px] mx-auto pt-[8%] ">


            <Card className="bg-[var(--card-bg-color)] border-0 text-white">
                <CardHeader>
                    <CardTitle>Jump back in!</CardTitle>
                    <CardDescription className="w-[70%]">Use your email or another service to continue with Canva (it’s free)!</CardDescription>
                    {/* <CardAction>Card Action</CardAction> */}
                </CardHeader>
                <CardContent>

                    <button onClick={() => handleLoginClick()} className="w-full  py-2 rounded-[6px] text-sm  font-semibold mx-auto bg-[var(--card-bg-color)] cursor-pointer border-[1px] border-zinc-700 hover:bg-zinc-700 transition-all duration-300">Login with google</button>
                </CardContent>
                {/* <CardFooter>
                    <p>Card Footer</p>
                </CardFooter>  */}
            </Card>
        </div>
    )
}

export default LoginCard;