import {makeStyles} from '@mui/styles';

export const createClasses = makeStyles({
    homePageContainer: {
        display: "flex",
        alignItems: "center",
        minHeight: "92vh",
        flexDirection: "column",
        justifyContent: "space-evenly"
    },
    aboutPageContainer: {
        display: "flex",
        alignItems: "center",
        minHeight: "92vh",
        flexDirection: "column",
        justifyContent: "space-evenly"
    },
    header: {
        margin: "25px 0px 50px 0px"
    },
    infoPage: {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        minHeight: "92vh",
        width: "89%",
        padding: "20px",
        flexWrap: 'wrap'
    },
    cardsContainer: {
        display: "flex",
        justifyContent: "space-around",
        alignItems: "center",
        flexDirection: "column",
        minHeight: "40vh",
    },
    card: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        flexWrap: "wrap",
        minHeight: "200px",
        minWidth: "260px",
        backGround: "linear-gradient(0deg, rgba(208,246,255,1) 8%, rgba(245,201,253,1) 64%)"
    }
})
