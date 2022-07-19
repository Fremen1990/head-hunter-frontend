import {Logo} from "./styles/logo";
import React from "react";


export interface ILogoElement{
    children: React.ReactNode
}

const LogoElement: React.FunctionComponent<ILogoElement>=({children, ...restProps})=>{
    return <Logo {...restProps}>{children}</Logo>

}

export default LogoElement