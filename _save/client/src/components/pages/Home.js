import React, { useContext, useEffect } from "react";
import Contacts from "../contacts/Contacts";
import ContactForm from "../contacts/ContactForm";
import ContactFilter from "../contacts/ContactFilter";
import AuthContext from "../../context/auth/authContext";

const Home = () => {
  const authContext = useContext(AuthContext);

  useEffect(() => {
    authContext.loadUser();
    //eslint-dasable-next-line
  }, []);
  return (
    <div className="grid-2">
      <div>
        {/* ContactForm*/}
        <ContactForm />
      </div>
      <div>
        {/* Contacts */}
        <ContactFilter />
        <Contacts />
      </div>
    </div>
  );
};

export default Home;
