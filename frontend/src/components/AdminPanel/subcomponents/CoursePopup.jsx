import axios from "axios";
import React, { useState, useContext } from "react";
import { StoreContext } from "../../../store/StoreProvider";
import Modal from "../../Modal/Modal";

import "./styles.scss";

const CoursePopup = ({
  authors = [],
  hidePopup,
  isEditMode = true,
  isOpenPopup,
  id,
  img = "",
  price = 0,
  title = "",
}) => {
  const [formAuthors, setFormAuthors] = useState(authors);
  const [formAuthor, setFormAuthor] = useState("");
  const [formImg, setFormImg] = useState(img);
  const [formPrice, setFormPrice] = useState(price);
  const [formTitle, setFormTitle] = useState(title);

  const { setCourses } = useContext(StoreContext);

  const handleOnChangeAuthor = (event) => setFormAuthor(event.target.value);
  const handleOnChangeImg = (event) => setFormImg(event.target.value);
  const handleOnChangePrice = (event) => setFormPrice(event.target.value);
  const handleOnChangeTitle = (event) => setFormTitle(event.target.value);

  const handleOnSubmit = async (event) => {
    event.preventDefault();

    const courseObject = {
      authors: formAuthors,
      id,
      img: formImg,
      price: Number(formPrice),
      title: formTitle,
    };
    if (isEditMode) {
        const { data, status } = await axios.put("/courses", courseObject);

      if (status === 202) {
        setCourses(data.courses);
      }
    } else {
      const { data, status } = await axios.post("/courses", courseObject);

      if (status === 201) {
        setCourses(data.courses);
      }
    }

    hidePopup();
  };

  const addAuthor = (event) => {
    event.preventDefault();
    setFormAuthors((prev) => [...prev, formAuthor]);
    setFormAuthor("");
  };

  const deleteAuthor = (event) => {
    const authorToDelete = event.target.dataset.author;
    setFormAuthors((prev) =>
      prev.filter((author) => author !== authorToDelete)
    );
  };

  const authorsElements = formAuthors.map((author) => (
    <li key={author}>
      <p>{author}</p>
      <button onClick={deleteAuthor} data-author={author}>
        Usuń
      </button>
    </li>
  ));

  const correctLabel = isEditMode ? "Aktualizuj kurs" : "Utwórz kurs";

  return (
    <Modal handleOnClose={hidePopup} isOpen={isOpenPopup}>
      <div className="course-popup">
        <form className="form" method="submit" onSubmit={handleOnSubmit}>
          <div className="form-row">
            <label htmlFor="">
              Autor
              <input
                className="input"
                type="text"
                value={formAuthor}
                onChange={handleOnChangeAuthor}
              />
              <button onClick={addAuthor}>Dodaj autora</button>
            </label>
          </div>
          <div className="form-row">
            <label htmlFor="">
              Obrazek
              <input
                className="input"
                type="text"
                value={formImg}
                onChange={handleOnChangeImg}
              />
            </label>
          </div>
          <div className="form-row">
            <label htmlFor="">
              Cena
              <input
                className="input"
                type="number"
                value={formPrice}
                onChange={handleOnChangePrice}
              />
            </label>
          </div>
          <div className="form-row">
            <label htmlFor="">
              Tytuł
              <input
                className="input"
                type="text"
                value={formTitle}
                onChange={handleOnChangeTitle}
              />
            </label>
          </div>
          <button type="submit">{correctLabel}</button>
          <button onClick={hidePopup} type="button">
            Anuluj
          </button>
        </form>
        <p>Lista autorów</p>
        <ul>{authorsElements}</ul>
      </div>
    </Modal>
  );
};

export default CoursePopup;
