import axios from 'axios'
import React from 'react';
import styled from 'styled-components';

const ItenContainer = styled.div`
    display: flex;
    background-color: #0B1B30;
    align-items: center;

    
`
const DataContainer = styled.div`
    height: 80px;
    width: 50%;
    margin-left: 10px;
    align-items: stretch;
    
    
`

const TextContainer = styled.p`
    color: #907771;
`

function ItensList() {

    const [listItens, setListItens] = React.useState([])

    React.useEffect(() => {
        getListItens()
    }, [])

    async function getListItens() {
        try {
        const response = await axios.get('https://reqres.in/api/users');
            console.log(response);
            setListItens(response.data.data)
        } 
        catch (error) {
            console.error(error);
        }
    }

    return(
        listItens.map(iten => (
            <section key={iten.id}>
                <ItenContainer>
                    <img
                        className='img'
                        src={iten.avatar}
                        alt='selfinanceiro'
                    ></img>
                    <DataContainer>
                        <TextContainer>{iten.first_name}</TextContainer>
                        <TextContainer>{iten.email}</TextContainer>
                    </DataContainer>
                </ItenContainer>
            </section>
        ))
        
    )
}

export default ItensList;