import { useState } from "react"
import Title from "../../Title"
import styled from "styled-components"
import images from "./clients.json"

const Container = styled.section`
    display: flex;
    flex-direction: column;
`



const Clients = () => {

    const [client, setClient] = useState(images)

    return (
        <Container>
            <Title>Clientes</Title>
        </Container>
    )
}

export default Clients