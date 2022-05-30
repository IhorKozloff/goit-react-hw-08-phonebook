import React from 'react';
import PropTypes from 'prop-types';
import { ContactActionBtn, ContactItem, ContactNumber, ContactName  } from 'components/ContactsItem/ContactsItem.styled';


export const ContactsItem = ({ id, name, phone }) => {



    return (
        <ContactItem  key={id} id={id}>
            <ContactName>{name}:</ContactName>
            <ContactNumber>{phone}</ContactNumber>
            <ContactActionBtn type="button">
                Delete
            </ContactActionBtn>
        </ContactItem >
    );
};

ContactsItem.propTypes = {
    id: PropTypes.string.isRequired, 
    name: PropTypes.string.isRequired, 
    phone: PropTypes.string.isRequired, 
};