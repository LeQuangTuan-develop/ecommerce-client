import { useScrollPosition } from "@n8tb1t/use-scroll-position"
import { useState } from "react"
import { useSelector } from "react-redux"
import CartSidebar from "./CartSidebar"
import Navbar from "./Navbar"
import Navigation from "./Navigation"

const Header = () => {
  const [hideOnScrollDown, setHideOnScrollDown] = useState(true)
  const [isScroll, setIsScroll] = useState(false)

  const isOpenMenuSidebar = useSelector(
    (state) => state.toggle.isOpenMenuSidebar
  )
  const isOpenCartSidebar = useSelector(
    (state) => state.toggle.isOpenCartSidebar
  )

  useScrollPosition(
    ({ prevPos, currPos }) => {
      const isShow = currPos.y > prevPos.y
      if (isShow !== hideOnScrollDown) setHideOnScrollDown(isShow)
      if (currPos.y > -100) {
        setHideOnScrollDown(false)
        setIsScroll(false)
      } else setIsScroll(true)
    },
    [hideOnScrollDown],
    false,
    false,
    100
  )

  return (
    <header className={`${isScroll ? "header-scroll" : ""}`}>
      
      <Navbar hideOnScrollDown={hideOnScrollDown} isScroll={isScroll} />
      <hr />
      <Navigation />
      <CartSidebar />
    </header>
  )
}

export default Header
