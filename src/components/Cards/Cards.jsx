import React from 'react'
import styles from './Cards.module.css'
import { Card, CardContent, Typography, Grid } from '@material-ui/core'
import cx from 'classnames'
import CountUp from 'react-countup'


const Cards = ({ data:{confirmed, recovered, deaths, lastUpdate} }) => {
    if(!confirmed){
        return 'Loading... '
    }
    return (
        <div>
            <div className={styles.container}>
                <Grid container spacing={1} justify="center">
                  <Grid item component={Card} xs={12}  md={4} className={cx(styles.card, styles.infected)}>
                   <CardContent>
                       <Typography color='textSecondary' gutterBottom>
                          Infected
                       </Typography>
                       <Typography variant="h6">
                           <CountUp start={0}  end={confirmed.value} duration={2.5} separator=","/>
                          
                       </Typography>
                       <Typography color='textSecondary' >
                          {new Date(lastUpdate).toDateString()}
                       </Typography>
                       <Typography variant="body2">
                          Total Infections
                       </Typography>
                   </CardContent>
                  </Grid>

                  <Grid item component={Card} xs={12}  md={4} className={cx(styles.card, styles.recovered)}>
                   <CardContent>
                       <Typography color='textSecondary' gutterBottom>
                          Recovered
                       </Typography>
                       <Typography variant="h6">
                       <CountUp start={0} end={recovered.value} duration={2.5} separator=","/>
                          
                       </Typography>
                       <Typography color='textSecondary' >
                       {new Date(lastUpdate).toDateString()}
                       </Typography>
                       <Typography variant="body2">
                          Number of recoveries
                       </Typography>
                   </CardContent>
                  </Grid>

                  <Grid item component={Card} xs={12}  md={4}  className={cx(styles.card, styles.deaths)}>
                   <CardContent>
                       <Typography color='textSecondary' gutterBottom>
                          Deaths
                       </Typography>
                       <Typography variant="h6">
                       <CountUp start={0} end={deaths.value} duration={2.5} separator="," />
                       </Typography>
                       <Typography color='textSecondary' >
                       {new Date(lastUpdate).toDateString()}
                       </Typography>
                       <Typography variant="body2">
                          Number of deaths
                       </Typography>
                   </CardContent>
                  </Grid>

                  <Grid item component={Card} xs={12}  md={4}  className={cx(styles.card, styles.active)}>
                   <CardContent>
                       <Typography color='textSecondary' gutterBottom>
                          Active
                       </Typography>
                       <Typography variant="h6">
                           <CountUp start={0}  end={confirmed.value - (recovered.value + deaths.value)} duration={2.5} separator=","/>
                          
                       </Typography>
                       <Typography color='textSecondary' >
                          {new Date(lastUpdate).toDateString()}
                       </Typography>
                       <Typography variant="body2">
                          Active Cases
                       </Typography>
                   </CardContent>
                  </Grid>


                </Grid>
            </div>
        </div>
    )
}

export default Cards
