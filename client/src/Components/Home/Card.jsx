import FAQs from "./FAQs";
import {createClasses} from "../../style/style";

export default function Card(props) {
    const {card} = props
    const classes = createClasses()

    return (
        <div className={classes.card} style={{background: 'rgb(208,246,255) '}}>
            <h4>{card.search}?</h4>
            <FAQs questions={card.data}/>
        </div>
    )
}

