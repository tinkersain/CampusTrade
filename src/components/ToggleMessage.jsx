import React, { useState } from "react";
import styles from "./ToggleMessage.module.css";

const ToggleMessage = () => {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <div className={styles.container}>
      <button
        onClick={() => setIsVisible(!isVisible)}
        className={styles.button}
      >
        {isVisible ? "Hide Message" : "Show Message"}
      </button>
      {isVisible && <p className={styles.message}>This is a toggle message!</p>}
    </div>
  );
};

export default ToggleMessage;
