import React from 'react';
import { ContactsItem } from "components/ContactsItem/ContactsItem";
import { useSelector } from 'react-redux';



export const ContactsList = () => {

    const contactsState = useSelector(state => state.contacts)
    console.log(contactsState)
    

    return <ul>
        {
           contactsState !== [] && contactsState.map(item => {
                
                    return (
                        <ContactsItem key={item.id} 
                            id={item.id} 
                            name={item.name}
                            phone={item.number}
                        />
                    )
               
              
            })
        }
    </ul>
};
