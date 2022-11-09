import { useEffect } from "react"

const useTitle = title => {
    useEffect(() => {
        document.title = `${title} - Professor 360`;

    }, [title])
}

export default useTitle;