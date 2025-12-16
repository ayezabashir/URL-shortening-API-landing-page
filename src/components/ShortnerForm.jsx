const ShortnerForm = () => {
    return (
        <section className="container">
            <div className="bg-purple bg-[url(/bg-shorten-mobile.svg)] md:bg-[url(/bg-shorten-desktop.svg)] rounded-xl">
                <form className="p-10 flex flex-col gap-5 md:flex-row justify-center items-center" onSubmit={(e) => e.preventDefault()}>
                    <input className="w-full md:w-[80%] bg-white py-3 px-5 rounded-xl outline-0" type="text" placeholder="Shorten a link here..." name="url_input" id="url_input" />
                    <button className="w-full md:w-[20%] bg-blue hover:opacity-90 cursor-pointer text-white py-3 px-2 rounded-xl text-lg font-bold" type="submit">Shorten It!</button>
                </form>
            </div>
        </section>
    )
}

export default ShortnerForm