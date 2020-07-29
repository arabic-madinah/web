import React from "react";
import Button from "@material-ui/core/Button";
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import {Link} from "react-router-dom";

interface NextPrevPaginationProps {
    backwardRoute?: string,
    backwardName?: string,
    forwardRoute?: string,
    forwardName?: string,
    completeCurrent: ()=>void
}

export default function NextPrevPagination(props: NextPrevPaginationProps) {
    const {
        backwardRoute, 
        backwardName, 
        forwardRoute, 
        forwardName,
        completeCurrent
    } = props;
    return (
        <div style={{paddingBottom: "76px"}}>
            {
                backwardRoute && backwardName ?
                <Button component={Link} to={backwardRoute} color="primary">
                    <ArrowBackIosIcon fontSize="small"/> {backwardName}
                </Button>
                :
                null
            }
            {
                forwardRoute && forwardName ?
                <Button 
                    component={Link} 
                    to={forwardRoute} 
                    onClick={completeCurrent}
                    color="primary" 
                    style={{float: "right"}}
                >
                    {forwardName} <ArrowForwardIosIcon fontSize="small" />
                </Button>
                :
                null
            }
        </div>
    );
}
