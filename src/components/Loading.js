import Lottie from "react-lottie";
import animationData from '../components/animation.json'

const Loading = () => {

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
            >
            </Lottie>
        </div>
    )
}

export default Loading;