import React, { useEffect, useState } from "react";
import {get,ref,remove} from 'firebase/database'
import {db } from '../config/Firebase'
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

const bull = (
    <Box
      component="span"
      sx={{ display: 'inline-block', mx: '1px', transform: 'scale(0.8)' }}
    >
      •
    </Box>
  );

function Home2(){

    let [user,setuser]=useState([])

    
    const chgdata=()=>{
        // user=[]
        setuser([])
        let dvref = ref(db,"user")
        const data = get(dvref).then((snap)=>{
            console.log(snap.val())
            let value = Object.values(snap.val())
            console.log(value)
            setuser(value)
        })
        .catch((E)=>{
            console.log(E)
        })
    }
    

    //only first time 
    useEffect(()=>{

        let dvref = ref(db,"user")
        const data = get(dvref).then((snap)=>{
            console.log(snap.val())
            let value = Object.values(snap.val())
            console.log(value)
            setuser(value)
        })
        .catch((E)=>{
            console.log(E)
        })
    },[])

    const removedata =async(uid)=>{
        console.log(uid)
        let dvref = ref(db,`user/${uid}`)
        try{
            await remove(dvref)
            // alert("delete")
            chgdata()

            // edit

            // await set(dvref,{
            //     email:"sdhasjdh"
            // })
        }
        catch(e){
            alert(e)
        }
    
  
    }

    return(
        <>
        <h1>user list</h1>
    {
        user.map((v,i)=>{
            return (
                <Card sx={{ minWidth: 275 }} style={{border:"1px solid red",margin:"3%"}}>
                <CardContent>
                  <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                  {v.email}
                  </Typography>
                  <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                  {v.education}
                  </Typography>
                
                </CardContent>
                <CardActions>
                  <Button size="small" onClick={()=>removedata(v.uid)}>Delete</Button>
                </CardActions>
              </Card>
            )
        })
    }
        </>
    )
}
export default Home2;