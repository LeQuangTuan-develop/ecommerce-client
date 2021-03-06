import React, { useEffect, useRef } from "react"
import { useDispatch } from "react-redux"
import { useSelector } from "react-redux"
import { Link, useLocation } from "react-router-dom"
import { closeMenuSidebar } from "../../features/header/headerSlice"
import CategoriesDropdown from "./CategoriesDropdown"

const mainNav = [
  { name: "Trang chủ", path: "/" },
  { name: "Cửa hàng", path: "/catalog" },
  { name: "Về chúng tôi", path: "/about-us" },
  { name: "Liên hệ", path: "/contact" },
  { name: "Bài viết", path: "/Blog" },
]

const Navigation = () => {
  const menuSidebarRef = useRef(null)
  const isOpenMenuSidebar = useSelector(
    (state) => state.header.isOpenMenuSidebar
  )
  const dispatch = useDispatch()

  const { pathname } = useLocation()
  const activeNav = mainNav.findIndex((e) => e.path === pathname)

  useEffect(() => {
    const handleClickOutside = (event) => {
      const getClassName = event.target.className
      if (
        typeof getClassName === "string" &&
        getClassName.includes("mobile-menu-sidebar")
      ) {
        return
      }
      if (
        menuSidebarRef.current &&
        !menuSidebarRef.current.contains(event.target)
      ) {
        dispatch(closeMenuSidebar())
      }
    }
    document.addEventListener("mousedown", handleClickOutside)
    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [dispatch, menuSidebarRef])

  return (
    <div
      className={isOpenMenuSidebar ? "navigation active" : "navigation"}
      ref={menuSidebarRef}
    >
      <CategoriesDropdown />
      <ul className="navigation__nav">
        {mainNav.map((nav, index) => (
          <li
            key={index}
            className={`navigation__nav--path ${
              index === activeNav ? "active" : ""
            }`}
          >
            <Link to={nav.path}>{nav.name}</Link>
          </li>
        ))}
      </ul>
      <p className="navigation__contact">+0123456789</p>
    </div>
  )
}

export default Navigation
