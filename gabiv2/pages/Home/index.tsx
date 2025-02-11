import { FunctionComponent } from "react";
//import AppStateMachine from '../../contexts/AppStateMachine.ts';
import ThreePanelLayout from "../../layouts/Layout.tsx";
import {
  authGetServerSideProps,
  InjectedDetails,
  useAuthState,
} from "@godaddy/gasket-auth";
// import {
//   ContactEventTypes,
//   ContactStarted,
// } from '../../state/machines/contact.ts';
// import ContactCard from './ContactCard.tsx';
// import ContactView from './ContactView.tsx';

const HomePage: FunctionComponent = function () {
  //const asm = AppStateMachine.useActorRef();
  //const currentState = AppStateMachine.useSelector((state) => state.value);
  // const contacts = AppStateMachine.useSelector(
  //   (state) => state.context.contacts
  // );

  // const selectedContactId = AppStateMachine.useSelector(
  //   (state) => state.context.selectedContact
  // );
  // const selectedContact = selectedContactId
  //   ? contacts[selectedContactId]
  //   : null;

  // function handleButtonClick() {
  //   asm.send({
  //     type: ContactEventTypes.ContactStarted,
  //     ucid: crypto.randomUUID(),
  //     contact: {
  //       participantId: crypto.randomUUID(),
  //       contactCenterId: crypto.randomUUID(),
  //       channel: 'chat',
  //       createdAt: new Date().toISOString(),
  //       customer: {
  //         id: crypto.randomUUID(),
  //         firstName: 'John',
  //         lastName: 'Doe',
  //       },
  //     },
  //   } as ContactStarted);
  // }
  return (
    <div className="main-container">
      {/* <Box className="row" style={{ width: '100%', height: '40px' }}>
        Guide Assist
      </Box> */}
      <ThreePanelLayout
        left={<div></div>}
        right={<div></div>}
        center={<div></div>}
      />
    </div>
  );
};
type ExtInjectedDetails = InjectedDetails & {
  accountName: string;
  groups: string[];
};
export type GuidePageProps = {
  authDetails: ExtInjectedDetails;
  ucid?: string;
};
export async function getServerSideProps({ req, res }) {
  console.log("res", res.locals);
  const props: Partial<GuidePageProps> = {};
  //const prevPlid = res.locals.visitor.plid;
  //res.locals.visitor.plid = undefined;
  const { valid } = await req.checkAuth({
    realm: "idp",
    type: "e2s",
  });
  //res.locals.visitor.plid = prevPlid;
  if (valid) {
    const { ucid = "" } = req.gdAuth.jwt.idp.e2s;
    Object.assign(props, {
      ...(ucid && { ucid }),
    });
  }
  return {
    props,
  };
}
export default HomePage;
