import { Flex, Spin } from "antd"
import { useContext } from "react"
import { DashboardContext } from "../contexts/DashboardContext"
import { LoadingOutlined } from "@ant-design/icons";


const LoadingSpiner = () => {
    const { isDark } = useContext(DashboardContext)
    const customeLoadingIcon = (
        <LoadingOutlined
            style={{ fontSize: 40, color: isDark ? "#b58cd7" : "#4f46e5" }}
            spin
        />

    )
    return (
        <Flex align="center" gap="middle" justify="center" >
            <Spin size="large" indicator={customeLoadingIcon} />
        </Flex>
    )
}

export default LoadingSpiner