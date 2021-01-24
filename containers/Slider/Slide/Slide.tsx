import {
  Box, Button, makeStyles, Typography,
} from '@material-ui/core';
import React from 'react';

interface IProps {
  link: string;
  buttonText: string;
  title: string;
  description: string;
  color: 'primary' | 'secondary' | 'inherit';
}

const useStyles = makeStyles((theme) => ({
  root: {
    position: 'relative',
    height: '100%',
    maxHeight: '482px',

    '& img': {
      width: '100%',
      height: '482px',
    },
  },
  content: {
    position: 'absolute',
    bottom: '120px',
    left: '80px',
  },
  title: {
    fontSize: '20px',
    marginBottom: theme.spacing(4),
  },
  description: {
    fontSize: '16px',
    marginBottom: theme.spacing(4),
  },
}));

const Slide: React.FC<IProps> = ({
  children,
  color = 'primary',
  buttonText,
  title,
  description,
  link,
  ...rest
}) => {
  const clasess = useStyles();
  return (
    <Box className={clasess.root}>
      {children}
      <Box className={clasess.content}>
        <Typography className={clasess.title}>{title}</Typography>
        <Typography className={clasess.description}>{description}</Typography>
        <Button color={color} variant="contained">
          {buttonText}
        </Button>
      </Box>
    </Box>
  );
};

export default Slide;
