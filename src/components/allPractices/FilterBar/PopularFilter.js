import React from "react";
import { makeStyles, withStyles } from "@material-ui/core/styles/index";
import ExpandLessIcon from "@material-ui/icons/ExpandLess";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import { Button, Menu, MenuItem, Typography } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  colorTitle: {
    color: "#2e2e2e",
  },
  menuItemFont: {
    fontSize: "1rem",
    lineHeight: "1.375rem",
    color: "#717171",
  },
  flip: {
    color: theme.palette.common.discovery_blue,
  },
}));

const StyledMenu = withStyles({
  paper: {
    width: "118px",
    border: "solid 0.8px #c4c4c4",
    "&::-webkit-scrollbar": {
      display: "none",
    },
  },
})((props) => (
  <Menu
    elevation={0}
    getContentAnchorEl={null}
    anchorOrigin={{
      vertical: "bottom",
      horizontal: "center",
    }}
    transformOrigin={{
      vertical: "top",
      horizontal: "center",
    }}
    {...props}
  />
));

export default function PopularFilter(props) {
  const { selectedItem, handleFilterChange, menuItems } = props;

  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuItemClick = (menuList) => {
    handleFilterChange({ type: 'popularFilterChange', content: menuList});
    setAnchorEl(null);
  };

  return (
    <div>
      <Button
        aria-controls="styled-menu"
        aria-haspopup="true"
        data-testid="popularFilterButton"
        onClick={handleClick}
      >
        <Typography variant="overline" className={classes.colorTitle}>
          {selectedItem}
        </Typography>
        {anchorEl ? <ExpandLessIcon className={classes.flip} /> : <ExpandMoreIcon className={classes.flip} />}
      </Button>
      <StyledMenu
        id="styled-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
        data-testid="popularFilterMenu"
      >
        {menuItems.map((menuList) => (
          <MenuItem
            key={menuList}
            selected={menuList === selectedItem}
            onClick={() => handleMenuItemClick(menuList)}
            data-testid={menuList}
          >
            <Typography variant={"button"} className={classes.menuItemFont}>{menuList}</Typography>
          </MenuItem>
        ))}
      </StyledMenu>
    </div>
  );
}
