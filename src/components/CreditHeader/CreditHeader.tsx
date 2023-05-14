/** @jsxImportSource @emotion/react */
import type { FunctionComponent } from "react";

import { styles } from "./CreditHeader.styles";

export const CreditHeader: FunctionComponent = () => {
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
