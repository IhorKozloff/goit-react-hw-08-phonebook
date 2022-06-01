import React from 'react';
import PropTypes from 'prop-types';
import { ContactActionBtn, ContactItem, ContactNumber, ContactName  } from 'components/ContactsItem/ContactsItem.styled';
import { deleteUserContactOperation } from 'Redux/operations'
import { useDispatch } from 'react-redux';

export const ContactsItem = ({ id, name, phone }) => {
    const dispatch = useDispatch();


    return (
        <ContactItem  key={id} id={id}>
            <ContactName>{name}:</ContactName>
            <ContactNumber>{phone}</ContactNumber>
            <ContactActionBtn type="button" onClick={() => {
                dispatch(deleteUserContactOperation(id))
            }}>
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