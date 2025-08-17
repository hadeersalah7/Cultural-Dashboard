import type { ReactNode } from "react";
import { FcList } from "react-icons/fc";
import { FcReadingEbook } from "react-icons/fc";
import { FcMultipleInputs } from "react-icons/fc";
import { FcCollaboration } from "react-icons/fc";
import { FcOvertime } from "react-icons/fc";
import { FcNook } from "react-icons/fc";
import { FcSettings } from "react-icons/fc";
interface ILinks {
    id: number;
    text: string;
    path: string;
    icon: ReactNode;
}

const iconStyle = {
    fontSize: "1.5rem"
}

export const Links: ILinks[] = [
    {
        id: 1,
        text: "Overview",
        path: "/dashboard",
        icon: <FcList style={iconStyle}/>
    },
    {
        id: 2, 
        text: "Cultural Insights",
        path: "/cultural-insights",
        icon: <FcReadingEbook style={iconStyle}/>
    },
    {
        id: 3,
        text: "Team Values",
        path: "/team-values",
        icon: <FcCollaboration style={iconStyle}/>
    },
    {
        id: 4, 
        text: "Events",
        path: "/events",
        icon: <FcOvertime style={iconStyle}/>
    },
    {
        id: 5,
        text: "Feedback",
        path: "/feedback",
        icon: <FcMultipleInputs style={iconStyle}/>
    },
    {
        id: 6,
        text: "Digital Archives",
        path: "digital-archives",
        icon: <FcNook style={iconStyle}/>
    },
    {
        id: 7,
        text: "Settings",
        path: "/settings",
        icon: <FcSettings style={iconStyle}/>
    }
]