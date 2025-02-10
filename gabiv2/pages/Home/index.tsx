import { FunctionComponent } from "react";
//import AppStateMachine from '../../contexts/AppStateMachine.ts';
import ThreePanelLayout from "../../layouts/Layout.tsx";
import { authGetServerSideProps, useAuthState } from "@godaddy/gasket-auth";
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

export default HomePage;
