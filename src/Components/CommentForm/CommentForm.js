import { useState } from 'react';
import { useDispatch } from 'react-redux';
import commentsActions from '../../redux/comments/comments-actions';
import s from './CommentForm.module.css';

export default function CommentForm() {
  const [name, setName] = useState('');
  const [text, setText] = useState('');
  const dispatch = useDispatch();

  const handleChange = e => {
    const { name, value } = e.target;

    switch (name) {
      case 'name':
        setName(value);
        break;

      case 'comment':
        setText(value);
        break;

      default:
        return;
    }
  };

  const handleSubmit = e => {
    e.preventDefault();

    return dispatch(commentsActions.addComment(name, text), resetForm());
  };

  const resetForm = () => {
    setName('');
    setText('');
  };

  return (
    <div>
      <form className={s.commentForm} onSubmit={handleSubmit}>
        <label htmlFor="new-name">Name</label>
        <input
          type="text"
          name="name"
          id="new-name"
          placeholder="Enter name"
          className={s.inputName}
          onChange={handleChange}
          value={name}
          required
        />
        <label htmlFor="new-comment">Comment</label>
        <textarea
          type="text"
          name="comment"
          id="new-comment"
          placeholder="Enter your comment"
          className={s.inputComment}
          onChange={handleChange}
          value={text}
          required
        />
        <button className={s.btnAdd} type="submit">
          Add comment
        </button>
      </form>
      <h2 className={s.title}>Comments list</h2>
    </div>
  );
}
