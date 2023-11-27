import Image from "next/image";
import logo from "../image/logo.png";
function Footer() {
    return (
        <div style={{ background: "#131921" }} className=" d-flex gap-2 align-items-center justify-content-center pt-3">
            <Image className="w-24 mr-3" width={100} height={50} src={logo} alt={"amazon logo"} />
            <p className="text-white fs-7">
                All rights reserved{" "}
                <a className="text-white url-footer" target="_blank" href="https://www.linkedin.com/in/ziad-ahmed-5b1328265">
                    @ZiadAhmed
                </a>
            </p>
        </div>
    );
}

export default Footer