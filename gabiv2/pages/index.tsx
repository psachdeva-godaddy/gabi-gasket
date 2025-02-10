import React, { useEffect } from "react";
import Pivots from "@ux/pivot";
import Head from "../components/head.tsx";

import Settings from "@ux/icon/settings";
import Wand from "@ux/icon/wand";
import Play from "@ux/icon/play";
import Help from "@ux/icon/help";
import Box from "@ux/box";
import Card from "@ux/card";

import "@ux/icon/settings/index.css";
import "@ux/icon/wand/index.css";
import "@ux/icon/play/index.css";
import "@ux/icon/help/index.css";
import "@ux/pivot/dist/styles.css";
import "@ux/box/dist/styles.css";
import "@ux/card/dist/styles.css";
import { useRouter } from "next/router";

const pivotGrid = {
  lg: 4,
  md: 6,
};

const textAlignStyle = { textAlign: "center" };

export function IndexPage() {
  const router = useRouter();
  useEffect(() => {
    router.push("/Home");
  });
  return null;
}

export default IndexPage;
