import React from "react";

import { CircularProgress, CircularProgressLabel } from "@blend-ui/progress";
import { ThemeProvider, Text } from "@blend-ui/core";
import Box from "@blend-ui/core/dist/esm/Box";
import { flexDirection } from "styled-system";

export default function Card() {
  return (
    <ThemeProvider>
      <div>
        <CircularProgress size={90} value={20}>
          <CircularProgressLabel></CircularProgressLabel>
        </CircularProgress>
        <Text>13Lbs</Text>
      </div>
    </ThemeProvider>
  );
}
