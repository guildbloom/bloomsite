import { Button, Card } from "@src/theme";
import { Flex } from "react-elevated-emotion";

import discord_profile from "@src/assets/images/discord_profile.jpg";
import { RouterHelmet } from "@src/container/Helmet";

Component.displayName = "Help";
export function Component() {
  const inviteLink = "https://discord.gg/k4vY3N8dsD";
  return (
    <>
      <RouterHelmet title="Help" />
      <Flex column>
        <Card variant="dark" mb={28}>
          <Flex justify="space-between" wrap="wrap" gap={8}>
            <Flex gap={20} fill>
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
            <Flex justify="center">
              <Button onClick={() => window.open(inviteLink)}>
                Join the Server
              </Button>
            </Flex>
          </Flex>
        </Card>
        <h3>FAQs</h3>
        <Flex gap={8}></Flex>
      </Flex>
    </>
  );
}
