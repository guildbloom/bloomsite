import { Button, Card } from "@src/theme";
import { Flex } from "react-elevated-emotion";

import discord_profile from "@src/assets/images/discord_profile.jpg";

Component.displayName = "Help";
export function Component() {
  const inviteLink = "https://discord.gg/k4vY3N8dsD";
  return (
    <Flex column>
      <Card variant="dark">
        <Flex justify="space-between">
          <Flex gap={24}>
            <img
              src={discord_profile}
              height={50}
              style={{ borderRadius: "50%", boxShadow: "var(--boxShadow)" }}
            />
            <Flex column justify="center">
              <h6>Need more help or info?</h6>
              <p>
                Feel free to join our server and talk to the rest of the
                community
              </p>
            </Flex>
          </Flex>
          <Flex column fill justify="center" maxW={120}>
            <Button onClick={() => window.open(inviteLink)}>
              Join the Server
            </Button>
          </Flex>
        </Flex>
      </Card>
    </Flex>
  );
}
