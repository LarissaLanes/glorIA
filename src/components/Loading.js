import Lottie from "react-lottie";
import animationData from '../components/animation.json'
import { useState } from "react";

const Loading = () => {
    // const [animationState, setAnimationState] = useState({
    //     isStopped: false, isPaused: false
    // });

    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: animationData,
        rendererSettings: {
            preserveAspectRatio : 'xMidYMid slice'
        }
    }
    return(
        <div>
            <Lottie options={defaultOptions}
            width={150}
            height={150}
            // isStopped={animationState.isStopped}
            // isPaused={animationState.isPaused}>
            >

            </Lottie>
        </div>

    )
}

export default Loading;