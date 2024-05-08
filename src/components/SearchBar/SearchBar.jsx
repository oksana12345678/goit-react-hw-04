import toast, { Toaster } from "react-hot-toast";
import css from "./SearchBar.module.css";
import { VscError } from "react-icons/vsc";
import { IoSearchOutline } from "react-icons/io5";
const SearchBar = ({ onSearch }) => {
  const notify = () =>
    toast(
      <p className={css.errorToast}>
        <VscError className={css.errorIcon} />
        Please enter a search query!
      </p>
    );

  function handleSubmit(e) {
    e.preventDefault();
    const form = e.target;
    const searchQuery = e.target.elements.text.value;
    onSearch(searchQuery);
    if (!searchQuery) {
      notify();
      return;
    }
    form.reset();
  }
  return (
    <header className={css.topHeader}>
      <Toaster
        position="top-center"
        reverseOrder={false}
        gutter={8}
        containerClassName=""
        containerStyle={{}}
        toastOptions={{
          className: "",
          duration: 4000,
          style: {
            background: "red",
            color: "#fff",
          },

          success: {
            duration: 3000,
            theme: {
              primary: "green",
              secondary: "black",
            },
          },
        }}
      />

      <form className={css.form} onSubmit={handleSubmit}>
        <input
          className={css.searchText}
          type="text"
          name="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
        />
        <button className={css.formBtn} type="submit">
          <IoSearchOutline className={css.icon} />
        </button>
      </form>
    </header>
  );
};
export default SearchBar;
