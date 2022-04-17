import "./CommentCard.css";
import Clock from "../Icons/Clock";
import Ellipsis from "../Icons/Ellipsis";
import { useState, useEffect } from "react";
import { Context } from "../../App";
import Modal from "../Forms/Modal";
import UserForm from "../Forms/UserForm";
import useModal from "../../utils/Hooks/useModal";
import useInput from "../../utils/Hooks/useInput";
import { editComment, deleteComment, getAllComments } from "../../utils/api";
import validators from "../../utils/validators";

const CommentCard = (props) => {
  const [apiCall, setApiCall] = useState(false);
  const [errorMessageState, setErrorMessageState] = useState("");
  useEffect(() => {
    const updateCommentState = async () => {
      const comments = await getAllComments();
      props.setCommentState([...comments.data]);
    };
    updateCommentState();
  }, [apiCall]);

  const manageEditCommentModal = useModal();
  const manageEditCommentInput = useInput(validators.validateMessage);
  return (
    <Context.Consumer>
      {(ctx) => {
        <div class="cards">
          <div class="comment-detail">
            <div class="comment-header">
              <div class="comment-info">
                <span class="author">{props.user}</span>
                <span class="comment-date">
                  {" "}
                  <Clock />
                  {props.date}
                </span>
              </div>
              <div calss="comment-action">
                <span>
                  <Ellipsis />
                </span>
              </div>
            </div>
            <p>{props.body}</p>
          </div>
          {ctx.user === props.user && <button className="btn">Edit</button>}
          {ctx.user === props.user && (
            <button className="btn" onClick={deleteComment(props.id)}>
              Delete
            </button>
          )}
          <Modal
            display={manageEditCommentModal.modal}
            title="Comment"
            close={manageEditCommentModal.Toggle}
            className={manageEditCommentModal.modalClasses}
          >
            <div>
              <UserForm
                title="add a comment"
                toggle={manageEditCommentModal.Toggle}
              >
                <textarea
                  name="message"
                  id="message"
                  className="text-Area"
                  onBlur={manageEditCommentInput.onBlur}
                  onChange={manageEditCommentInput.valueChangeHandler}
                  value={manageEditCommentInput.valueState}
                  hasError={manageEditCommentInput.hasError}
                  errotText="Message must not be empty"
                >
                  {" "}
                  {props.body}
                </textarea>
                <button
                  className="btn"
                  onClick={(e) => {
                    e.preventDefault();
                    setErrorMessageState("");
                    let response = editComment(
                      manageEditCommentInput.valueState,
                      ctx.userState
                    );
                    setApiCall(response);
                    if (!apiCall) {
                      setErrorMessageState("Please retry");
                    } else {
                      setApiCall(false);
                      manageEditCommentInput.setValueState("");
                      manageEditCommentModal.Toggle();
                    }
                  }}
                >
                  Save
                </button>
              </UserForm>
            </div>
          </Modal>
        </div>;
      }}
    </Context.Consumer>
  );
};

export default CommentCard;
