import {useEffect} from "react";
import { useLocation } from "react-router-dom";
import {useQuery} from "../chapters/Chapters";

export default function ScrollToTop() {
    const { pathname } = useLocation();
    const query = useQuery();
    const trigger: string = `${pathname}.${query.get("chapter")}.${query.get("lesson")}`;

    useEffect(() => {
        window.scrollTo(0,0);
    }, [trigger]);

    return null;
}
