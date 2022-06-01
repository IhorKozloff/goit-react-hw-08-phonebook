// import { SearchBar} from "components/SearchBar/SearchBar";
// import { ContactsList } from "./ContactsList/ContactsList";
// import { SearchingFilter } from "./SearchingFilter/SearchingFilter";
// import { useFilteredContacts } from 'Hooks/useFilteredContacts'


 
import { Route, Routes } from "react-router-dom";
import { PrivateRoute } from "components/PrivateRoute/PrivateRoute";
import { PublicRoute } from "components/PublicRoute/PublicRoute";
import { HomePage } from "Pages/HomePage"
import { Login } from "Pages/Login";
import { Register } from "Pages/Register";
import { Layout } from "Pages/Layout";
import { PhonebookPage } from "Pages/PhonebookPage"
import { useEffect } from "react";
import { fetchCurrentUSer } from "Redux/operations"
import { useDispatch, useSelector } from "react-redux";




export const App = () =>  {

const dispatch = useDispatch();
const isUserRefreshing = useSelector(state => state.registerAndLogIn.isRefreshing);

  useEffect(() => {
    dispatch(fetchCurrentUSer());
  },[dispatch])



  return (
    <>
      {!isUserRefreshing && 
        <Routes>
          <Route path="/" element={<Layout/>}>
            <Route index element={<HomePage/>}/>

            <Route path="login" 
              element={
                <PublicRoute redirectLink="/phonebook">
                    <Login/>
                </PublicRoute>
              }
            />

            <Route path="register" 
              element={
                <PublicRoute redirectLink="/phonebook">
                    <Register/>
                </PublicRoute>
              }
            />

            <Route path="phonebook" 
              element={
                <PrivateRoute redirectLink="/login">
                  <PhonebookPage/>
                </PrivateRoute>
              }
            />
          </Route>
        </Routes>
      }
    </>
  )
};

