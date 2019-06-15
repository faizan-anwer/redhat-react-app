import React from "react";
import { Route, Switch } from "react-router";

import Content from "./components/content/content"
import ContentDetail from "./components/content-detail/content-detail"
import Bookmark from "./components/bookmark/bookmark"
import NotFound from "./components/common/not-found/not-found";
import { URL } from "./constant";

export default function AppRouter(props) {
  return (
    <Switch>
      <Route exact path={`${URL.CONTENT}`} component={Content} />
      <Route path={`${URL.CONTENT_DETAIL}`} component={ContentDetail} />
      <Route path={`${URL.BOOKMARK}`} component={Bookmark} />
      <Route component={NotFound} />
    </Switch>
  );
}
