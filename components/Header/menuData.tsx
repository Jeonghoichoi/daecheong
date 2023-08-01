import { Menu } from "@/types/menu";

const menuData: Menu[] = [
  {
    id: 1,
    title: "홈",
    path: "/",
    newTab: false,
  },
  {
    id: 2,
    title: "회사소개",
    path: "/about",
    newTab: false,
  },
  {
    id: 3,
    title: "회사소개",
    path: "/blog",
    newTab: false,
  },
  {
    id: 4,
    title: "일반폐기물",
    path: "/contact",
    newTab: false,
  },
  {
    id: 5,
    title: "석면해체",
    path: "/contact",
    newTab: false,
  },
  {
    id: 6,
    title: "지정폐기물",
    newTab: false,
    submenu: [
      {
        id: 61,
        title: "About Page",
        path: "/about",
        newTab: false,
      },
      {
        id: 62,
        title: "Contact Page",
        path: "/contact",
        newTab: false,
      },
      {
        id: 63,
        title: "Blog Grid Page",
        path: "/blog",
        newTab: false,
      },
      {
        id: 64,
        title: "Blog Sidebar Page",
        path: "/blog-sidebar",
        newTab: false,
      },
      {
        id: 65,
        title: "Blog Details Page",
        path: "/blog-details",
        newTab: false,
      },
      {
        id: 66,
        title: "Sign In Page",
        path: "/signin",
        newTab: false,
      },
      {
        id: 67,
        title: "Sign Up Page",
        path: "/signup",
        newTab: false,
      },
      {
        id: 68,
        title: "Error Page",
        path: "/error",
        newTab: false,
      },
    ],
  },
];
export default menuData;
