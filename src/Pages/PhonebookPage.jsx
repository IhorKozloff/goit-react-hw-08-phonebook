import { ContactsList } from "components/ContactsList/ContactsList";
import { ContactsForm } from "components/Forms/AddContactsForm/AddContactsForm";
import { SearchingFilter } from  "components/SearchingFilter/SearchingFilter";
import { useDispatch } from "react-redux";
import { getUserContactsOperation } from "Redux/operations"
import { useEffect } from 'react';
import { useFilteredContacts } from "Hooks/useFilteredContacts"
import { PhonebookContainer } from 'components/GlobalStyles/GlobalStyles.styled'



export const PhonebookPage = () => {
    const dispatch = useDispatch();
// const phonebookData = useSelector(state => state.contacts)
// console.dir(phonebookData)
// const dispatch = useDispatch();
// // const contactsData = dispatch(getUserContactsOperation())
// console.log(contactsData)

    
    

    useEffect(() => {
        dispatch(getUserContactsOperation())
    },[dispatch])
    const  {setfilterValue, filteredContacts} = useFilteredContacts(); 


    return (
        <PhonebookContainer className="phonebook-container">
            <ContactsForm/>
            <SearchingFilter onFilterField={setfilterValue}/>
            <ContactsList data={filteredContacts}/> 
        </PhonebookContainer>
    )
};