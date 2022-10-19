import React, { useState } from "react";
import ContainerMain from "./components/Templates/ContainerMain";
import Contacts from "./components/Templates/Contacts";
import Chat from "./components/Templates/Chat";

const App = () => {
  const [contacts, setContacts] = useState([
    { avatar: "https://www.w3schools.com/howto/img_avatar2.png" },
    { avatar: "https://www.w3schools.com/howto/img_avatar2.png" },
    { avatar: "https://www.w3schools.com/howto/img_avatar2.png" },
    { avatar: "https://www.w3schools.com/howto/img_avatar2.png" },
    { avatar: "https://www.w3schools.com/howto/img_avatar2.png" },
    { avatar: "https://www.w3schools.com/howto/img_avatar2.png" },
  ]);

  return (
    <ContainerMain>
      <Contacts contacts={contacts} />
      <Chat />
    </ContainerMain>
  );
};

export default App;
