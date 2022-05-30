import { ContactsList } from "components/ContactsList/ContactsList";
import { ContactsForm } from "components/Forms/AddContactsForm/AddContactsForm";
import { useDispatch } from "react-redux";
import { getUserContactsOperation } from "Redux/operations"
import { useEffect } from 'react';



export const PhonebookPage = () => {
// const phonebookData = useSelector(state => state.contacts)
// console.dir(phonebookData)
// const dispatch = useDispatch();
// // const contactsData = dispatch(getUserContactsOperation())
// console.log(contactsData)

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getUserContactsOperation())
    },[dispatch])
    
    return (
        <>
            <ContactsForm/>
            <ContactsList/>    
        </>
    )
};