import { FooterIcon } from "./FooterIcon";

import facebook from "../../icons/facebook.svg";
import instagram from "../../icons/instagram.svg";
import twitter from "../../icons/twitter.svg";

export const Footer = () => {
    return (
        <div style={{ borderTop: "1px solid #000", display: "flex", justifyContent: "spaceBetween", alignItems: "center", padding: "1rem 3rem" }}>
            <div style={{ textAlign: "left", width: "30rem" }}>
                <h3>Branding stuff</h3>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                    eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                    minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                    aliquip ex ea commodo consequat.
                </p>
            </div>
            <div style={{ display: "flex"}}>
                <FooterIcon imageUrl={facebook} />
                <FooterIcon imageUrl={instagram} />
                <FooterIcon imageUrl={twitter} />
            </div>
        </div>
    );
};