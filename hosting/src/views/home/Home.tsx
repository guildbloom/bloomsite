import { faEthereum } from "@fortawesome/free-brands-svg-icons";
import {
  faCrown,
  faPeopleGroup,
  faBinoculars,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Card, CardFigure, CardText, CardTitle } from "@src/theme";
import { Flex, minmax } from "react-elevated-emotion";

Component.displayName = "Home";
export function Component() {
  return (
    <>
      <Flex maxW={730} column m="auto" justify="start">
        <h3>Welcome to Guild Bloom,</h3>
        <p>
          We are here to unite, promote, and evolve Discord communities
          everywhere. Whether you're looking to grow your community, discover
          exciting new Guilds, or harness the power of collective wisdom, you've
          come to the right place.
        </p>
      </Flex>
      <Flex maxW={730} wrap="wrap" m="auto" justify="center" gap={24} mt={24}>
        <Card sx={minmax.width(352)}>
          <CardFigure>
            <FontAwesomeIcon icon={faCrown} size="xl" />
          </CardFigure>
          <CardTitle>Community Promotion</CardTitle>
          <CardText>
            Showcase your Discord community and attract new members for growth
            and vibrancy.
          </CardText>
        </Card>
        <Card sx={minmax.width(352)}>
          <CardFigure>
            <FontAwesomeIcon icon={faEthereum} size="2x" />
          </CardFigure>
          <CardTitle>Ethereum Donations</CardTitle>
          <CardText>
            Support communities with Ethereum via our safe transactions. Your
            donations foster creativity and vibrancy.
          </CardText>
        </Card>
        <Card sx={minmax.width(352)}>
          <CardFigure>
            <FontAwesomeIcon icon={faBinoculars} size="xl" />
          </CardFigure>
          <CardTitle>Discover</CardTitle>
          <CardText>
            Explore a universe of diverse Discord communities, finding your
            perfect fit in gaming, hobbies, education, and beyond.
          </CardText>
        </Card>
        <Card sx={minmax.width(352)}>
          <CardFigure>
            <FontAwesomeIcon icon={faPeopleGroup} size="xl" />
          </CardFigure>
          <CardTitle>Community Support</CardTitle>
          <CardText>
            Tap into a network of experienced administrators and managers,
            providing guidance and solutions for your community challenges.
          </CardText>
        </Card>
      </Flex>
    </>
  );
}
