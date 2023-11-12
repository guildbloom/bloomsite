import { Player } from "@lottiefiles/react-lottie-player";
import animation from "@src/assets/lottie/404.json";

export default function NoMatch() {
  return <Player autoplay loop src={animation} style={{ height: 500 }} />;
}
