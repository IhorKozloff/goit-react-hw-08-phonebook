import React from 'react';
import { ContactsItem } from "components/ContactsItem/ContactsItem";
import { ContactsListComponent, ContactsListHeader, Dot } from "components/ContactsList/ContactsList.styled"



export const ContactsList = ({data}) => {

    return <ContactsListComponent>
        <ContactsListHeader>
            <Dot></Dot>
            <Dot></Dot>
            <Dot></Dot>
        </ContactsListHeader>

        {
           data !== [] && data.map(item => {
                
                    return (
                        <ContactsItem key={item.id} 
                            id={item.id} 
                            name={item.name}
                            phone={item.number}
                        />
                    )
               
              
            })
        }
    </ContactsListComponent>
};
