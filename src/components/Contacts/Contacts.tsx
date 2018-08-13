import * as React from "react";
import IContact from "../../api/IContact";
import Contact from "./Contact";

const Contacts = ({ contacts }: { contacts: IContact[] }) => 
    <div>
        {contacts.map((a: IContact) => <Contact key={a.Id} contact={a} />)}
    </div>

export default Contacts;