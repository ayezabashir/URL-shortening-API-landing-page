import { useState } from "react";
const SingleLink = ({ link }) => {

    return (
        <div className="bg-white rounded-md flex flex-col md:flex-row justify-between items-center">
            <p className="px-4 py-3 border-b md:border-0">
                {link.original}
            </p>

            <div className="flex items-center gap-4 px-4 py-2">
                <p className="text-blue font-semibold">
                    {link.short}
                </p>

            </div>
        </div>
    );
};


export default SingleLink