import world from "../../assets/images/world-map.svg";
import smallworld from "../../assets/images/small-world.svg";
import Button from "../Button/Button.component";
import {
  JoinCommunityContainer,
  JoinCommunityDescription,
  JoinCommunityHeading,
  JoinCommunityImage,
  JoinCommunitySubTitle,
} from "./JoinComponent.styles";

type Props = {};

const JoinCommunity = (props: Props) => {
  return (
    <JoinCommunityContainer>
      <JoinCommunitySubTitle>Join our community</JoinCommunitySubTitle>
      <JoinCommunityHeading>
        Are you ready to connect with the future talent of the tech world
      </JoinCommunityHeading>
      <JoinCommunityDescription>
        Meet up with other techstars and grow together
      </JoinCommunityDescription>
      <JoinCommunityImage smallSourcee={smallworld} source={world} />
      <Button role="secondary">Join our Community</Button>
    </JoinCommunityContainer>
  );
};

export default JoinCommunity;
