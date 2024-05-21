import { CSSProperties } from "react";
import PropagateLoader from "react-spinners/PropagateLoader";
import LOGO from "../../assets/MMJ_LOGO.svg";

type Props = {
    isLoading: boolean
}

const override: CSSProperties = {
    display: "block",
    margin: "0 auto",
    borderColor: "red",
};

function Loader({ isLoading }: Props) {
    return (
        <div className="sweet-loading pt-[10%] flex items-center">
            <div className="w-full flex items-center flex-col">
                <img src={LOGO} alt="LOGO" />
                <PropagateLoader
                    color={"#000"}
                    loading={isLoading}
                    cssOverride={override}
                    size={15}
                    aria-label="Loading Spinner"
                    data-testid="loader"
                />
            </div>
        </div>
    );
}

export default Loader;