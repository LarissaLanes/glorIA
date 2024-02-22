import { BrowserRouter, Switch, Route} from "react-router-dom";
import FeedPage from "../pages/FeedPage/FeedPage"
import ChatPage from "../pages/ChatPage/ChatPage"

const Routes = () => {
    return(
        <BrowserRouter>
        <Switch>
            
            <Route exact path="/">
                <FeedPage/>
            </Route>
            <Route exact path="/gloria">
                <ChatPage/>
            </Route>
        </Switch>
        </BrowserRouter>
    )

}

export default Routes;