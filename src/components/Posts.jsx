import React, { useState } from 'react';
import { ApproveButton, RejectButton } from './ApprovalButtons';
import { faCheck, faTimes, faUser } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import moment from 'moment';

export default function Posts(props) {
  const { post } = props;
  console.log(post);

  const { id, title, body} = post;

  const [approve, setApprove] = useState(false);
  const [reject, setReject] = useState(false);

  const clickApprove = () => {
    if (reject === true) {
      setReject(false);
      return setApprove(true);
    }
    return setApprove(true);
  };

  const clickReject = () => {
    if (approve === true) {
      setApprove(false);
      return setReject(true);
    }
    return setReject(true);
  };

  const showReviewIcon = () => {
    if (approve) {
      return <FontAwesomeIcon icon={faCheck} size="2x" className="approved" />;
    }
    if (reject) {
      return <FontAwesomeIcon icon={faTimes} size="2x" className="rejected" />;
    }
    return '';
  };

  return (
    <div
      key={id}
      id="posts-row"
      className={`posts-row ${id % 2 !== 0 ? 'primary' : 'secondary'} row`}
    >
      <div className="post media">
        <div className="post-user-icon mr-3">
          <FontAwesomeIcon icon={faUser} size="2x" />
        </div>
        <div className="post-body media-body">
          <h5 className="post-user row">
            {title}
            <small className="post-timestamp">
              {moment().calendar().replace(' at ', ', ')}
            </small>
          </h5>
          
          <p className="post-text row">{body}</p>
          <div className="post-review row">
            <ApproveButton clickedApprove={clickApprove} />
            <RejectButton clickedReject={clickReject} />
          </div>
        </div>
        <div className="post-review-results mr-3">{showReviewIcon()}</div>
      </div>
    </div>
  );
}
