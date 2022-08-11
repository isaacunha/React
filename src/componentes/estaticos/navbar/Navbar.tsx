import React from 'react';
import { AppBar, Toolbar, Typography, Box, Grid } from '@material-ui/core';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';
import { TokenState } from '../../../store/tokens/tokensReducer';
import './Navbar.css'
import Button from '@material-ui/core/Button';
import { addToken } from '../../../store/tokens/actions';
import {toast} from 'react-toastify';

function Navbar() {
    const token = useSelector<TokenState, TokenState["tokens"]>(
        (state) => state.tokens
    );
    let navigate = useNavigate();
    const dispatch = useDispatch(); //dispara a ação

    function goLogout() {
        dispatch(addToken(''));
        toast.info("Usuário deslogado!", {
            position: "top-right",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover:false,
            draggable: false,
            theme: "colored",
            progress: undefined,
        });
        navigate('/login')
    }

    var navbarComponent;

    if (token != "") {
        navbarComponent = <Grid container direction="row" justifyContent="center" alignItems="center">
            <Grid alignItems="center" item xs={12}>
                <AppBar position="static">
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

    }


    return (
        <>
            <Box className='box3' paddingTop={1}>
                <Typography variant="subtitle2" align="center" gutterBottom className='textos' >Fantastico mundo do sensorimento remoto, tecnologia e agricultura juntos!</Typography>
            </Box>

            {navbarComponent}
        </>
    )
}

export default Navbar;