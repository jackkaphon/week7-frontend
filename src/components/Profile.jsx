import React, { useEffect, useState } from 'react'
import { Typography, Box, Stack, TextField, Container } from '@mui/material'
import Img from '../images/profile.jpeg'
import axios from 'axios'

export default function Profile() {
    const [userInfo, setuserInfo] = useState({})

    useEffect(() => {
        axios({
            url: 'http://localhost:3000/user/1',
            method: 'get'
        }).then(res => {
            setuserInfo(res.data[0])

            // const data = [
            //     {id: 1, label: "username", value: res.data[0].username},
            //     {id: 2, label: "firstname", value: res.data[0].username},
            // ]
        })
    }, [])

    return (
        <Container maxWidth='xl'>
            <Stack flexDirection={'row'} spacing={2} >
                <img src={Img} alt='' width='20%' style={{ borderRadius: 1800 }} />
                <Box>
                    <Typography variant='h3'>Jack Venevankham</Typography>
                    <Typography variant='subtitle1'>Software Developer</Typography>
                </Box>
            </Stack>

            <Stack spacing={2}>
                <Typography variant='h3'>Account</Typography>

                <Box display={'flex'} alignItems="center">
                    <Box flex={1}>
                        <Typography variant='h6'>Username:</Typography>
                    </Box>
                    <Box flex={2} >
                        <TextField label='Username' fullWidth value={userInfo.username || ""}/>
                    </Box>
                </Box>

                <Box display={'flex'} alignItems="center">
                    <Box flex={1}>
                        <Typography variant='h6'>Firstname:</Typography>
                    </Box>
                    <Box flex={2} >
                        <TextField label='Firstname' fullWidth value={userInfo.firstname || ""}/>
                    </Box>
                </Box>

                <Box display={'flex'} alignItems="center">
                    <Box flex={1}>
                        <Typography variant='h6'>Lastname:</Typography>
                    </Box>
                    <Box flex={2} >
                        <TextField label='Lastname' fullWidth value={userInfo.lastname || ""}/>
                    </Box>
                </Box>

                <Box display={'flex'} alignItems="center">
                    <Box flex={1}>
                        <Typography variant='h6'>Email:</Typography>
                    </Box>
                    <Box flex={2} >
                        <TextField label='Email' fullWidth value={userInfo.email || ""}/>
                    </Box>
                </Box>

                <Box display={'flex'} alignItems="center">
                    <Box flex={1}>
                        <Typography variant='h6'>Password:</Typography>
                    </Box>
                    <Box flex={2} >
                        <TextField label='Password' fullWidth value={userInfo.password || ""}/>
                    </Box>
                </Box>
            </Stack>
        </Container>
    )
}
