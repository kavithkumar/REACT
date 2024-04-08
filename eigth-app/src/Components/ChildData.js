import React from "react";

function Child({ data }) {
    console.log('childData is rendered')
    return (
        <>
            Child Data: {data}
        </>
    );
}
export default React.memo(Child)