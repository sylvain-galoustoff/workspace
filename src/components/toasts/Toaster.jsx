import { useRecoilState } from "recoil";

import Toast from "./Toast";
import toastState from "../../stores/toastState";

function Toaster() {

    const [toastList, setToastList] = useRecoilState(toastState)

    const renderToasts = Object.keys(toastList)
        .map(key => <Toast key={key} data={toastList[key]} />)

    return (
        <div id="toaster">
            {renderToasts}
        </div>
    );
}

export default Toaster