import * as ContactsService from "../../api/ContactsService";
import Components from "./Contacts";
import withQuery from "./WithContacts";

export default withQuery(ContactsService.getContacts)(Components);