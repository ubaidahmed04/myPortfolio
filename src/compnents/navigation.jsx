import React, { useRef } from "react";
import {
  Navbar,
  Collapse,
  Typography,
  IconButton,
  List,
  ListItem,
} from "@material-tailwind/react";
import {
  Bars3Icon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import {
  CodeBracketIcon,
  WrenchIcon,
  GiftIcon,
} from "@heroicons/react/24/solid";




function NavList({props,sectionRef,projectRef,HomeRef,aboutRef}) {
  console.log("ref navlist",projectRef)
  return (
    <List className="mt-4 mb-6 p-0 lg:mt-0 lg:mb-0 lg:p-0  flex  sm:flex-col lg:flex-row">
      <Typography
        as="a"
        href="#"
        variant="small"
        color="blue-gray"
        className="font-sans"
      >
        <ListItem onClick={()=> props(HomeRef) } className="flex  gap-2 py-2 pr-4 font-bold tracking-wider" >Home</ListItem>
      </Typography>
      <Typography
        as="a"
       
        variant="small"
        color="blue-gray"
        className="font-sans flex justify-center flex-col lg:flex-row gap-3 items-center w-full"
      >
        <ListItem onClick={()=> props(sectionRef) } className="flex items-center gap-2 py-2 w-full pr-4 font-bold  tracking-wider">
          Contact
        </ListItem>
        <ListItem onClick={()=> props(projectRef) } className="flex items-center gap-2 w-full py-2 pr-4 font-bold tracking-wider">
          project
        </ListItem>
        <ListItem onClick={()=> props(aboutRef) } className="flex items-center gap-2 w-full py-2 pr-4 font-bold tracking-wider">
          About 
        </ListItem>
      </Typography>
    </List>
  );
}

export default function Navigation({props,sectionRef,projectRef,HomeRef,aboutRef}) {
  const [openNav, setOpenNav] = React.useState(false);
  console.log(props.props)
 
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
    <Navbar className="bg-light min-w-full sticky top-0 z-10 rounded-none">
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
        <div className="hidden lg:flex ">
          <NavList props={props} sectionRef={sectionRef} projectRef={projectRef} aboutRef={aboutRef} HomeRef={HomeRef} />
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
      <Collapse open={openNav} className="flex flex-col">
        <NavList props={props} sectionRef={sectionRef} projectRef={projectRef} aboutRef={aboutRef} HomeRef={HomeRef}/>
        <div className="flex items-center gap-2 lg:hidden p-4">
          <img src="/Images/avatarimg.png" className="w-10 cursor-pointer" alt="User Avatar"/>
        </div>
      </Collapse>
    </Navbar>
  );
}
