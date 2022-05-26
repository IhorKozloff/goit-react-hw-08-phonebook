import {ContactsForm} from 'components/Forms/AddContactsForm/AddContactsForm';
import { useAddContact } from 'Hooks/useAddContact';

export const SearchBar = () => {
    
    const { setNewContact } = useAddContact();

    return (
        <ContactsForm setNewContact={setNewContact}/>
    )
};