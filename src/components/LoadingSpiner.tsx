import { Flex, Spin } from "antd"


const LoadingSpiner = () => {
    return (
        <Flex align="center" gap="middle" justify="center" >
            <Spin size="large"/>
        </Flex>
    )
}

export default LoadingSpiner