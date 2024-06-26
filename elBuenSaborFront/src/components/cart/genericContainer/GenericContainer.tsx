import { FC } from "react";
import "./genericContainer.css"


interface GenericContainerProps {

    title: string;


    children?: React.ReactNode;
}

const GenericContainer: FC<GenericContainerProps> = ({ children, title }) => {

    return (
        <div className="pb-5">
            <div className="container pb-1 mb-5" style={{ background: "#f99132", borderRadius: "25px" }}>
                <div className="titleAndAddButton">
                    <div className="text-center py-4 px-3 d-flex">

                        <h1 className="title-cart">{title}</h1>
                    </div>
                </div>

                <div>
                    {children}
                </div>

            </div >
        </div>
    );
}

export default GenericContainer;