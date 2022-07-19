import {Logo} from "./styles/logo";

// @ts-ignore
export default function LogoContainer({children, ...restProps}){
    return <Logo {...restProps}>{children}</Logo>
}