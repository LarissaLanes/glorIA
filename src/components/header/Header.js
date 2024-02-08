import { DivHeader, DivNavBar, DivScroolButton } from "./Styled-Header";
import {goToChat} from "../../rotes/Coordinator"
import { useHistory} from "react-router";
import logoG1 from "../../constants/assets/UnionlogoG1.svg"
import gloriaChat from "../../constants/assets/homebaloomButton.svg"
import notification from "../../constants/assets/Vectorsino.svg"
import search from "../../constants/assets/VectorSearch.svg"

const Header = () => {
    const history = useHistory()

    return(
        <DivHeader>
           <DivNavBar>
            <div><img src={logoG1}/></div>
            <div>
                <button onClick={() => goToChat(history)}>
                    <img src={gloriaChat} alt="gloria"/>
                </button>
                <button>
                    <img src={notification} alt="gloria"/>
                </button>
                <button>
                    <img src={search} alt="gloria"/>
                </button>
            </div>
           </DivNavBar>
           <DivScroolButton>
                <li>
                    <ul>
                        <button>destaques</button>
                        <button>mundo</button>
                        <button>economia</button>
                        <button>ciência</button>
                        <button>cultura</button>
                    </ul>
                </li>
            </DivScroolButton>
        </DivHeader>
    )
}

export default Header;