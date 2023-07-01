import Home from "../../Routes/Home";
import Contact from "../../Routes/Contact";
import Favs from "../../Routes/Favs";
import Detail from "../../Routes/Detail";

export const routes = [
    {
      id: 1,
      path: "/",
      Element: Home, 
    },
    {
      id: 2,
      path: "/dentist/:id",
      Element: Detail,
    },
    {
      id: 3,
      path: "/favs",
      Element: Favs,
  },
  {
    id: 4,
    path: "/contact",
    Element: Contact,
  },
  ];