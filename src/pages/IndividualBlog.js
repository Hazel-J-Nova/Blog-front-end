// import CommentCard from "../components/Blog/CommentCard";
// import Modal from "../components/Forms/Modal";
// import { Context } from "../App";
// import useModal from "../utils/Hooks/useModal";
// import validators from "../utils/validators";
// import UserForm from "../components/Forms/UserForm";
// import { addNewComment, getAllComments } from "../utils/api";
// import { useState, useEffect } from "react";
// import useInput from "../utils/Hooks/useInput";

// const IndividualBlog = (props) => {
//   const manageCommentModal = useModal();
//   const manageComentInput = useInput(validators.validateMessage);

//   const [apiCall, setApiCall] = useState(false);
//   const [errorMessageState, setErroMessageState] = useState("");
//   const [commentState, setCommentState] = useState([]);

//   useEffect(() => {
//     const updateCommentState = async () => {
//       const comments = await getAllComments();
//       setCommentState([...comments.data]);
//     };
//     updateCommentState();
//   }, [apiCall]);
//   const comments = () => {
//     if (props.commentState.length > 0) {
//       props.commentState.map((comment) => {
//         return (
//           <CommentCard
//             commentState={commentState}
//             setCommentState={setCommentState}
//             key={comment._id}
//             user={comment.user}
//             body={comment.body}
//             date={comment.date}
//           ></CommentCard>
//         );
//       });
//     }
//   };

//   return (
//     <Context.Consumer>
//       {(ctx) => {
//         <section class="about-me">
//           <h1 class="section__title section__title--about">{props.title}</h1>
//           <p class="section__subtitle section__subtitle--about">
//             {props.subTitle}
//           </p>
//           <div className="about-me__body">{props.body}</div>
//           <img src={props.url} class="about-me__img" alt={props.alt} />
//           <div>{comments}</div>
//           {ctx.userState.hasOwnProperty("user") && (
//             <button className="btn" onClick={manageCommentModal.Toggle}>
//               add a comment
//             </button>
//           )}
//           <Modal
//             display={manageCommentModal.modal}
//             title="Comment"
//             close={manageComentInput}
//             className={manageCommentModal.modalClasses}
//           >
//             <div>
//               <UserForm
//                 title="add a comment"
//                 toggle={manageCommentModal.Toggle}
//               >
//                 <textarea
//                   name="message"
//                   id="message"
//                   className="text-Area"
//                   onBlur={manageComentInput.onBlur}
//                   onChange={manageComentInput.valueChangeHandler}
//                   value={manageComentInput.valueState}
//                   hasError={manageComentInput.hasError}
//                   errotText="Message must not be empty"
//                 ></textarea>
//                 <button
//                   className="btn"
//                   onClick={(e) => {
//                     e.preventDefault();
//                     setErroMessageState("");
//                     let response = addNewComment(
//                       manageComentInput.valueState,
//                       ctx.userState
//                     );
//                     setApiCall(response);
//                     if (!apiCall) {
//                       setErroMessageState("Please retry");
//                     } else {
//                       setApiCall(false);
//                       manageComentInput.setValueState("");
//                       manageCommentModal.Toggle();
//                     }
//                   }}
//                 >
//                   Email Me
//                 </button>
//               </UserForm>
//             </div>
//           </Modal>
//         </section>;
//       }}
//     </Context.Consumer>
//   );
// };

// export default IndividualBlog;
