import React from 'react';
import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import useLogic from '../../Logic/SearchBarLogic'

export default function CustomizedInputBase() {

    const {setSearch, submit} = useLogic()

    return (
        <Paper
            style={{marginBottom: "25px"}}
            sx={{p: '2px 4px', display: 'flex', alignItems: 'center', width: 400}}
        >
            <InputBase
                sx={{ml: 1, flex: 1}}
                placeholder="Search"
                onChange={(e) => setSearch(e.target.value)}
            />
            <Divider sx={{height: 28, m: 0.5}} orientation="vertical"/>

            <IconButton type="submit" sx={{p: '10px'}} onClick={submit}>
                <SearchIcon/>
            </IconButton>
        </Paper>
    );
}
