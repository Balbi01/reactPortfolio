
function InformationBox ({
    titleContent,
    bodyContent1,
    bodyContent2,
    span1,
    span2,
    spanHref,
    contentHref,
    datesContent,
    pathFillRuleD
}) {
    return (
        <div className="information-composition">
            <div className="information-flex-phone">

                {pathFillRuleD && (
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="size-10 mr-2 h-full">
                        <path className="items " fillRule="evenodd" d={ pathFillRuleD } clipRule="evenodd" />
                    </svg>
                )}

                <h1 className="information-h1-phone">{ titleContent }</h1>

            </div>
            <div className="flex align-middle">
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