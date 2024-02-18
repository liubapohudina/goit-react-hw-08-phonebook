import Form from '../../components/Form/Form';
import Title from "../../components/Form/Title";

import ContactList from "../../components/Form/ContacsList";
import Filter from "../../components/Form/FilterSearch";
// import { isLogin } from '../../redux/auth/auth-selectors';
// import { useSelector } from 'react-redux';
// import { Navigate } from 'react-router-dom';



const PhonebookList = () => {
  
//   const isShowPhoneList = useSelector(isLogin);
// if (!isShowPhoneList) {
//   return <Navigate to='/login'/>
//   }
  

  return (
          <main className='container'>
     <Title title="Phonebook">
        <Form />
      </Title> 
      <Filter>
        <ContactList />
      </Filter>  
    </main>
    )

}

export default PhonebookList;