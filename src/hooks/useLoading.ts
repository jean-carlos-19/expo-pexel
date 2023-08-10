import { useState } from "react";

const useLoading = (state: boolean) => {
 const [loading, setLoading] = useState<boolean>(state);

 return { loading, setLoading };
};
export { useLoading };
