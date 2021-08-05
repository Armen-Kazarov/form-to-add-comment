import { useSelector } from 'react-redux';
import { getVisibleComments } from '../../redux/comments/comments-selectors';
import s from './CommentsList.module.css';

export default function CommentList() {
  const comments = useSelector(getVisibleComments);

  return (
    <ul className={s.listItems}>
      {comments.map(({ id, name, text }) => (
        <li key={id} className={s.item}>
          {name}: {text}
        </li>
      ))}
    </ul>
  );
}
