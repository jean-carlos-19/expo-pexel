import { useState } from "react";

const useSearch =()=>{

    const [isActive,setActive] = useState(false);

    return {isActive, setActive};
}
export {useSearch}