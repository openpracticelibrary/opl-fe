import React from "react";
import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Button,
  Icon,
} from "@chakra-ui/core";

export default function PopularFilter(props) {
  const { selectedItem, handleFilterChange, menuItems } = props;

  const handleMenuItemClick = (menuList) => {
    handleFilterChange({ type: 'popularFilterChange', content: menuList});
  };

  return (
    <Menu>
      <MenuButton
        data-testid="popularFilterButton"
        as={Button}
        fontFamily="heading"
        fontSize="sm"
        textTransform="uppercase"
        variant="ghost"
      >
        {selectedItem} <Icon name="chevron-down" fontSize="lg" color="blue.500" />
      </MenuButton>
      <MenuList
        data-testid="popularFilterMenu"
        fontFamily="heading"
        placement="bottom-start"
      >
        {menuItems.map((menuList) => (
          <MenuItem
            key={menuList}
            selected={menuList === selectedItem}
            textTransform="uppercase"
            onClick={() => handleMenuItemClick(menuList)}
            data-testid={menuList}
          >
            {menuList}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
}
