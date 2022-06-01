import Grid from '@mui/material/Grid';
import Card from './Card'
import useLogic from '../../Logic/CardsLogic'
import SearchBar from './SearchBar'
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';
import {createClasses} from "../../style/style";

export default function Cards() {
    const {cards, loading} = useLogic()
    const classes = createClasses()

    if (loading) {
        return (<Box sx={{display: 'flex'}}>
            <CircularProgress style={{width: "150px", height: "150px", marginBottom: "100px"}}/>
        </Box>);
    } else {
        return (<div className={classes.cardsContainer}>
            <SearchBar/>
            <Grid container justifyContent="center" spacing={2} >
                {cards?.map(card => (<Grid key={card._id} item>
                    <Card card={card}/>
                </Grid>))}
            </Grid>
        </div>);
    }

}
