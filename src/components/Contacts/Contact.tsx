import * as React from "react";
import IContact from "../../api/IContact";

const Contact = ({contact}: { contact: IContact }) => (
    <div>
        {contact.Name}
    </div>
)

export default Contact;