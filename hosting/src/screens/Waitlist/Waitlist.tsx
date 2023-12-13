import { addToWaitlist } from "@src/api/waitlist";
import { RouterHelmet } from "@src/container/Helmet";
import { Button, Card, CardTitle, Loader } from "@src/theme";
import { Input } from "@src/theme/components/Input";
import { useState } from "react";
import { Flex } from "react-elevated-emotion";

Component.displayName = "Waitlist";
export function Component() {
  const [submitting, isSubmitting] = useState(false);
  const [value, setValue] = useState(null);
  const [error, setError] = useState(null);

  const submitWaitlist = () => {
    if (!value) return;
    isSubmitting(true);
    addToWaitlist(value)
      .then(() => setError(null))
      .catch(() => {
        setError("You can only submit once");
      })
      .finally(() => isSubmitting(false));
  };

  return (
    <>
      <RouterHelmet title="Waitlist" />
      <Card style={{}}>
        <h4>Join the waitlist!</h4>
        <p style={{ color: "gray" }}>
          Join our waitlist and be the first to get your guild the support it
          needs
        </p>
        <br />
        <Flex>
          <Input
            placeholder="username#1234"
            sx={{ borderTopRightRadius: 0, borderBottomRightRadius: 0 }}
            onChange={(e) => setValue(e.target.value)}
          />
          <Button
            minW={75}
            maxW={75}
            maxH={32}
            sx={{ borderTopLeftRadius: 0, borderBottomLeftRadius: 0 }}
            loading={submitting}
            onClick={() => submitWaitlist()}
          >
            Join
          </Button>
        </Flex>
        {error && <p style={{ color: "red" }}>{error}</p>}
      </Card>
    </>
  );
}
