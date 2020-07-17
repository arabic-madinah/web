import React from "react";

// small arabic
export function ArSm({children, ...props}) {
    return <span {...props} className={props.className + " arabic text-small"}>{children}</span>
}

// medium arabic
export function ArMd({children, ...props}) {
    return <span {...props} className={props.className + " arabic text-medium"} >{children}</span>
}

// big arabic
export function ArBg({children, ...props}) {
    return <span {...props} className={props.className + " arabic text-big"} >{children}</span>
}
