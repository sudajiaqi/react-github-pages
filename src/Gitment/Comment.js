import 'gitment/style/default.css';
import Gitment from 'gitment';
import {
  CLIENT_ID, CLIENT_SECRET, REPO, USER_NAME,
} from '../Constants';

const gitment = (id) => new Gitment({
  id, // optional
  owner: USER_NAME,
  repo: REPO,
  oauth: {
    client_id: CLIENT_ID,
    client_secret: CLIENT_SECRET,
  },
});

const renderComments = (id, container) => gitment(id)
  .render(container);

export default renderComments;
