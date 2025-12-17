import { useState } from "react"

const OldLinks = () => {
    const [copyLink, setCopyLink] = useState(false);
    const handleCopy = () => {
        setCopyLink(true)
        setTimeout(() => {
            setCopyLink(false)
        }, 1000);
    }
    return (
        <section className='container py-1 px-0 w-full'>
            <div className="flex flex-col md:flex-row justify-between items-center rounded-md bg-white">
                <p className="text-black font-semibold wrap-anywhere w-full md:w-auto py-2.5 px-4 border-b-2 md:border-0 border-light-gray">https://frontendmentor.com</p>
                <div className="w-full md:w-auto py-2.5 px-4 flex flex-col md:flex-row justify-between items-center gap-10">
                    <p className="text-blue font-semibold wrap-anywhere">https://rel/k4uy</p>
                    <button onClick={handleCopy} type='button' className={`w-full md:w-auto hover:opacity-90 cursor-pointer text-white py-1.5 px-5 rounded-md font-semibold ${copyLink ? "bg-purple" : "bg-blue"}`}>
                        {
                            copyLink ? "Copied!" : "Copy"
                        }
                    </button>
                </div>
            </div>
        </section>
    )
}

export default OldLinks