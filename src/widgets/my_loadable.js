import Loadable from "react-loadable";
import Loading from "./loading";

const MyLoadable = opts =>
  Loadable({
    loading: Loading,
    delay: 300, // if the component can be loaded within 300ms, don't show loading page
    timeout: 10000,
    ...opts
  });

export default MyLoadable;
