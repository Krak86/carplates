import React from 'react';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import lang from "../locale";

export const Copyright = () => {
    return (
      <Typography variant="body2" color="textSecondary" align="center">
        {lang.copyright}
        <Link color="inherit">
          {process.env.PUBLIC_SITE_URL || "https://carplate.app"}
        </Link>{' '}
        {new Date().getFullYear()}
        {'.'}
      </Typography>
    );
}