import React, { useEffect, useState } from 'react';
import api from '../../services/api';
import { Button, Container, Form, FormGroup, Input, Label } from 'reactstrap';
import Header from '../../components/Header';
import { useHistory } from 'react-router-dom';
function Home(){
    const [original_url, setOriginalUrl] = useState('');
    const [url_encurtada, setUrlEncurtada] = useState('');
    

    async function handleSubmit(e){
        e.preventDefault();
        try {      
            const response = await api.post('url', { original_url });
            setUrlEncurtada(response.data.url_encurtada);
        } catch (error) {
            console.log(error);
        }
    }
    async function handleClick(e) {
        e.preventDefault();
        const response = await api.post('edit', { url_encurtada });
        window.open(response.data.original_url, '_blank');
    }
    return(
        <>
            <Header/>
            <h1 className="text-center">Seja Bem Vindo</h1>
            <Container fluid={true} className="row justifu-content-center">
                <Form fluid onSubmit={handleSubmit}>
                    <FormGroup>
                        <Label for="url" sm={6}>
                            Digite a URL Original:
                        </Label>
                        <Input
                            type="url"
                            name="url"
                            id="url"
                            onChange={e => setOriginalUrl(e.target.value)}
                            required
                        />
                    </FormGroup>
                    <FormGroup className="text-center mt-2">
                        <Button type="submit" size="lg" className="btn-success">
                            Gerar Link Curto
                        </Button>
                    </FormGroup>
                </Form>
                <div className="text-center mt-2">
                    {url_encurtada && 
                        <Button 
                        type="button" 
                        onClick={handleClick} 
                        className="btn-info text-white"> 
                            http://localhost:3000/{url_encurtada}
                        </Button>
                    }
                </div>
            </Container>
        </>
    )
}
export default Home;