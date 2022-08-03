

export function Index() {
    return (
        <>
            <div className="absolute w-40 h-10 not-italic font-bold text-3xl leading-9 font-sen text-gray-900 left-[390px] top-[47px]">
                <h1>CodeMoji</h1>
            </div>
            <section>
                <div className="rounded-full ellipse-64">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 search-icon" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd" />
                    </svg>
                </div>
                <div className="box-login ">
                    <button className="not-italic text-base leading-5 uppercase font-inter w-[103px] h-[19px] flex-none order-none flex-grow-0 font-bold">Fazer login</button>
                </div>
            </section>
        </>
    )
}