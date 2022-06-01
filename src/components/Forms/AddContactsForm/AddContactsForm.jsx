import React from 'react';
// import PropTypes from 'prop-types';
import { Formik } from 'formik';
import { InputStyled, DataForm, InputWrapper, AddContactBtn } from 'components/Forms/AddContactsForm/AddContactsForm.styled';
import { addUserContactOperation } from 'Redux/operations';
import { useSelector, useDispatch } from 'react-redux';


export const ContactsForm = () => {
    const dispatch = useDispatch();
    const contacts = useSelector(state => state.contacts);

    const existingContact = (newContactData) => {
        if (contacts !== []) {
            const qqq = contacts.find(item => item.name.toLowerCase() === newContactData.name.toLowerCase())
            console.log(qqq)
            return qqq ? true : false
        }
        return false
    };


    const onFormSubmit = (values, {resetForm}) => {
        const newContact = {
            name: values.name,
            number: values.number,
        };
        if (existingContact(newContact) === false) {
            dispatch(addUserContactOperation(newContact))
            resetForm();
        } else {
            alert(`${newContact.name} is already in contacts`);
        }            
    };


        return (
            <>
                <Formik initialValues={{name:"", number:""}} onSubmit={onFormSubmit}>
                    <DataForm name='myFirstReactForm'>
                        <InputWrapper htmlFor="name">
                        Name
                        <InputStyled
                            type="text"
                            name="name"
                            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                            required
                        />
                        </InputWrapper>

                        <InputWrapper htmlFor="number">
                        Phone
                        <InputStyled
                            type="tel"
                            name="number"
                            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                            required
                        />
                        </InputWrapper>

                        <AddContactBtn type="submit" name="btn">Add contact</AddContactBtn>
                    </DataForm>
                </Formik>
            </>
        );
};


// ContactsForm.propTypes = {
//     setNewContact: PropTypes.func.isRequired,
// };