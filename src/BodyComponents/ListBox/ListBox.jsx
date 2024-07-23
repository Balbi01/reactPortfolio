

function ListBox({ boxTitle,
    listItem1,
    date1,
    span1,
    ref1,
    listItem2,
    date2,
    span2,
    ref2,
    listItem3,
    date3,
    span3,
    ref3,
    listItem4,
    date4,
    span4,
    ref4,
    pathFillRuleD
}) {
    return (
        <div className="flex flex-col">
            <div className="flex align-middle h-12 my-3">

                {pathFillRuleD && (
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="size-10 mr-2 h-full">
                        <path className="items " fillRule="evenodd" d={ pathFillRuleD } clipRule="evenodd" />
                    </svg>

                )}

                <h1 className="text-2xl font-semibold my-2">
                    { boxTitle }
                </h1>
            </div>
            <div>
                <ul className="list-disc">
                    <li>
                        <a href={ ref1 } target="_blank" className="no-underline hover:underline text-amber-500 font-bold">{ span1 },</a> {listItem1} <br />
                        <span className="italic">{ date1 }</span>
                    </li>
                    <li>
                        <a href={ ref2 } target="_blank" className="no-underline hover:underline text-amber-500 font-bold">{ span2 },</a> {listItem2} <br />
                        <span className="italic">{ date2 }</span>
                    </li>
                </ul>
            </div>

        </div>
    )
}

export default ListBox;

