const OldLinks = ({ links }) => {
    return (
        <div className="mt-6 space-y-3">
            {links.map((link, index) => (
                <div
                    key={index}
                    className="flex justify-between bg-gray-800 p-3 rounded"
                >
                    <p className="text-gray-300 truncate">{link.original}</p>

                    <a
                        href={link.short}
                        target="_blank"
                        className="text-blue-400 hover:underline"
                    >
                        {link.short}
                    </a>
                </div>
            ))}
        </div>
    );
};

export default OldLinks;
