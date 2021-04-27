import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Paper } from "@material-ui/core";
import { Grid } from "@material-ui/core";
import { Typography } from "@material-ui/core";
import { Button } from "@material-ui/core";
import SearchBar from "material-ui-search-bar";

const useStyles = makeStyles((theme) => ({
  root: {
    margin:30,
    spacing:20,
  },
  resize: {
    fontSize: 14,
  },
  paper:{
      padding:40,
      height:250,
  },
  button:{
      backgroundColor:"#0e5c63",
      color:"white",
      marginBottom:10,
      height:30,
      textTransform: 'none',
      '&:hover': {
        backgroundColor: '#12454a',
        boxShadow: 'none',
      },
  },
  searchbar:{
      height:30,
      marginRight:10,
  }
}));

export default function Helpboard() {
  const classes = useStyles();
  
  return (
      
    <div className={classes.root}>
        <Typography style={{color: "black",fontSize:25,textAlign:"left"}}>Help Board</Typography>
        <div style={{display:"flex",justifyContent:"flex-end"}}>
        <SearchBar
            onChange={() => console.log('onChange')}
            onRequestSearch={() => console.log('onRequestSearch')}
            className={classes.searchbar}
        />
            <Button className={classes.button}>Add New</Button>
        </div>
        <Grid container spacing={2} direction="row" alignContent="left" justify="flex-start">
        <Grid item xs={4}>
        <Paper elevation={3} className={classes.paper}>
          <div style={{ textAlign: "left"}}>
          <Typography variant="subtitle2" gutterBottom style={{color: "black",fontSize:16}}>Interviewing with Apple soon</Typography>
            <Typography variant="subtitle2" gutterBottom style={{paddingTop:10,color: "grey",fontSize:12}}>Help Type</Typography>
            <Typography variant="body2" gutterBottom style={{color: "black"}}>Mock Interview</Typography>
            <Typography variant="subtitle2" gutterBottom style={{paddingTop:10,color: "grey",fontSize:12}}>Requestor</Typography>
            <Typography variant="body2" gutterBottom style={{color: "#6ea8cc"}}>Kevin H.</Typography>
            <Typography variant="subtitle2" gutterBottom style={{paddingTop:10,color: "grey",fontSize:12}}>Created on</Typography>
            <Typography variant="body2" gutterBottom style={{color: "black"}}>04/01/2021 3:32 PM</Typography>
          </div>
      </Paper>
      </Grid>
      <Grid item xs={4}>
        <Paper elevation={3} className={classes.paper}>
          <div style={{ textAlign: "left"}}>
          <Typography variant="subtitle2" gutterBottom style={{color: "black",fontSize:16}}>Want to shadow a Software Engineer</Typography>
            <Typography variant="subtitle2" gutterBottom style={{paddingTop:10,color: "grey",fontSize:12}}>Help Type</Typography>
            <Typography variant="body2" gutterBottom style={{color: "black"}}>Job Shadowing</Typography>
            <Typography variant="subtitle2" gutterBottom style={{paddingTop:10,color: "grey",fontSize:12}}>Requestor</Typography>
            <Typography variant="body2" gutterBottom style={{color: "#6ea8cc"}}>Kevin H.</Typography>
            <Typography variant="subtitle2" gutterBottom style={{paddingTop:10,color: "grey",fontSize:12}}>Created on</Typography>
            <Typography variant="body2" gutterBottom style={{color: "black"}}>04/01/2021 3:32 PM</Typography>
          </div>
      </Paper>
      </Grid>
      <Grid item xs={4}>
        <Paper elevation={3} className={classes.paper}>
          <div style={{ textAlign: "left"}}>
          <Typography variant="subtitle2" gutterBottom style={{color: "black",fontSize:16}}>I need to review cover letter for job app</Typography>
            <Typography variant="subtitle2" gutterBottom style={{paddingTop:10,color: "grey",fontSize:12}}>Help Type</Typography>
            <Typography variant="body2" gutterBottom style={{color: "black"}}>Cover Letter Review</Typography>
            <Typography variant="subtitle2" gutterBottom style={{paddingTop:10,color: "grey",fontSize:12}}>Requestor</Typography>
            <Typography variant="body2" gutterBottom style={{color: "#6ea8cc"}}>Casey Smith</Typography>
            <Typography variant="subtitle2" gutterBottom style={{paddingTop:10,color: "grey",fontSize:12}}>Created on</Typography>
            <Typography variant="body2" gutterBottom style={{color: "black"}}>04/01/2021 3:32 PM</Typography>
          </div>
      </Paper>
      </Grid>
      <Grid item xs={4}>
        <Paper elevation={3} className={classes.paper}>
          <div style={{ textAlign: "left"}}>
          <Typography variant="subtitle2" gutterBottom style={{color: "black",fontSize:16}}>Accounting student, want to connect with other aspiring accountants!</Typography>
            <Typography variant="subtitle2" gutterBottom style={{paddingTop:10,color: "grey",fontSize:12}}>Help Type</Typography>
            <Typography variant="body2" gutterBottom style={{color: "black"}}>Networking</Typography>
            <Typography variant="subtitle2" gutterBottom style={{paddingTop:10,color: "grey",fontSize:12}}>Requestor</Typography>
            <Typography variant="body2" gutterBottom style={{color: "#6ea8cc"}}>Rosa Huang</Typography>
            <Typography variant="subtitle2" gutterBottom style={{paddingTop:10,color: "grey",fontSize:12}}>Created on</Typography>
            <Typography variant="body2" gutterBottom style={{color: "black"}}>04/01/2021 3:32 PM</Typography>
          </div>
      </Paper>
      </Grid>
      <Grid item xs={4}>
        <Paper elevation={3} className={classes.paper}>
          <div style={{ textAlign: "left"}}>
          <Typography variant="subtitle2" gutterBottom style={{color: "black",fontSize:16}}>Trying to understand what is Consulting</Typography>
            <Typography variant="subtitle2" gutterBottom style={{paddingTop:10,color: "grey",fontSize:12}}>Help Type</Typography>
            <Typography variant="body2" gutterBottom style={{color: "black"}}>Informational Interview</Typography>
            <Typography variant="subtitle2" gutterBottom style={{paddingTop:10,color: "grey",fontSize:12}}>Requestor</Typography>
            <Typography variant="body2" gutterBottom style={{color: "#6ea8cc"}}>Elaine Chang</Typography>
            <Typography variant="subtitle2" gutterBottom style={{paddingTop:10,color: "grey",fontSize:12}}>Created on</Typography>
            <Typography variant="body2" gutterBottom style={{color: "black"}}>04/01/2021 3:32 PM</Typography>
          </div>
      </Paper>
      </Grid>
      </Grid>
    </div>
  );
}