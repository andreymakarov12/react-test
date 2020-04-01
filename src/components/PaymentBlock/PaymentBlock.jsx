import React from 'react';
import clsx from 'clsx';
import moment from 'moment';
import formatter from 'usd-formatter';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import ProgressBar from '../ProgressBar/ProgressBar.jsx';
import PaydBadge from '../PaydBadge/PaydBadge.jsx';

const useStyles = makeStyles(() => ({
  col: {
    display: 'flex',
    flexDirection: 'column',
  },
  row: {
    display: 'flex',
    justifyContent: 'space-between',
  },
  body: {
    display: 'flex',
    border: '1px solid #ddd',
    padding: 15,
    '@media (max-width: 650px)': {
      flexDirection: 'column',
    },
  },
  name: {
    display: 'flex',
    justifyContent: 'space-between',
    fontSize: 18,
    fontWeight: 500,
    marginBottom: 15,
  },
  image: {
    minWidth: 160,
    minHeight: 100,
  },
  values: {
    padding: '5px 15px',
    flexWrap: 'nowrap',
    justifyContent: 'space-between',
    alignItems: 'center',
    '@media (max-width: 650px)': {
      padding: '5px 15px 5px 0',
    },
    '@media (max-width: 470px)': {
      maxWidth: 200,
      padding: '5px 0 5px 0',
    },
  },
  placeholder: {
    fontSize: 12,
    fontWeight: 600,
    color: '#949dad',
  },
  value: {
    fontSize: 12,
    fontWeight: 600,
    color: '#333',
    marginLeft: 10,
  },
  smallText: {
    fontSize: 10,
  },
  moreIcon: {
    marginTop: '-7px',
    marginLeft: 15,
    color: '#949dad',
    cursor: 'pointer',
    '&:hover': {
      color: '#777',
    },
  },
  button: {
    textTransform: 'none',
    marginTop: 10,
    marginLeft: 15,
    whiteSpace: 'nowrap',
    textOverflow: 'ellipsis',
    '@media (max-width: 470px)': {
      marginLeft: 0,
    },
  },
  paidBadge: {
    marginTop: 17,
    '@media (max-width: 470px)': {
      marginTop: 0,
    },
  },
  mainCol: {
    placeContent: 'space-evenly',
    width: '-webkit-fill-available',
  },
  mainRow: {
    '@media (max-width: 470px)': {
      flexDirection: 'column',
    },
  },
  bar: {
    padding: '5px 0 5px 15px',
    flexWrap: 'nowrap',
    justifyContent: 'space-between',
    '@media (max-width: 650px)': {
      padding: '15px 0 5px 0',
    },
  },
}));

const PaymentBlock = ({ card }) => {
  const classes = useStyles();
  const matches = useMediaQuery('(min-width: 470px)');

  return (
    <div>
      <div className={classes.body}>
        <div className={classes.col}>
          <div className={classes.name}>
            {card.cardName}
            {!matches && <PaydBadge content='Paid' isPaid className={classes.paidBadge} />}
          </div>
          <div
            className={classes.image}
            style={{ background: `url(${card.cardImage}) no-repeat`, backgroundSize: 'contain' }}
          />
        </div>
        <div className={clsx(classes.col, classes.mainCol)}>
          <div className={clsx(classes.row, classes.bar)}>
            <ProgressBar barMax={card.barMax} barPaid={card.barPaid} />
            <MoreHorizIcon className={classes.moreIcon} />
          </div>
          <div className={clsx(classes.row, classes.mainRow)}>
            <div className={classes.col}>
              <div className={clsx(classes.row, classes.values)}>
                <div className={classes.placeholder}>
                  Balance
                </div>
                <div className={classes.value}>
                  {formatter(card.balance).slice(0, -3)}
                </div>
              </div>
              <div className={clsx(classes.row, classes.values)}>
                <div className={classes.placeholder}>
                  Next Payment
                </div>
                <div className={classes.value}>
                  {formatter(card.nextPayment).slice(0, -3)}
                </div>
              </div>
              <div className={clsx(classes.row, classes.values)}>
                <div className={classes.placeholder}>
                  Last Payment
                </div>
                <div className={classes.value}>
                  {formatter(card.lastPayment).slice(0, -3)}
                </div>
              </div>
            </div>
            <div className={classes.col}>
              <div className={clsx(classes.row, classes.values)}>
                <div className={classes.placeholder}>
                  Interest
                </div>
                <div className={classes.value}>
                  {card.interest.apr}
                  %
                </div>
              </div>
              <div className={clsx(classes.row, classes.values)}>
                <div className={clsx(classes.placeholder, classes.smallText)}>
                  {`Interest: ${formatter(card.interest.interestPaid).slice(0, -3)}`}
                </div>
                <div
                  className={clsx(classes.placeholder, classes.smallText)}
                  style={{ marginLeft: 15 }}
                >
                  {`principal: ${formatter(card.interest.principal).slice(0, -3)}`}
                </div>
              </div>
            </div>
            {matches
              ? (
                <>
                  <div className={classes.col} style={{ textAlign: '-webkit-right' }}>
                    <div className={classes.placeholder} style={{ whiteSpace: 'nowrap' }}>
                      Next Payment
                    </div>
                    <PaydBadge content='Paid' isPaid className={classes.paidBadge} />
                  </div>
                  <div className={classes.col} style={{ textAlign: '-webkit-right' }}>
                    <div className={classes.value}>
                      {moment(card.nextPaymentDate).format('MMMM D , YYYY')}
                    </div>
                    <Button variant="contained" color="primary" className={classes.button}>
                      Make Payment
                    </Button>
                  </div>
                </>
              )
              : (
                <>
                  <div className={clsx(classes.row, classes.values)}>
                    <div className={classes.placeholder}>
                      Next Payment
                    </div>
                    <div className={classes.value}>
                      {moment(card.nextPaymentDate).format('MMMM D , YYYY')}
                    </div>
                  </div>
                  <Button variant="contained" color="primary" className={classes.button}>
                    Make Payment
                  </Button>
                </>
              )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaymentBlock;
