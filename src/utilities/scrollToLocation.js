import { scroller } from "react-scroll"


export const scrollToLocation = (location) => {
    scroller.scrollTo(location, {
  duration: 500,
  smooth: true
})
}