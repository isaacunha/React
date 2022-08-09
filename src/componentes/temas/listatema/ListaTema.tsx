import React, {useState, useEffect} from 'react'
import { Link } from 'react-router-dom'
import { Box, Card, CardActions, CardContent, Button, Typography } from '@material-ui/core';
import Tema from '../../../models/Tema';
import './ListaTema.css';
import { useSelector } from 'react-redux';
import { TokenState } from '../../../store/tokens/tokensReducer';
import {useNavigate} from 'react-router-dom';
import { busca } from '../../../services/Service';

function ListaTema() {
  const [temas, setTemas] = useState<Tema[]>([])
  const token = useSelector<TokenState, TokenState["tokens"]>(
    (state) => state.tokens
  );
  let navigate = useNavigate();  //tem que ser autenticado (Token)

  useEffect(()=>{
    if(token == ''){
      alert("Você precisa estar logado") 
      navigate("/login")
    }
  }, [token])


  async function getTema(){   //requisição dos temas pela api
    await busca("/tema", setTemas, {
      headers: {
        'Authorization': token //propiedade que recebe o token, passa no header
      }
    })
  }


  useEffect(()=>{  //chamar a função do get
    getTema()
  }, [temas.length])


  return (
    <>
    {
      temas.map(tema =>(
      <Box m={2} >
        <Card variant="outlined">
          <CardContent>
            <Typography color="textSecondary" gutterBottom>
              Tema
            </Typography>
            <Typography variant="h5" component="h2">
             {tema.descricao}  
            </Typography>
            <br></br>
            <Typography color="textSecondary" gutterBottom>
              Descrição:
            </Typography>
            <Typography variant="h6" component="h2">
             {tema.nome}  
            </Typography>
          </CardContent>
          <CardActions>
            <Box display="flex" justifyContent="center" mb={1.5} >

              <Link to={`/formularioTema/${tema.id}`} className="text-decorator-none"> {/*quando clicar no atulizar vai pra cadastrar tema e vai dar o id */}
                <Box mx={1}>
                  <Button variant="contained" className="marginLeft" size='small' color="primary" >
                    atualizar    
                  </Button>
                </Box>
              </Link>
              
              {/* vai deletar de acordo com o id */}
              <Link to={`/deletarTema/${tema.id}`} className="text-decorator-none">  
                <Box mx={1}>
                  <Button variant="contained" size='small' color="secondary">
                    deletar
                  </Button>

                </Box>
              </Link>
            </Box>
          </CardActions>
        </Card>
      </Box>
      ))
      }
    </>
  );
}


export default ListaTema;