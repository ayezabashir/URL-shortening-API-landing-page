import { useState } from "react"
import OldLinks from "./OldLinks"

const ShortnerForm = () => {
    const [url, setUrl] = useState("");
    const [loading, setLoading] = useState(false);
    const [shortLinks, setShortLinks] = useState([]);
    const [error, setError] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!url.trim()) {
            setError("Please enter a valid URL");
            return;
        }

        try {
            setLoading(true);
            setError("");

            const response = await fetch("http://localhost:3000/api/shorten", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    url: url.trim(),
                }),
            });


            const data = await response.json();

            if (data.error) {
                setError(data.error);
                return;
            }

            setShortLinks(prev => [
                ...prev,
                { original: url, short: data.result_url }
            ]);
            setUrl(""); 

        } catch (err) {
            setError("Something went wrong. Please try again.");
            console.log(err);
        } finally {
            setLoading(false);
        }
    };

    return (
        <section className="container ">
            <div className="absolute -top-20 left-0 right-0 p-6">
                <div className="mb-5 bg-purple bg-[url(/bg-shorten-mobile.svg)] md:bg-[url(/bg-shorten-desktop.svg)] rounded-xl">
                    <form className="p-10 flex flex-col gap-5 md:flex-row justify-center items-center" onSubmit={(e) => handleSubmit(e)}>
                        <input className="w-full md:flex-1 bg-white py-3 px-5 rounded-xl outline-0" type="text" placeholder="Shorten a link here..." onChange={(e) => setUrl(e.target.value)} value={url} name="url_input" id="url_input" />
                        <button className={`w-full md:w-auto bg-blue hover:opacity-90 text-white py-3 px-5 rounded-xl text-base font-bold ${loading ? "cursor-not-allowed" : "cursor-pointer"}`} type="submit">Shorten It!</button>
                        {
                            error && <p id="error" className="absolute bottom-14 left-18 text-sm text-Red">{error}</p>
                        }
                    </form>
                </div>
            </div>
            <div className="mt-35 md:mt-14">
                <OldLinks shortLinks={shortLinks} />
            </div>
        </section>
    )
}

export default ShortnerForm