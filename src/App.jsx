import React, { useState } from "react";
import {PhotoCamera} from '@material-ui/icons'
import Grow from '@material-ui/core/Grow'
import {Typography,Button,AppBar,Card,CardActions,CardContent,CardMedia,CssBaseline,Grid,Toolbar,Container,List,ListItem,Avatar} from '@material-ui/core'
import Drawer from '@material-ui/core/Drawer';
import useStyles from './styles'

function App() {
   const classes = useStyles();
   const [open,setOpen]  = useState(true)
   return (
     <>
         <AppBar className={classes.appBar} position='relative' color='transparent'>
            <Toolbar >
                  <PhotoCamera/>
                  <Typography variant='h6'>
                     Photo Album</Typography>
            </Toolbar>
            </AppBar> 
            <main>
               <Drawer anchor={'left'} open={open}  onClose={()=>setOpen(false)}>

      <List className={classes.list}>
         <Avatar src='https://source.unsplash.com/random' alt='Profile picture'/>
         <ListItem button >
            Item 
         </ListItem>
          <ListItem button >
            Item 
         </ListItem>
          <ListItem button >
            Item 
         </ListItem>
      </List>

               </Drawer>
               <div className={classes.container}>
                  <Container maxWidth='sm'>
                     <Typography variant='h2' align='center' color='textPrimary' >
                        Photo Album
                     </Typography>

                     <Typography variant='h5' color='textSecondary' paragraph align='center'  >
                      Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore qui, facilis nihil corrupti ullam veniam?
                     </Typography>

                   <Grid container spacing={2} justify='center'>
                      <Grid item>
                     <Button variant='contained' color='primary'>DOWNLOAD</Button> 

                      </Grid>

                     <Grid item>
                     <Button variant='outlined' >Docs</Button> 
                      </Grid>

                  </Grid>
                  <Container maxWidth='xl' >
                      <Grid container spacing={4}>
              <Grid container xs={12}>
                  {['Title','Title','Title','Title','Title'].map((i)=>(<Grow in><Card style={{margin:'20px '}}>
                     
                        <CardMedia>
                           <Typography variant='h3'>{i}</Typography>
                        </CardMedia>
                        <CardContent>
                           <Typography variant='h6' color='textSecondary' paragraph>This is a paragraph, a testm hyrasu EEE!!</Typography>
                        </CardContent>
                     </Card></Grow>) )}


            </Grid>
         </Grid>
         </Container>
          
                  </Container> 
        

               </div> 
           </main>
              
     </>
     
   );
}

export default App;
