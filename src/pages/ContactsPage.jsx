import Contacts from "../components/--contacts/Contacts/Contacts";
import Form from "../components/--contacts/Form/Form";

const ContactsPage = () => {
  return (
    <div className="container">
      <div className="aboutpage_wrapper">
        <Form />
        <Contacts />
      </div>
    </div>
  );
};

export default ContactsPage;
