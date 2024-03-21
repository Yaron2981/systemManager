import CloudIcon from "@mui/icons-material/Cloud";
import { Box } from "@mui/material";
import Button from "@mui/material/Button";
import { FormattedMessage } from "react-intl";
import translate from "../../translate";
import { Counter } from "../../features/counter/Counter";
import { Quotes } from "../../features/quotes/Quotes";

export default function Homepage() {
  return (
    <Box
      sx={{
        bgcolor: "background.default",
        color: "text.primary",
        p: 3,
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        gap: 1,
      }}
    >
      <div>
        <FormattedMessage id="app.hello" defaultMessage="Hello" />
      </div>
  <Counter/>
  <Quotes/>
    </Box>
  );
}
