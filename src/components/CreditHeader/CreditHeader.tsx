/** @jsxImportSource @emotion/react */
import { FC } from "react";

import { styles } from "./CreditHeader.styles";

export const CreditHeader: FC = () => {
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
