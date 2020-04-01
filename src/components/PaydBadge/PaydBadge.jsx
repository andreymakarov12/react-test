import React from 'react';
import Badge from '@material-ui/core/Badge';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';

const useStyles = makeStyles(() => ({
  badge: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    whiteSpace: 'nowrap',
    padding: '5px 15px',
    color: '#fff',
    lineHeight: '100%',
    width: 'fit-content',
    cursor: 'default',
  },
  medium: {
    fontSize: 12,
    borderRadius: 12,
  },
  paid: {
    background: '#43b931',
  },
  unpaid: {
    background: '#ff383b',
  },
}));

export default function CustomBadge(props) {
  const classes = useStyles();
  const {
    content = 'Paid', size = 'medium', isPaid = true, className,
  } = props;

  const badgeClassName = clsx(classes.badge, {
    [classes.medium]: size === 'medium',
    [classes.paid]: isPaid === true,
    [classes.unpaid]: isPaid === false,
  }, className);

  return (
    <Badge className={badgeClassName}>
      {content}
    </Badge>
  );
}
