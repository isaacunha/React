import React from 'react';
import { AppBar, Toolbar, Typography, Box, Grid } from '@material-ui/core';
import { Link } from 'react-router-dom';
import './Navbar.css'
import Button from '@material-ui/core/Button';

function Navbar() {
    return (
        <>
            <Grid container direction="row" justifyContent="center" alignItems="center">
                <Grid alignItems="center" item xs={12}>
                    <AppBar position="static">
                        <Box className='box3' paddingTop={1}>
                            <Typography variant="subtitle2" align="center" gutterBottom className='textos' >Fantastico mundo do sensorimento remoto, tecnologia e agricultura juntos!</Typography>
                        </Box>

                        <Box className='box4' display="flex" justifyContent="center" >
                            <Typography variant="h5" color="inherit">
                                SensoAgriTech
                            </Typography>
                            <Box mx={1} className='cursor'>
                                <Button variant="contained" className="botao1">
                                    Home
                                </Button>
                            </Box>
                            <Box mx={1} className='cursor'>
                                <Button variant="contained" className="botao1">
                                    Postagens
                                </Button>
                            </Box>
                            <Box mx={1} className='cursor'>
                                <Button variant="contained" className="botao1">
                                    temas
                                </Button>
                            </Box>
                            <Box mx={1} className='cursor'>
                                <Button variant="contained" className="botao1">
                                    Cadastrar Tema
                                </Button>
                            </Box>
                            <Box mx={1} className='cursor'>
                                <Button variant="contained" className="botao1">
                                    <Link to='/login' className='text-decorator-none'>
                                            logout
                                    </Link>
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