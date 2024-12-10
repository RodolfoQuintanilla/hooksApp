import { memo } from "react";

const Small =memo( ({value}) => {
    console.log("Regenerar");
    
    return (
        <div>
            <small>{value}</small>
        </div>
    );
})

export default Small;