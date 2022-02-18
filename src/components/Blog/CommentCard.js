import "./CommentCard.css";

const CommentCard = (props) => {
  return (
    <div>
      <div className="card v-card v-sheet theme--light elevation-2">
        <div className="header">
          <div className="v-avatar avatar">
            <img src />
          </div>
          <span className="displayName title">John Doe</span>{" "}
          <span className="displayName caption">2 days ago</span>
        </div>

        <div className="wrapper comment">
          <p>
            Fusce sodales magna id porta egestas. Nulla massa est, hendrerit nec
            auctor vitae, porta ut est.
          </p>
        </div>
        <div className="actions"></div>
        <div className="v-dialog__container"></div>
      </div>

      <div className="answers"></div>
    </div>
  );
};

export default CommentCard;
