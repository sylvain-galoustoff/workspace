import Toast from "./Toast";

function Toaster() {
    return (
        <div id="toaster">

            <Toast data={{ type: "primary", message: "message d'information" }} />
            <Toast />
            <Toast />
            <Toast />
            <Toast />
            <Toast />


        </div>
    );
}

export default Toaster