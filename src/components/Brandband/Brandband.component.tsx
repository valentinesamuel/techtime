import Zoom from "../../assets/images/zoom.svg";
import Stripe from "../../assets/images/stripe.svg";
import Monday from "../../assets/images/monday.svg";
import Slack from "../../assets/images/slack.svg";
import DropBox from "../../assets/images/dropbpx.svg";
import { BrandBandContainer, BrandImage } from "./Brandband.style";

type Props = {};

const BrandBand = (props: Props) => {
  return (
    <BrandBandContainer>
      <BrandImage src={Zoom} />
      <BrandImage src={Stripe} />
      <BrandImage src={Monday} />
      <BrandImage src={Slack} />
      <BrandImage src={DropBox} />
    </BrandBandContainer>
  );
};

export default BrandBand;
