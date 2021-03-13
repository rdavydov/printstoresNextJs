import { ContactsCreate } from "src/types/api/response/contacts/contacts.response.types";
import { ContactsFormValue } from "src/types/contacts/contacts.types";
import { Request } from "../../http/Request";

class ContactsService {
  request = new Request("contacts");

  create(contactsData: ContactsFormValue): Promise<ContactsCreate> {
    return this.request.POST({ body: contactsData });
  }
}
export const contactsService = new ContactsService();
