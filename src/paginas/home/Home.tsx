import React from 'react';
import {Button, Box, Paper} from '@material-ui/core';
import './Home.css';

function Home(){
    return (
        <>
           <Paper>
               <Box p={2}>
                   <Box display="flex" justifyContent="center">
                       <h1>Título</h1>
                   </Box>
                   <img src="https://i.imgur.com/zgkTqxS.jpeg" alt="" style={{width: "100%", height: "100%"}}/>
                   <Box display="flex" justifyContent="center" p={2}>
                       <Button variant="contained" color="primary">Texto 1</Button>
                       <Button variant="contained" color="secondary">Texto 2</Button>
                    </Box>
               </Box>
           </Paper>
        </>
    );
}

export default Home;


/* <Grid container spacing={2}> 
<Grid item xs={12} sm={8} >
<Paper style={{height: "100vh", background: "Pink" }} />

</Grid>

<Grid item container direction ="column" xs={12} sm={4} spacing={2}>
<Grid item>
    <Paper style={{height: "49vh", background: "red" }}/>

</Grid>

<Grid item>
    <Paper style={{height: "49vh", background: "orange" }}/>

</Grid >

</Grid>

</Grid> */