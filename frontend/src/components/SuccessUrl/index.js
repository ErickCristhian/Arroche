import React, { useEffect, useState } from 'react';
import api from '../../services/api';
import { Container, Table } from 'reactstrap';


function Success(){
    const [urls, setUrls] = useState();
    useEffect(() => {
        api.get('/success').then(response => {
            setUrls(response.data)
        })
    }, [urls])
    
    async function handleClick(e, url_encurtada) {
        e.preventDefault();
        const response = await api.post('edit', { url_encurtada });
        window.open(response.data.original_url, '_blank');
    }
    return(
        <>
            <h1 className="text-center">Últimas URLs de Hoje</h1>
            <Container className="row justifu-content-center container-fluid table-responsive">
                <Table striped className="table align-middle">
                    <thead>
                        <tr className="row">
                            <th className="col-4">Url Original</th>
                            <th className="col-4">Url Encurtada</th>
                            <th className="col-4">Total de Clicks - URL Curta</th>
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
                                    https://arroche.vercel.app/{url.url_encurtada}
                                </td>
                                <td className="col-4">{url.count_clicks}</td>
                            </tr>
                        ))}
                    </tbody>
                </Table>
            </Container>
        </>
    )
}
export default Success;