import { FunctionComponent, ReactNode } from "react";

import Card from "@ux/card";
import EjectIcon from "@ux/icon/eject";
import "@ux/icon/eject/index.css";

export type Props = {
  left: ReactNode;
  setIsCollapsed: any;
  isCollapsed: any;
};

const LeftPanelLayout: FunctionComponent<Props> = ({
  left,
  setIsCollapsed,
  isCollapsed,
}) => {
  const toggleCollapse = () => {
    setIsCollapsed(!isCollapsed);
  };

  return (
    <div>
      <div className="contact-card-header-container">
        <div
          className="contact-card-header"
          style={{ display: isCollapsed ? "none" : "block" }}>
          Customer chats
        </div>
        <button
          onClick={toggleCollapse}
          style={{ background: "none", border: "none", cursor: "pointer" }}>
          <svg
            width="26"
            height="24"
            viewBox="0 0 26 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <path
              d="M18.2259 5.748L18.2259 18.252C18.2259 18.4509 18.3086 18.6416 18.4557 18.7823C18.6028 18.9229 18.8023 19.002 19.0103 19.002C19.2183 19.002 19.4179 18.9229 19.565 18.7823C19.7121 18.6416 19.7947 18.4509 19.7947 18.252L19.7947 5.748C19.7947 5.54909 19.7121 5.35833 19.565 5.21767C19.4179 5.07702 19.2183 4.998 19.0103 4.998C18.8023 4.998 18.6028 5.07702 18.4557 5.21767C18.3086 5.35833 18.2259 5.54909 18.2259 5.748Z"
              fill="white"
            />
            <path
              d="M13.0768 5.32324C13.4289 5.3235 13.7785 5.41484 14.0798 5.58895C14.2969 5.71435 14.4858 5.8797 14.6356 6.07542C14.8788 6.39294 15.0105 6.77606 15.0116 7.16968L15.0116 16.9768C15.0117 17.3184 14.9126 17.6533 14.7254 17.9442C14.5383 18.2352 14.2704 18.4708 13.9515 18.6248C13.6326 18.7789 13.2753 18.8453 12.9193 18.8168C12.5633 18.7882 12.2226 18.6658 11.935 18.4631L4.9693 13.56C4.72563 13.3884 4.52756 13.1644 4.39105 12.9062C4.25454 12.6479 4.18341 12.3626 4.18341 12.0732C4.18341 11.7838 4.25454 11.4985 4.39105 11.2402C4.52756 10.982 4.72563 10.758 4.9693 10.5864L11.9361 5.68281C12.2661 5.44901 12.666 5.32294 13.0768 5.32324ZM13.0805 17.2406C13.1537 17.2405 13.2237 17.2126 13.2755 17.1632C13.3272 17.1137 13.3563 17.0467 13.3564 16.9768L13.3564 7.16968C13.3558 7.07878 13.3045 6.99078 13.2231 6.94384C13.1299 6.89011 13.0065 6.89712 12.9178 6.95742L5.94992 11.861C5.84109 11.9336 5.83462 12.0727 5.84109 12.1129C5.85185 12.1813 5.89168 12.2445 5.94992 12.2855L12.9173 17.1891C12.9645 17.2222 13.022 17.2406 13.0805 17.2406Z"
              fill="white"
            />
          </svg>
        </button>
      </div>
      <div className="customerChatCards">
        <EjectIcon />
        <Card id="unique-card-id">
          <div
            style={{
              padding: "1rem",
            }}>
            Sample contents
          </div>
        </Card>
      </div>
      {!isCollapsed && left}
    </div>
  );
};

export default LeftPanelLayout;
