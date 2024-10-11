import { useEffect, useState } from "react"

export const DigitalClock = () => {

    const [timestate, setTimestate] = useState<string>("")

    const handleTime = () => {
        const currentTime = setInterval(() => {
            const time = new Date().toLocaleTimeString();
            return setTimestate(time)
        }, 1000)
        return currentTime;
    }

    useEffect(() => {
        handleTime();
    })

    return (
        <>

            <div className="shadow-lg p-8 rounded-xl px-8 w-4/5 sm:w-96 md:96 lg:w-96 bg-white">
                <h1 className="text-4xl" >Digital Clock</h1>
                <p className="text-slate-500 my-3" >Every second is an opportunity; seize it!</p>
                <h1 className="text-6xl font-bold" >{timestate}</h1>
            </div>

        </>
    )
}