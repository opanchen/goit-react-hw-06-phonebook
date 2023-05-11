import { ContactForm, ContactList, Filter} from "components";
import css from './App.module.css'

export const App = () => {

  return (
    <div className={css.app}>
      <h1>Phonebook</h1>
      <ContactForm />

      <h2>Contacts</h2>
      <Filter />
      <ContactList />
    </div>
  )
}
