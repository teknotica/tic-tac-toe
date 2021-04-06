/** @jsxImportSource @emotion/react */
import { FC } from "react";

import useStyles from "./styles";

const CreditHeader: FC = () => {
  const styles = useStyles();

  return (
    <div css={styles.header}>
      <span>
        Created by{" "}
        <a href="https://github.com/teknotica" target="_blank" rel="noreferrer">
          @teknotica
        </a>
      </span>
    </div>
  );
};

export default CreditHeader;
