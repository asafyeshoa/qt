import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import PsychologyIcon from '@mui/icons-material/Psychology';
import {Link} from 'react-router-dom'

const ResponsiveAppBar = () => {


    const pages = [{text: 'home', route: '/'}, {text: 'About me', route: '/about'}];


    return (
        <AppBar position="static" style={{ background: '#590D82', width: "100%" }} >
            <Container>
                <Toolbar disableGutters>
                    <PsychologyIcon sx={{display: {xs: 'none', md: 'flex'}, mr: 1}}/>
                    <Typography
                        variant="h6"
                        noWrap
                        component="a"
                        sx={{
                            mr: 2,
                            display: {xs: 'none', md: 'flex'},
                            fontFamily: 'monospace',
                            fontWeight: 700,
                            letterSpacing: '.3rem',
                            color: 'inherit',
                            textDecoration: 'none',
                        }}
                    >
                        Queue Task
                    </Typography>
                    <PsychologyIcon sx={{display: {xs: 'flex', md: 'none'}, mr: 1}}/>
                    <Typography
                        variant="h5"
                        noWrap
                        component="a"
                        sx={{
                            mr: 2,
                            display: {xs: 'flex', md: 'none'},
                            flexGrow: 1,
                            fontFamily: 'monospace',
                            fontWeight: 700,
                            letterSpacing: '.3rem',
                            color: 'inherit',
                            textDecoration: 'none',
                        }}
                    >
                        Queue
                    </Typography>
                    <Box sx={{flexGrow: 1, display: {xs: 'flex', md: 'flex'}}}>
                        {pages.map((page) => (
                            <Button
                                key={page.text}
                                sx={{my: 2, color: 'white', display: 'block'}}
                            >
                                <Link to={`${page.route}`}>{page.text}</Link>

                            </Button>
                        ))}
                    </Box>

                    <Box sx={{flexGrow: 0}}>
                        <Avatar alt="Asaf yeshoa" src="https://bit.ly/3t0TcXq"/>
                    </Box>
                </Toolbar>
            </Container>
        </AppBar>
    );
};
export default ResponsiveAppBar;
