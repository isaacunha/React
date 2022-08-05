import React from 'react';
import { AppBar, Toolbar, Typography, Box, Grid } from '@material-ui/core';
import { Link } from 'react-router-dom';
import {useNavigate} from 'react-router-dom'
import useLocalStorage from 'react-use-localstorage'
import './Navbar.css'
import Button from '@material-ui/core/Button';

function Navbar() {
    const [token, setToken] = useLocalStorage('token');
    let navigate = useNavigate();
    
    function goLogout(){
        setToken('')
        alert("Usuário deslogado!")
       navigate('/login')
    }

    return (
        <>
            <Grid container direction="row" justifyContent="center" alignItems="center">
                <Grid alignItems="center" item xs={12}>
                    <AppBar position="static">
                        <Box className='box3' paddingTop={1}>
                            <Typography variant="subtitle2" align="center" gutterBottom className='textos' >Fantastico mundo do sensorimento remoto, tecnologia e agricultura juntos!</Typography>
                        </Box>

                        <Box className='box4' display="flex" justifyContent="center" >
                            <Link to="/home" className='text-decoration-none'>
                            <Typography variant="h5" color="inherit">
                                SensoAgriTech
                            </Typography>
                            </Link>
                            
                            <Link to="/home" className='text-decoration-none'>
                            <Box mx={1} className='cursor'>
                                <Button variant="contained" className="botao1">
                                    Home
                                </Button>
                            </Box>
                            </Link>

                            <Link to="/posts" className='text-decoration-none'>
                            <Box mx={1} className='cursor'>
                                <Button variant="contained" className="botao1">
                                    Postagens
                                </Button>
                            </Box>
                            </Link>
                            
                            <Link to="/temas" className='text-decoration-none'>
                            <Box mx={1} className='cursor'>
                                <Button variant="contained" className="botao1">
                                    temas
                                </Button>
                            </Box>
                            </Link>

                            <Link to="/formulariotema" className='text-decoration-none'>
                            <Box mx={1} className='cursor'>
                                <Button variant="contained" className="botao1">
                                    Cadastrar Tema
                                </Button>
                            </Box>
                            </Link>

                            <Box mx={1} className='cursor' onClick={goLogout} >
                                <Button variant="contained" className="botao1">
                                            logout
                                </Button>
                            </Box>

                        </Box>
                    </AppBar>
                </Grid>
            </Grid>


        </>
    )
}

export default Navbar;