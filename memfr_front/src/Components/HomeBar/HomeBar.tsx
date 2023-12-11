import {Grid} from "@mui/material";
import "./homebar.scss"


export function HomeBar(){

    return(<>
        <h2 className={"title"}>MEMCETERA</h2>
        <Grid container flexDirection={"row"} className={"home-bar"}>
            <Grid item className={"item"}>Mon compte</Grid>
            <Grid item className={"item"}>Page d'accueil</Grid>
            <Grid item className={"item"}>Recherche (mème)</Grid>
            <Grid item className={"item"}>Recherche (vidéo)</Grid>
        </Grid>
    </>)
    
}