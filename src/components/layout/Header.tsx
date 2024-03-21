// Header.tsx

import {
  AppBar,
  Box,
  IconButton,
  Toolbar,
  Direction,
  Typography,
  useTheme,
  Menu,
  Tooltip,
} from "@mui/material";
import React from "react";
import { MUIWrapperContext } from "../../MUIWrapper";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import TranslateIcon from "@mui/icons-material/Translate";
import { FormattedMessage } from "react-intl";
import translate from "../../translate";

export default function Header() {
  const theme = useTheme();
  const muiUtils = React.useContext(MUIWrapperContext);
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const [dir, setDirection] = React.useState("rtl");
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const handleDirection = () => {
    setDirection(dir === 'ltr' ? "rtl" : 'ltr');
    muiUtils.changeDirection(dir as Direction);
    handleClose();
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" color="default">
        <Toolbar sx={{ height: 60 }}>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            <FormattedMessage
              id="header.system_manager"
              defaultMessage="System Manager"
            />
          </Typography>
          <Box sx={{ color: "inherit" }}>


          <Tooltip title={<FormattedMessage
              id="header.language"></FormattedMessage>}>
              <IconButton
                onClick={handleDirection}
                size="small"
                sx={{ ml: 2 }}
                aria-controls={open ? "account-menu" : undefined}
                aria-haspopup="true"
                aria-expanded={open ? "true" : undefined}
              ><TranslateIcon /></IconButton>
            </Tooltip>





          </Box>
          <Tooltip title={<FormattedMessage
              id="header.display_status"></FormattedMessage>}>
          <IconButton
            sx={{ fontSize: "1rem" }}
            onClick={muiUtils.toggleColorMode}
            color="inherit"
            disableTouchRipple
            disableRipple
          >
            {theme.palette.mode === "dark" ? (
              <span role="img" aria-label="sun">☀️</span>
            ) : (
              <span role="img" aria-label="moon">🌚</span>
            )}
          </IconButton>
          </Tooltip>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
