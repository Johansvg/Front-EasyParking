import React from "react";
import { Navbar, NavbarBrand, NavbarContent, NavbarItem, Link, NavbarMenuToggle, NavbarMenu, NavbarMenuItem } from "@nextui-org/react";
import { useLocation } from 'react-router-dom';

function Barra() {
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const hideHeader = location.pathname === '/login' || location.pathname === '/nuevaCuenta';
  if (hideHeader) {
      return null; 
  }
  const menuItems = [
    { text: "Perfil", path: "/perfil" },
    { text: "Mis vehículos", path: "/" },
    { text: "Agregar", path: "/registroVehiculo" },
    { text: "Salir", path: "/login" },
  ];

  return (
    <Navbar onMenuOpenChange={setIsMenuOpen} className=" bg-black">
      <NavbarContent >
        <NavbarMenuToggle 
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="sm:hidden"
        />
        <NavbarBrand>
        <a href="/" className="flex items-center gap-1">
              <img src="/icono.png" id="logo"  alt="Easyparking logo" />
              <p className="font-bold text-inherit ">EasyParking</p>
          </a>
        </NavbarBrand>
      </NavbarContent>
      <NavbarContent justify="end gap-2">
        <NavbarItem className="md:flex sm:flex lg:flex hidden">
          <Link href="/" className=" text-white hover:text-purple-300 gap-1 text-lg">
            <svg className="icon icon-tabler icon-tabler-car" width="24" height="24" viewBox="0 0 24 24" strokeWidth="1" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                <path d="M7 17m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0"></path>
                <path d="M17 17m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0"></path>
                <path d="M5 17h-2v-6l2 -5h9l4 5h1a2 2 0 0 1 2 2v4h-2m-4 0h-6m-6 -6h15m-6 0v-5"></path>
            </svg>
            Mis vehículos 
          </Link>
        </NavbarItem>
        <NavbarItem className="md:flex sm:flex lg:flex hidden">
          <Link href="/registrovehiculo" className=" text-white hover:text-purple-300 gap-1 text-lg">
            <svg className="icon icon-tabler icon-tabler-pencil-plus" width="24" height="24" viewBox="0 0 24 24" strokeWidth="1" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                <path d="M4 20h4l10.5 -10.5a2.828 2.828 0 1 0 -4 -4l-10.5 10.5v4"></path>
                <path d="M13.5 6.5l4 4"></path>
                <path d="M16 19h6"></path>
                <path d="M19 16v6"></path>
            </svg>
            Agregar
          </Link>
        </NavbarItem>
        <NavbarItem className="md:flex sm:flex lg:flex hidden">
          <Link href="/usuario" className=" text-white hover:text-purple-300 gap-1 text-lg">
            <svg className="icon icon-tabler icon-tabler-user-circle" width="24" height="24" viewBox="0 0 24 24" strokeWidth="1" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
              <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
              <path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0"></path>
              <path d="M12 10m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0"></path>
              <path d="M6.168 18.849a4 4 0 0 1 3.832 -2.849h4a4 4 0 0 1 3.834 2.855"></path>
            </svg>
            Perfil
          </Link>
        </NavbarItem>
        <NavbarItem className="md:flex sm:flex lg:flex hidden">
          <Link href="/login" className=" text-white hover:text-purple-300 gap-1 text-lg">
            <svg className="icon icon-tabler icon-tabler-logout" width="24" height="24" viewBox="0 0 24 24" strokeWidth="1" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
              <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
              <path d="M14 8v-2a2 2 0 0 0 -2 -2h-7a2 2 0 0 0 -2 2v12a2 2 0 0 0 2 2h7a2 2 0 0 0 2 -2v-2"></path>
              <path d="M9 12h12l-3 -3"></path>
              <path d="M18 15l3 -3"></path>
            </svg>
            Salir
          </Link>
        </NavbarItem>
      </NavbarContent>
      <NavbarMenu>
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={`${item.text}-${index}`}>
            <Link
              color={
                index === 2 ? "primary" : index === menuItems.length - 1 ? "danger" : "foreground"
              }
              className="w-full"
              href={item.path}
              size="lg"
            >
              {item.text}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
}

export default Barra;
