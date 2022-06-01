import Images from "../Components/About/Images"
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid"
import Typography from "@mui/material/Typography";
import {createClasses} from "./../style/style"

function AboutPage() {
    const classes = createClasses()


    return (<Typography variant='div' className={classes.aboutPageContainer}>
        <h1>About me</h1>
        <Paper className={classes.infoPage}>
            <Grid container justifyContent="center" spacing={2}>
                <Grid item>

                    <div style={{width: '50%', height: '100%'}}>
                        <h2 style={{textAlign: "center"}}>Asaf Yeshoa</h2>
                        <Typography variant="p">

                            I’m Asaf, a Full Stack developer experienced with React, NodeJS and MongoDB. <br/>
                            With the ability to build end-to-end web platforms <br/>
                            that increase user engagement and sales. <br/>
                            Motivated for my next challenge <br/> in a company that is looking for a quick learner to
                            develop its <br/>
                            core application and find innovative solutions to complex problems.<br/> <br/> <br/> <br/><br/>


                            I grew up in Kiryat Yam<br/>
                            I have gained a lot of experiences in life including long trips,<br/>
                            Working abroad, international conferences, companies and various professions I have worked
                            for during my life<br/>
                            I like to study and usually study on my own<br/>
                            My main hobbies are fitness and computer games<br/>

                            Currently looking for a full-time job with priority for work from the office<br/>
                            I very much connect to your product and <br/>look forward to being an authority in
                            development :)<br/>

                        </Typography>
                    </div>
                </Grid>
                <Grid item>
                    <Images/>
                </Grid>

            </Grid>

        </Paper>
    </Typography>);
}

export default AboutPage;
