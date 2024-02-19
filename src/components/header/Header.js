import { DivHeader, DivNavBar, DivScroolButton } from "./Styled-Header";
import {goToChat} from "../../rotes/Coordinator"
import { useHistory} from "react-router";
import logoG1 from "../../constants/assets/UnionlogoG1.svg"
import gloriaChat from "../../constants/assets/home.png"
import notification from "../../constants/assets/Vector.png"
import search from "../../constants/assets/Vectorsearch.png"

const Header = () => {
    const history = useHistory()

    return(
        <DivHeader>
           <DivNavBar>
            <div><img src={logoG1}/></div>
            <div>
                <button onClick={() => goToChat(history)}>
                    <img src={gloriaChat} alt="gloria" style={{height: "2rem"}} />
                </button>
                <button>
                    <img src={notification} alt="gloria" style={{height: "1.5rem"}}/>
                </button>
                <button>
                    <img src={search} alt="gloria" style={{height: "1.5rem"}}/>
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