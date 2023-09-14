import { useEffect } from "react";

import { useRecoilState } from "recoil";
import toastState from "../../stores/toastState";

import Toast from "./Toast";

function Toaster() {

    const [toastList, setToastList] = useRecoilState(toastState)

    useEffect(() => {
        const timer = setInterval(() => {

            if (toastList.length > 0) {
                const newToastList = toastList.slice(1)
                setToastList(newToastList)
            } else {
                clearInterval(timer)
            }

        }, 15000)

        return () => { clearInterval(timer) }

    }, [toastList, setToastList])

    const renderToasts = Object.keys(toastList)
        .map(key => <Toast key={key} data={toastList[key]} />)

    return (
        <div id="toaster">
            {renderToasts}
        </div>
    );
}

export default Toaster