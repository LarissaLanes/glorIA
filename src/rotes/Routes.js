import { BrowserRouter, Switch, Route} from "react-router-dom";
import FeedPage from "../pages/FeedPage/FeedPage"
import ChatPage from "../pages/ChatPage/ChatPage"
import Error from "../components/Error"

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
            <Route>
                <Error/>
            </Route>
        </Switch>
        </BrowserRouter>
    )

}

export default Routes;