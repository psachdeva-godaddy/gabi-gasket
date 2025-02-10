import { FunctionComponent, ReactNode, useState } from "react";
import Box from "@ux/box";

import Text from "@ux/text";
import LeftPanelLayout from "../component/LeftPanelLayout";
import { InjectedDetails } from "@godaddy/gasket-auth";

export type Props = {
  left: ReactNode;
  right: ReactNode;
  center: ReactNode;
};
type ExtInjectedDetails = InjectedDetails & {
  accountName: string;
  groups: string[];
};

export type GuidePageProps = {
  authDetails: ExtInjectedDetails;
  ucid?: string;
};

const ThreePanel: FunctionComponent<Props> = ({ left, right, center }) => {
  const [isCollapsed, setIsCollapsed] = useState(false);

  return (
    <>
      <Box className="layout-parent">
        <Box className="layout-header">
          <div className="header">
            <Text.span
              as="heading"
              text="Guide Assist"
              className="headertext mb-0"
            />
          </div>
        </Box>
        <div className="container">
          <Box className={`layout-leftPanel ${isCollapsed ? "collapsed" : ""}`}>
            <LeftPanelLayout
              isCollapsed={isCollapsed}
              left={left}
              setIsCollapsed={setIsCollapsed}
            />
          </Box>
          <Box
            className={`layout-middlePanel ${isCollapsed ? "collapsed" : ""}`}>
            <Box className="middlePanelcontainer" orientation="vertical">
              <Box className="chatView"></Box>
              <Box className="chatInput"></Box>
              <Box className="actionsForChat"></Box>
              {center}
            </Box>
          </Box>
          <Box className="layout-rightPanel">{right}</Box>
        </div>
      </Box>
    </>
  );
};
export async function getServerSideProps({ req, res }) {
  const props: Partial<GuidePageProps> = {};
  // this bit is how we do checkAuth without knowing the plid
  const prevPlid = res.locals.visitor.plid;
  // eslint-disable-next-line no-undefined
  res.locals.visitor.plid = undefined;
  const { valid } = await req.checkAuth({
    realm: "idp",
    type: "e2s",
  });
  res.locals.visitor.plid = prevPlid;

  if (valid) {
    // need to drill into gdAuth to get the ucid since it's not returned by the checkAuth middleware
    // we are gauranteed to have the e2s object since we requested it in the checkAuth call,
    // but we are not gaurenteed to have the ucid since that depends on CRM flows
    const { ucid = "" } = req.gdAuth.jwt.idp.e2s;
    Object.assign(props, {
      ...(ucid && { ucid }),
    });
  }

  return {
    props,
  };
}
export default ThreePanel;
