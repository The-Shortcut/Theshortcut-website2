import React, { useState } from 'react';

// Material-UI
import { makeStyles } from '@material-ui/core/styles';
import { Popper, Fade, IconButton } from '@material-ui/core';
import ShareIcon from '@material-ui/icons/Share';

// react-share
import {
  EmailShareButton,
  FacebookShareButton,
  LinkedinShareButton,
  TwitterShareButton,
  WhatsappShareButton,
} from 'react-share';
import { FacebookIcon, EmailIcon, LinkedinIcon, TwitterIcon, WhatsappIcon } from 'react-share';

const ShareButton = ({ event }) => {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (e) => {
    setAnchorEl(anchorEl ? null : e.currentTarget);
  };

  const open = Boolean(anchorEl);
  const id = open ? 'transitions-popper' : undefined;

  return (
    <div>
      <IconButton aria-label='share' aria-describedby={id} onClick={handleClick}>
        <ShareIcon style={{ fontSize: '2rem' }} />
      </IconButton>
      <Popper id={id} open={open} anchorEl={anchorEl} transition>
        {({ TransitionProps }) => (
          <Fade {...TransitionProps} timeout={350}>
            <div className={classes.paper}>
              <FacebookShareButton url={event.url}>
                <FacebookIcon
                  size={28}
                  round={true}
                  quote={event.name.text}
                  hashtg='#TheShortcut'
                />
              </FacebookShareButton>
              <LinkedinShareButton
                url={event.url}
                title={event.name.text}
                summary={event.summary}
                source='https://theshortcut.org'>
                <LinkedinIcon size={28} round={true} />
              </LinkedinShareButton>
              <TwitterShareButton url={event.url} title={event.name.text} via='The Shortcut'>
                <TwitterIcon size={28} round={true} />
              </TwitterShareButton>
              <WhatsappShareButton url={event.url} title='The Shortcut'>
                <WhatsappIcon size={28} round={true} />
              </WhatsappShareButton>
              <EmailShareButton url={event.url} subject={event.name.text} body={event.name.text}>
                <EmailIcon size={28} round={true} />
              </EmailShareButton>
            </div>
          </Fade>
        )}
      </Popper>
    </div>
  );
};
export default ShareButton;

const useStyles = makeStyles((theme) => ({
  paper: {
    display: 'flex',
    flexDirection: 'column',
    padding: theme.spacing(1),
    borderRadius: '20px',
    border: '1px solid #eee',
  },
}));
