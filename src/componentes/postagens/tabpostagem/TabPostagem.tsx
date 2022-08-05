import React, {useState} from 'react'
import { AppBar, Tab, Tabs, Typography, Box, Button } from '@material-ui/core';
import { TabContext, TabPanel } from '@material-ui/lab';
import ListaPostagem from '../listapostagem/ListaPostagem';
import './TabPostagem.css';
import InstagramIcon from "@material-ui/icons/Instagram";
import GitHubIcon from "@material-ui/icons/GitHub";
import LinkedInIcon from "@material-ui/icons/LinkedIn";


function TabPostagem() {
    const [value, setValue] = useState('1')
    function handleChange(event: React.ChangeEvent<{}>, newValue: string){
        setValue(newValue);
    }
  return (
    <>
      <TabContext value={value}>
        <AppBar position="static">
          <Tabs centered indicatorColor="secondary" onChange={handleChange}>
            <Tab label="Todas as postagens" value="1"/>
            <Tab label="Sobre-nós" value="2" />
          </Tabs>
        </AppBar>
        <TabPanel value="1" >
          <Box display="flex" flexWrap="wrap" justifyContent="center">
            <ListaPostagem />
          </Box>
        </TabPanel>
        <TabPanel value="2">
        <Box className="card-fulano2">
          <img
            src="https://media-exp1.licdn.com/dms/image/C4D03AQHNu4WbuKYSDw/profile-displayphoto-shrink_800_800/0/1658838501880?e=1665014400&v=beta&t=YbLPVFJjH0dwqqBceA_yFtrxaNifoK1J0rZfmtNnppw"
            alt="avatar"
            className="avatar"
          />
          <Box className="card-fulano-text">
            <Button variant="text" className="botao-nav">
              Isabella
            </Button>
            <Box className="parte-texto-icones">
              <Typography
                variant="body2"
                className="text-sobrenos">
                Engenheira Cartógrafa e Agrimensora pela UNESP, Desenvolvedora Jr. pela Generation
                Brasil, estudante de Análise e Desenvolvimento de Sistemas e mestranda na area de
                agricultura de precisão na UNICAMP
              </Typography>
              <Box className="redessociais">
                <a href="https://www.linkedin.com/in/isabella-alves-da-cunha-a110011b9/overlay/contact-info/" target="_blank" rel="noopener noreferrer"  className="redessociais">
                  <InstagramIcon className="footer-icon redes-icon" />
                </a>
                <a href="https://github.com/isaacunha" target="_blank" rel="noopener noreferrer"  className="redessociais">
                  <GitHubIcon className="footer-icon redes-icon" />
                </a>
                <a href="https://www.linkedin.com/in/isabella-alves-da-cunha-a110011b9/" target="_blank" rel="noopener noreferrer"  className="redessociais">
                  <LinkedInIcon className="footer-icon redes-icon" />
                </a>
              </Box>
            </Box>
          </Box>
        </Box>
        </TabPanel>
      </TabContext>
    </>
  );
}
export default TabPostagem;