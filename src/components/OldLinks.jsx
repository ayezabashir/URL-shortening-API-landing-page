import { useState } from "react";
const OldLinks = ({ links }) => {

    const [copiedLink, setCopiedLink] = useState(null);
    const handleCopyToClipboard = async (link) =>{
        await navigator.clipboard.writeText(link);
        setCopiedLink(link);
        setTimeout(() => {
            setCopiedLink(null);
        }, 1500);
    }
    return (
        <div className="mt-6 space-y-3">
            {links.map((link, index) => (
                <div
                    key={index}
                    className=" bg-white flex flex-col md:flex-row justify-between items-center bg-gray-800 p-3 rounded-lg"
                >
                    <p className="text-gray truncate font-semibold" style={{textWrap: "auto"}}>{link.original}</p>
                    <div className="flex justify-between items-center gap-7">
                        <p className="font-semibold text-blue wrap-anywhere">
                            {link.short}
                        </p>
                        <button className="bg-blue rounded-md font-bold text-white p-2 px-5" onClick={() => handleCopyToClipboard(link.short)}>
                            {copiedLink === link.short ? "Copied!" : "Copy"}
                        </button>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default OldLinks;
