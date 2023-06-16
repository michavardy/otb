'use client'
import LoginData from './LoginData'
export default function Titlebar(){
    return(
        <div className="flex items-center justify-between bg-black text-white p-2">
            <h1 className="mx-auto">OTB</h1>
            <LoginData/>
        </div>
    )
}