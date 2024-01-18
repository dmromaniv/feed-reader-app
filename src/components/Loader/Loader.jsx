import { Circles } from "react-loader-spinner";

import styles from "./Loader.module.css";

export default function Loader() {
  return (
    <div className={styles.loaderWrapper}>
      <Circles
        height="120"
        width="120"
        color="#646cff"
        ariaLabel="circles-loading"
        visible={true}
      />
    </div>
  );
}
