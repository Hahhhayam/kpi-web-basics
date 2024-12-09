import React from "react";

function Header ({size, data}) {
    return (
        <div className={"header " + size}>
            {data}
        </div>
    );
}

export default Header;