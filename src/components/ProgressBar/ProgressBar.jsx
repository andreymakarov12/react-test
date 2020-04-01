import React from 'react';
import formatter from 'usd-formatter';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
  root: {
    display: 'flex',
    flexWrap: 'nowrap',
    width: '-webkit-fill-available',
  },
  paid: {
    display: 'flex',
    flexDirection: 'column',
    textAlignLast: 'center',
    color: '#4671aa',
    fontSize: 14,
    fontWeight: 600,
  },
  notPaid: {
    display: 'flex',
    flexDirection: 'column',
    width: 'inherit',
    fontSize: 10,
    fontWeight: 500,
    color: '#949dad',
    textAlignLast: 'right',
  },
  progressLine: {
    height: 8,
    marginBottom: 6,
  },
}));

const ProgressBar = ({ barMax, barPaid }) => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <div className={classes.paid} style={{ width: `calc(100%  * ${barPaid} / ${barMax})` }}>
        <span className={classes.progressLine} style={{ background: '#4671aa' }} />
        <div>{formatter(barPaid).slice(0, -3)}</div>
      </div>
      <div className={classes.notPaid}>
        <span className={classes.progressLine} style={{ background: '#d0dbe7' }} />
        <div>{`Paid of ${formatter(barMax).slice(0, -3)}`}</div>
      </div>
    </div>
  );
};

export default ProgressBar;
