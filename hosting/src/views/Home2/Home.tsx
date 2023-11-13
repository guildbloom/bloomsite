import { faEthereum } from "@fortawesome/free-brands-svg-icons";
import {
  faCrown,
  faPeopleGroup,
  faBinoculars,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  Card,
  CardFigure,
  CardText,
  CardTitle,
  MobileWrapper,
} from "@src/theme";
import { Flex, minmax } from "react-elevated-emotion";

Component.displayName = "Home";
export function Component() {
  return (
    <>
      <Flex maxW={760} px={15} column m="auto" justify="start">
        <MobileWrapper mobile={{ textAlign: "center" }}>
          <h3>Welcome to Guild Bloom,</h3>
          <p>
            We are here to unite, promote, and evolve Discord communities
            everywhere. Whether you're looking to grow your community, discover
            exciting new Guilds, or harness the power of collective wisdom,
            you've come to the right place.
          </p>
        </MobileWrapper>
      </Flex>
      <Flex maxW={730} wrap="wrap" m="auto" justify="center" gap={24} mt={24}>
        <Card sx={minmax.width(352)}>
          <CardFigure outline>
            <FontAwesomeIcon icon={faCrown} size="xl" />
          </CardFigure>
          <CardTitle maxW={230}>Community Promotion</CardTitle>
          <CardText maxW={230}>
            Showcase your Discord community and attract new members for growth
            and vibrancy.
          </CardText>
        </Card>
        <Card sx={minmax.width(352)}>
          <CardFigure outline>
            <FontAwesomeIcon icon={faEthereum} size="2x" />
          </CardFigure>
          <CardTitle maxW={230}>Ethereum Donations</CardTitle>
          <CardText maxW={230}>
            Support communities with Ethereum via our safe transactions. Your
            donations foster creativity and vibrancy.
          </CardText>
        </Card>
        <Card sx={minmax.width(352)}>
          <CardFigure outline>
            <FontAwesomeIcon icon={faBinoculars} size="xl" />
          </CardFigure>
          <CardTitle maxW={230}>Discover</CardTitle>
          <CardText maxW={230}>
            Explore a universe of diverse Discord communities, finding your
            perfect fit in gaming, hobbies, education, and beyond.
          </CardText>
        </Card>
        <Card sx={minmax.width(352)}>
          <CardFigure outline>
            <FontAwesomeIcon icon={faPeopleGroup} size="xl" />
          </CardFigure>
          <CardTitle maxW={230}>Community Support</CardTitle>
          <CardText maxW={230}>
            Tap into a network of experienced administrators and managers,
            providing guidance and solutions for your community challenges.
          </CardText>
        </Card>
      </Flex>
    </>
  );
}
