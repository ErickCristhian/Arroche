import React, { useEffect, useState } from 'react';
import api from '../../services/api';
import {Container, Table } from 'reactstrap';
import Header from '../../components/Header';
import SuccessUrl from '../../components/SuccessUrl';
import { BsFillTrashFill } from 'react-icons/bs';



function Home(){
    const [urls, setUrls] = useState();
    useEffect(() => {
        api.get('/').then(response => {
            setUrls(response.data)
        })
    }, [urls])
    
    async function handleClick(e, url_encurtada) {
        e.preventDefault();
        const response = await api.post('edit', { url_encurtada });
        window.open(response.data.original_url, '_blank');
    }
    async function handleDelete(e, url_encurtada) {
        e.preventDefault();
        await api.post('delete', { url_encurtada })
    }
    return(
        <>
            <Header/>
            <h1 className="text-center">Últimas URLs Encurtadas</h1>
            <Container fluid={true} className="row justifu-content-center">
                <Table striped className="me-2">
                    <thead>
                        <tr className="row">
                            <th className="col-4">Url Original</th>
                            <th className="col-4">Url Encurtada</th>
                            <th className="col-2">Total de Clicks - URL Curta</th>
                            <th className="col-1">Ações</th>
                        </tr>
                    </thead>
                    <tbody>
                        {urls?.map(url => (
                            <tr key={url.id} className="row">
                                <td className="col-4 original"><a href={url.original_url} target="_blank">
                                    {url.original_url}
                                </a></td>
                                <td 
                                className="action col-4"
                                onClick={e => handleClick(e, url.url_encurtada)}>
                                    http://localhost:3000/{url.url_encurtada}
                                </td>
                                <td className="col-2">{url.count_clicks}</td>
                                <td 
                                    className="action col-1"
                                    onClick={e => handleDelete(e, url.url_encurtada)}>
                                    <BsFillTrashFill size={20} color="#F00"/>
                                    Deletar
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </Table>
            <SuccessUrl/>  
            </Container>
        </>
    )
}
export default Home;