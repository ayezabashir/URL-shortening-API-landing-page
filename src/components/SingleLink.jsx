import { useState } from "react";
const SingleLink = ({ link }) => {
    const [copied, setCopied] = useState(false);
    const handleCopy = async () => {
        await navigator.clipboard.writeText(link.short);
        setCopied(true);
        setTimeout(() => setCopied(false), 1500);
    };
    return (
        <div className="bg-white rounded-md flex flex-col md:flex-row justify-between items-center">
            <p className="px-4 py-3 border-b md:border-0">
                {link.original}
            </p>

            <div className="flex items-center gap-4 px-4 py-2">
                <p className="text-blue font-semibold">
                    {link.short}
                </p>

                <button
                    onClick={handleCopy}
                    className={`px-5 py-2 rounded-md text-white ${copied ? "bg-purple" : "bg-blue"
                        }`}
                >
                    {copied ? "Copied!" : "Copy"}
                </button>
            </div>
        </div>
    );
};


export default SingleLink