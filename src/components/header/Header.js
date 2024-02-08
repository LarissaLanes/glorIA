import { DivHeader } from "./Styled-Header";
import {goToChat} from "../../rotes/Coordinator"
import { useHistory} from "react-router";

const Header = () => {
    //chama o router  para usar as funcoes de navegação
    const history = useHistory()

    return(
        <DivHeader>
           
            {/* <IconButton aria-label="share" onClick={() => goToChat(history)}>
                   <ExitToAppOutlinedIcon color='secondary' />
                  </IconButton> */}
        </DivHeader>
    )
}


export default Header;