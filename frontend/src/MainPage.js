import React from 'react'
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';





const style = {
    backgroundColor: "#F8F8F8",
    borderTop: "1px solid #E7E7E7",
    textAlign: "center",
    padding: "20px",
    position: "fixed",
    left: "0",
    bottom: "0",
    height: "2.5%",
    width: "100%"
};


export default function MainPage() {
  return (
    <div style={{backgroundImage: `url("https://cdn.pixabay.com/photo/2021/02/12/20/02/abstract-6009478_960_720.jpg")`, backgroundRepeat: "no-repeat", height: '93vh', backgroundSize: "cover"}}>
    <Box 
        display="flex" 
        width={500} height={40} 
        alignItems="center"
        justifyContent="center"
    >
    </Box>    
    <Grid
    container spacing={1}
    direction="column"
    alignItems="center"
    // justifyContent="center"
    >
        <Grid item xs={3}>
        </Grid>

        <Grid item xs={6} alignItems="center">
            <Button variant="contained" color="info" size="small">
                Refresh
            </Button>
        </Grid>

        <Grid item xs={3}>
        </Grid>
 
        <Grid item xs={12}>
        <Button variant="outlined" color='secondary'>Alexa, what time does the nearest Costco close?</Button>
        </Grid>
 
        <Grid item xs={12}>
        <Button variant="outlined" color='secondary'>Alexa, How far is the nearest chick-fil-a?</Button>
        </Grid>

    </Grid>

    <Box 
            display="flex" 
            width={500} height={40} 
            alignItems="center"
            justifyContent="center"
    >
    </Box>
    
    
    <div style={{color: "indigo"}}>Top recommendations for you:</div>

    <Box 
            display="flex" 
            width={500} height={15} 
            alignItems="center"
            justifyContent="center"
    >
    </Box>

    <Grid 
    container 
    spacing={6}
    >

        <Grid item xs={3}>
            <Card sx={{ maxWidth: 330 }}>
                <CardActionArea>
                    <CardMedia
                    component="img"
                    height="140"
                    image="http://www.chick-fil-a.com/-/media/images/cfacom/default-images/chick-fil-a-logo-vector.ashx"
                    alt="Chick-fil-a"
                    />
                    <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        Chick-Fil-A
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                    </Typography>
                    </CardContent>
                </CardActionArea>
            </Card>
        </Grid>

        <Grid item xs={3}>
            <Card sx={{ maxWidth: 330 }}>
                <CardActionArea>
                    <CardMedia
                    component="img"
                    height="140"
                    image="https://cdn.myportfolio.com/39d3cd982d61c808e7a53d0503ef44a8/7d8794ea-fa06-4963-9320-5a1110e04b17_rw_1920.jpg?h=529c8411937e289c15c94ce08ddb58e3"
                    alt="Starbucks"
                    />
                    <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        Starbucks 
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                    </Typography>
                    </CardContent>
                </CardActionArea>
            </Card>
        </Grid>
        
        <Grid item xs={3}>
            <Card sx={{ maxWidth: 330 }}>
                <CardActionArea>
                    <CardMedia
                    component="img"
                    height="140"
                    image="https://wallpapers.com/images/high/burger-king-logo-uc6b45x83r51xu9v.jpg"
                    alt="Burger King"
                    />
                    <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        Burger King
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                    </Typography>
                    </CardContent>
                </CardActionArea>
            </Card>
        </Grid>

        
        <Grid item xs={3}>
            <Card sx={{ maxWidth: 330 }}>
                <CardActionArea>
                    <CardMedia
                    component="img"
                    height="140"
                    image="https://mir-s3-cdn-cf.behance.net/project_modules/2800_opt_1/9b52ed47965095.588a2e76cb4f6.jpg"
                    alt="McDonald's"
                    />
                    <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        McDonald's
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                    </Typography>
                    </CardContent>
                </CardActionArea>
            </Card>
        </Grid>


    </Grid>

    <Box 
            display="flex" 
            width={500} height={20} 
            alignItems="center"
            justifyContent="center"
        >
    </Box>

        <Grid
        container spacing={3}
        // direction="column"
        // alignItems="center"
        // justifyContent="center"
        >

            <Grid item xs={8}>

                <div class="picture1">&nbsp;</div>

            </ Grid>

            <Grid item xs={4}>

                <Card sx={{ maxWidth: 320 }}>
                    <CardActionArea>
                        <CardMedia
                        component="img"
                        height="140"
                        image="https://brandlogos.net/wp-content/uploads/2013/05/target-stores-vector-logo.png"
                        alt="10% off at TARGET near you!"
                        />
                        <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            Ad: 10% off at the nearest TARGET!
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                        </Typography>
                        </CardContent>
                    </CardActionArea>
                </Card>
            </Grid>
        
        </Grid>
    <div style={style}>Sponsored by: (Target at hfuu, 10% Off)</div>
    </div>
  )
}