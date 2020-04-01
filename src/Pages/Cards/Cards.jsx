import React from 'react';
import moment from 'moment';
import { makeStyles } from '@material-ui/core/styles';
import { cardsInfo } from '../../constants';
import PaymentBlock from '../../components/PaymentBlock/PaymentBlock.jsx';

const useStyles = makeStyles(() => ({
  homeTopSection: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'baseline',
    alignItems: 'center',
    height: '100vh',
    background: '#e5e5e5',
  },
  bigBlock: {
    marginTop: 30,
    justifyContent: 'center',
    maxWidth: 900,
    width: '-webkit-fill-available',
    borderRadius: 2,
    background: '#fff',
  },
  header: {
    display: 'flex',
    alignItems: 'center',
    fontSize: 18,
    fontWeight: 700,
    padding: 15,
  },
  blueCircle: {
    width: 12,
    height: 12,
    borderRadius: 6,
    background: '#4671aa',
    marginRight: 15,
  },
}));

const Cards = () => {
  const classes = useStyles();
  const twoWeeksAgo = moment().subtract(2, 'week');

  return (
    <div className={classes.homeTopSection}>
      <div className={classes.bigBlock}>
        {cardsInfo.map((card) => (
          twoWeeksAgo <= moment(card.nextPaymentDate)
          && (<PaymentBlock card={card} key={Math.random()} />)
        ))}
      </div>
      <div className={classes.bigBlock}>
        <div className={classes.header}>
          <div className={classes.blueCircle} />
              In 2 Weeks
        </div>
        {cardsInfo.map((card) => (
          twoWeeksAgo > moment(card.nextPaymentDate)
          && (<PaymentBlock card={card} key={Math.random()} />)
        ))}
      </div>
    </div>
  );
};

export default Cards;
