

function InformationBox({ titleContent, bodyContent1, bodyContent2, span1, span2, spanHref, contentHref, datesContent }) {
    return (
        <div className="flex flex-col">
            <div className="flex justify-center align-middle">
                <h1 className="text-2xl font-bold align-middle my-2 text-center">{ titleContent }</h1>
            </div>
            <div className="flex justify-center align-middle">
                <p> { bodyContent1 } <span className="text-amber-500 font-bold">
                    { span1 } </span>
                    { bodyContent2 } <span className="font-semibold italic"> { span2 } </span>
                    <a href={contentHref} target="_blank" className="no-underline text-amber-500 font-bold hover:underline"> { spanHref }</a>
                </p>
            </div>
        </div>
    )
}

export default InformationBox;