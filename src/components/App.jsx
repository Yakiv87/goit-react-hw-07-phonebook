import { AppStyled } from './App.module';
import ContactForm from './ContactForm/ContactForm';
import { ContactsList } from './ContactList/ContactList';
import { Filter } from './Filter/Filter';

export default function App() {
  return (
    <AppStyled>
      <h1>Phonebook</h1>
      <ContactForm />
      <Filter />
      <ContactsList />
    </AppStyled>
  );
}