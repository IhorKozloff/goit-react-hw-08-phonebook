// import { SearchBar} from "components/SearchBar/SearchBar";
// import { ContactsList } from "./ContactsList/ContactsList";
// import { SearchingFilter } from "./SearchingFilter/SearchingFilter";
// import { useFilteredContacts } from 'Hooks/useFilteredContacts'


 
import { Route, Routes } from "react-router-dom";
import { Login } from "Pages/Login";
import { Register } from "Pages/Register";
import { Layout } from "Pages/Layout";
import { PhonebookPage } from "Pages/PhonebookPage"
import { useEffect } from "react";
import { fetchCurrentUSer } from "Redux/operations"
import { useDispatch } from "react-redux";



export const App = () =>  {
const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchCurrentUSer());
  },[dispatch])

  // const  {filterValue, setfilterValue, filteredContacts} = useFilteredContacts(); 

  return (

    <Routes>
      <Route path="/" element={<Layout/>}>
        <Route path="login" element={<Login/>}></Route>
        <Route path="register" element={<Register/>}/>
        <Route path="phonebook" element={<PhonebookPage/>}/>
      </Route>
      

    </Routes>
      //   <h1>Phonebook</h1>
      //   <SearchBar></SearchBar>
          
      //   <h1>Contacts</h1>

      //   <SearchingFilter onFilterField={setfilterValue}/>

      //   <ContactsList filterValue={filterValue} data={filteredContacts}/>

  );
};

