import { Menu } from "@/types/menu";

const menuData: Menu[] = [
  {
    id: 1,
    title: "회사소개",
    path: "/",
    newTab: false,
  },
  {
    id: 2,
    title: "일반폐기물",
    path: "/about",
    newTab: false,
  },
  {
    id: 3,
    title: "지정폐기물",
    path: "/blog",
    newTab: false,
  },
  {
    id: 4,
    title: "석면해체",
    path: "/contact",
    newTab: false,
  },
  {
    id: 5,
    title: "공사실적",
    newTab: false,
    submenu: [
      {
        id: 51,
        title: "About Page",
        path: "/about",
        newTab: false,
      },
      {
        id: 52,
        title: "Contact Page",
        path: "/contact",
        newTab: false,
      },
      {
        id: 53,
        title: "Blog Grid Page",
        path: "/blog",
        newTab: false,
      },
      {
        id: 54,
        title: "Blog Sidebar Page",
        path: "/blog-sidebar",
        newTab: false,
      },
      {
        id: 55,
        title: "Blog Details Page",
        path: "/blog-details",
        newTab: false,
      },
      {
        id: 56,
        title: "Sign In Page",
        path: "/signin",
        newTab: false,
      },
      {
        id: 57,
        title: "Sign Up Page",
        path: "/signup",
        newTab: false,
      },
      {
        id: 58,
        title: "Error Page",
        path: "/error",
        newTab: false,
      },
    ],
  },
];
export default menuData;
