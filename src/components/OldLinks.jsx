import { useState } from "react";
const OldLinks = ({ links }) => {
    const [copiedLink, setCopiedLink] = useState(null);
    const handleClick = async (shortLink) => {
        await navigator.clipboard.writeText(shortLink);
        setCopiedLink(shortLink); // mark this link as copied
        setTimeout(() => setCopiedLink(null), 1500); // reset after 1.5s
    };
    return (
        <div className="mt-6 space-y-3">
            {links.map((link, index) => (
                <div
                    key={index}
                    className=" bg-white flex justify-between bg-gray-800 p-3 rounded"
                >
                    <p className="text-gray truncate font-semibold">{link.original}</p>
                    <div className="flex justify-between items-center gap-7">
                        <a
                            href={link.short}
                            target="_blank"
                            className="font-semibold text-blue hover:underline"
                        >
                            {link.short}
                        </a>
                        <button
                            className="bg-blue rounded-md font-bold text-white p-2 px-5"
                            onClick={() => handleClick(link.short)}
                        >
                            {copiedLink === link.short ? "Copied!" : "Copy"}
                        </button>

                    </div>
                </div>
            ))}
        </div>
    );
};

export default OldLinks;
