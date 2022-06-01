import { useMemo, useState } from "react";
import { useSelector } from "react-redux";



export const useFilteredContacts = () => {
    // const dispatch = useDispatch()
    const data = useSelector(state => state.contacts)
    // const { data } = dispatch(getUserContactsOperation());
    const [filterValue, setfilterValue] = useState('');
  
    const filteredContacts = useMemo(() => {
      return data?.filter(item => item.name.toLowerCase().includes(filterValue)) ?? [];
    },[data, filterValue]);
  
    return {data, filterValue, setfilterValue, filteredContacts}
  
};