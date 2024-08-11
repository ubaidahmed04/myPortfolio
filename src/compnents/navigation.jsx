import React from "react";
import {
  Navbar,
  Collapse,
  Typography,
  Button,
  IconButton,
  List,
  ListItem,
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
} from "@material-tailwind/react";
import {
  ChevronDownIcon,
  Bars3Icon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import {
  CodeBracketIcon,
  WrenchIcon,
  GiftIcon,
} from "@heroicons/react/24/solid";

const navListMenuItems = [
  {
    title: "Projects",
    description: "Find the perfect Ideas for your needs.",
    icon: CodeBracketIcon,
  },
  {
    title: "Techstack",
    description: "Meet and learn about our dedication",
    icon: GiftIcon,
  },
  {
    title: "ToolStack",
    description: "What tool we use to build dynamic sites",
    icon: WrenchIcon,
  },
];

function NavListMenu() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);

  const renderItems = navListMenuItems.map(
    ({ icon, title, description }, key) => (
      <a href="#" key={key}>
        <MenuItem className="flex items-center gap-3 rounded-lg p-2 hover:bg-gray-200">
          <div className="flex items-center justify-center rounded-lg bg-blue-50 p-2">
            {React.createElement(icon, {
              strokeWidth: 3,
              className: "h-6 text-dark w-9 bg-light m-1",
            })}
          </div>
          <div>
            <Typography
              variant="h6"
              color="blue-gray"
              className="flex items-center text-sm font-bold"
            >
              {title}
            </Typography>
            <Typography
              variant="paragraph"
              className="text-xs font-medium text-blue-gray-500"
            >
              {description}
            </Typography>
          </div>
        </MenuItem>
      </a>
    )
  );

  return (
    <React.Fragment>
      <Menu
        open={isMenuOpen}
        handler={setIsMenuOpen}
        offset={{ mainAxis: 20 }}
        placement="bottom"
        allowHover={true}
      >
        <MenuHandler>
          <Typography as="div" variant="small" className="font-mono">
            <ListItem
              className="flex items-center gap-2 py-2 pr-4 text-gray-900 tracking-wider cursor-pointer"
              selected={isMenuOpen || isMobileMenuOpen}
              onClick={() => setIsMobileMenuOpen((cur) => !cur)}
            >
              Resources
              <ChevronDownIcon
                strokeWidth={2.5}
                className={`h-5 w-5 transition-transform ${isMenuOpen || isMobileMenuOpen ? "rotate-180" : ""}`}
              />
            </ListItem>
          </Typography>
        </MenuHandler>
        <MenuList className="hidden lg:block">
          <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 p-2">
            {renderItems}
          </ul>
        </MenuList>
      </Menu>
      <div className="block lg:hidden">
        <Collapse open={isMobileMenuOpen}>
          {renderItems}
        </Collapse>
      </div>
    </React.Fragment>
  );
}

function NavList() {
  return (
    <List className="mt-4 mb-6 p-0 lg:mt-0 lg:mb-0 lg:flex lg:flex-row lg:items-center lg:p-0">
      <Typography
        as="a"
        href="#"
        variant="small"
        color="blue-gray"
        className="font-sans"
      >
        <ListItem className="flex items-center gap-2 py-2 pr-4 font-bold tracking-wider">Home</ListItem>
      </Typography>
      <NavListMenu />
      <Typography
        as="a"
        href="#"
        variant="small"
        color="blue-gray"
        className="font-sans"
      >
        <ListItem className="flex items-center gap-2 py-2 pr-4 font-bold tracking-wider">
          Contact Us
        </ListItem>
      </Typography>
    </List>
  );
}

export default function Navigation() {
  const [openNav, setOpenNav] = React.useState(false);

  React.useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 960) {
        setOpenNav(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <Navbar className="bg-light min-w-full  rounded-none">
      <div className="flex items-center justify-between text-blue-gray-900  ">
        <Typography
          as="a"
          href="#"
          variant="h3"
          className="mr-4 cursor-pointer flex items-center"
        >
          <span className="block  font-serif text-xl sm:text-4xl italic text-shadow-custom">{"< Ubaid "}</span>
          <span className="block  font-serif text-xl sm:text-4xl italic text-shadow-custom">{"Ahmed / >"}</span>
        </Typography>
        <div className="hidden lg:flex">
          <NavList />
        </div>
        <div className="hidden lg:flex items-center">
          <img src="/Images/avatarimg.png" className="w-10 cursor-pointer" alt="User Avatar"/>
        </div>
        <IconButton
          variant="text"
          color="blue-gray"
          className="lg:hidden"
          onClick={() => setOpenNav(!openNav)}
        >
          {openNav ? (
            <XMarkIcon className="h-6 w-6" strokeWidth={3} />
          ) : (
            <Bars3Icon className="h-6 w-6" strokeWidth={3} />
          )}
        </IconButton>
      </div>
      <Collapse open={openNav}>
        <NavList />
        <div className="flex items-center gap-2 lg:hidden p-4">
          <img src="/Images/avatarimg.png" className="w-10 cursor-pointer" alt="User Avatar"/>
        </div>
      </Collapse>
    </Navbar>
  );
}
