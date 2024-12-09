import React from "react";

function Content ({data, action}) {
    console.log(data);
    return (
        <>
            {data.map((x, i) => {
                return <div onClick={action != null && action.includes(i) ? select : () => {}}>
                    {x}
                </div>
            })}
        </>
    );
}

function select(event) {
    if (event.target.classList.contains("selected")) {
        event.target.classList.remove("selected");
        return;
    }
    event.target.classList.add("selected");
}

export default Content;