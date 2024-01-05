import { useState } from "react";
import Button from "./Button";


function Count() {

    const [value, setValue] = useState(0)

    const colorText = value > 0 ? 'text-blue-700' : value < 0 ? 'text-red-700' : 'text-dark-700';

    return (
        <div className="flex flex-col items-center justify-center">
            <p className={`text-8xl font-bold ${colorText} `}>{value}</p>
            <div className="flex flex-row space-x-4 items-center mt-6 ">
                <Button backg={'bg-red-600'} onclick={() => setValue(value - 1)} content={"-"} />
                <Button backg={'bg-blue-600'} onclick={() => setValue(value + 1)} content={"+"} />
            </div>
        </div>)
}

export default Count