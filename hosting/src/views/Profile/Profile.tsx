import {
  MetaMaskButton,
  useSDK,
  useAccount,
  useBalance,
} from "@metamask/sdk-react-ui";
import { Card, CardFigure, CardText, CardTitle } from "@src/theme";
import { useEffect } from "react";
import { Flex } from "react-elevated-emotion";

Component.displayName = "Profile";
export function Component() {
  const { isConnected, address } = useAccount();
  const { data } = useBalance({
    address,
  });
  const { sdk } = useSDK();

  console.log({ isConnected, address, data });

  useEffect(() => {
    // sdk.
  }, []);

  return (
    <Flex column>
      <Card>
        <CardTitle>Connect your wallet</CardTitle>
        <CardText>
          Your wallet will people to donate to Guilds you're promoting or use it
          to donate to others.
        </CardText>

        <CardFigure float>
          {!isConnected && (
            <MetaMaskButton
              textStyle={{
                display: "flex",
                alignItems: "center",
                lineHeight: "10px",
                fontWeight: 700,
              }}
              buttonStyle={{
                display: "flex",
                border: "none",
                alignItems: "center",
                lineHeight: "10px",
                cursor: "pointer",
              }}
            />
          )}
        </CardFigure>
      </Card>
    </Flex>
  );
}
