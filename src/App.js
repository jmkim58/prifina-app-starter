import React from "react";
import styled from "styled-components";
import { ReactComponent as Logo } from "./assets/prifina.svg";
//import Image from "./assets/fingerpori.png";

import { usePrifina } from "@prifina/hooks";
import Faker from "@prifina/faker";

import {
  Button,
  Text,
  ThemeProvider,
  Box,
  Avatar,
  Select,
} from "@blend-ui/core";

import {
  CircularProgress,
  CircularProgressLabel,
  ProgressBar,
  ProgressLabel,
} from "@blend-ui/progress";

import Card from "./components/Card";

import { LineChart, Line, CartesianGrid, XAxis, YAxis } from "recharts";
const data = [{ name: "Page A", uv: 400, pv: 2400, amt: 2400 }];

export const App = () => {
  return (
    <ThemeProvider>
      <Box>
        <Text>Health Overview</Text>
        <Button variation={"outline"} />
        <Avatar />
        <Select />
        dasasd
        <CircularProgress size={90} value={20}>
          <CircularProgressLabel></CircularProgressLabel>
        </CircularProgress>
        <Card />
        <LineChart
          width={600}
          height={300}
          data={data}
          margin={{ top: 5, right: 20, bottom: 5, left: 0 }}
        >
          <Line type="monotone" dataKey="uv" stroke="#8884d8" />
          <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
          <XAxis dataKey="name" />
          <YAxis />
        </LineChart>
        <CircularProgress />
        <LineChart
          width={600}
          height={300}
          data={data}
          margin={{ top: 5, right: 20, bottom: 5, left: 0 }}
        >
          <Line type="monotone" dataKey="uv" stroke="#8884d8" />
          <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
          <XAxis dataKey="name" />
          <YAxis />
        </LineChart>
      </Box>
    </ThemeProvider>
  );
};
