import React, { Fragment } from "react";
import { Route, Switch } from "react-router-dom";
import { SearchPage } from "./SearchPage";
import { FavoritesPage } from "./FavoritesPage";
import { AboutPage } from "./AboutPage";
import { ProfilePage } from "./ProfilePage";
import { DisqusPage } from "./DisqusPage";
import { StorePage } from "./StorePage";
import { NotificationPage } from "./NotificationPage";

export const Router = () => {
    return (
        <Fragment>
            <Switch>
                <Route exact={true} path="/" component={SearchPage} />
                <Route path="/favorites" component={FavoritesPage} />
                <Route path="/notifications" component={NotificationPage} />
                <Route path="/about" component={AboutPage} />
                <Route path="/profile" component={ProfilePage} />
                <Route path="/disqus" component={DisqusPage} />
                <Route path="/store" component={StorePage} />
                <Route component={SearchPage} />
            </Switch>
        </Fragment>
   );
};
