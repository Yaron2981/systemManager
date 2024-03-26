import CloudIcon from "@mui/icons-material/Cloud";
import { Box } from "@mui/material";
import Button from "@mui/material/Button";
import { FormattedMessage } from "react-intl";
import translate from "../../translate";
import { Counter } from "../../features/counter/Counter";
import { Quotes } from "../../features/quotes/Quotes";
import LayoutGrids from "../../layouts/LayoutGrids";

export default function Homepage() {
  return (
    <Box
      sx={{
        bgcolor: "background.default",
        height:"calc(100vh - 64px)",
        mt:'64px',
        maxHeight:document.body.clientHeight+'px',
        //overflow:'hidden',
        m:0

      }}
    >
      <div>
        <LayoutGrids/>
      </div>

    </Box>
  );
}
