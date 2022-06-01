import React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import ListItemText from '@mui/material/ListItemText';
import Typography from '@mui/material/Typography';

export default function FAQs(props) {
    const {questions} = props
    return (
        <List sx={{width: '100%', maxWidth: 400, bgcolor: 'background.paper'}}>
            {questions?.map(question => {
                return (
                    <div key={question.question} >
                        <ListItem alignItems="flex-start">
                            <ListItemText
                                primary={`${question.question}?`}
                                secondary={
                                    <React.Fragment>
                                        <Typography
                                            sx={{display: 'inline'}}
                                            component="span"
                                            variant="body2"
                                            color="text.primary"
                                        >
                                            {question.answer}
                                        </Typography>
                                    </React.Fragment>
                                }
                            />
                        </ListItem>
                        <Divider/>
                    </div>
                )
            })}

        </List>
    );
}
