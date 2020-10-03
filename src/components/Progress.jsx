import React from 'react'
import { CircularProgress } from '@material-ui/core'
import { makeStyles } from '@material-ui/styles'

const Progress = () => {
  const classes = useStyles()
  return (
    <div className={classes.root}>
      <CircularProgress />
    </div>
  )
}

const useStyles = makeStyles({
  root: { display: 'grid', justifyContent: 'center' },
})

export default Progress
