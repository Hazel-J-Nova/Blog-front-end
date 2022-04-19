// import axios from "axios";
// import FormData from "form-data";
// import Header from "../components/Main/Header";
// import Footer from "../components/Main/Footer";
// import { useState } from "react";
// import TextEditor from "../components/Forms/TextEditor";

// const AddPortfolio = () => {
//   const [responseState, setResponseState] = useState("");
//   const [errorMessageState, setErrorMessageState] = useState(false);
//   const [formInfo, setFormInfo] = useState({
//     title: "",
//     alt: "",
//     image: null,
//     url: [],
//   });

//   const axiosSubmit = (event) => {
//     event.preventDefault();

//     let formData = new FormData();
//     let fileData = formInfo.image;
//     let sendUrl = `evening-crag-18215.herokuapp.com/admin/portfolio`;
//     formData.append("image", fileData);
//     formData.append("title", formInfo.title);
//     formData.append("alt", formInfo.alt);

//     axios({
//       method: "POST",
//       url: sendUrl,
//       data: formData,

//       headers: {
//         "Content-Type": "multipart/form-data",
//       },
//     })
//       .then((response) => {
//         if (response.status === 200) {
//           return "Project Added";
//         } else {
//           return "";
//         }
//       })
//       .catch((e) => {
//         console.log(e);
//       });
//   };
//   const handleChange = (event) => {
//     setFormInfo((prevFormData) => {
//       return { ...prevFormData, [event.target.name]: event.target.value };
//     });
//   };
//   const handleFileChange = (event) => {
//     setFormInfo((prevFormData) => {
//       return { ...prevFormData, [event.target.name]: event.target.files[0] };
//     });
//   };

//   return (
//     <div>
//       <Header></Header>
//       <div className="row container">
//         {errorMessageState && <p>Something went wrong</p>}
//         <form
//           action="/projects/new"
//           method="post"
//           noValidate
//           className="validated-form"
//           encType="multipart/form-data"
//         >
//           <div className="form-group">
//             <label htmlFor="project-title">Project Title</label>
//             <input
//               type="text"
//               name="title"
//               id="title"
//               value={formInfo.title}
//               onChange={handleChange}
//             />
//           </div>
//           <div className="form-group">
//             <label htmlFor="project-title">Blog Intro</label>
//             <input
//               type="text"
//               name="blogIntro"
//               id="blogIntro"
//               value={formInfo.blogIntro}
//               onChange={handleChange}
//             />
//           </div>
//           <div className="form-group">
//             <label htmlFor="project-title">alt text</label>
//             <input
//               type="text"
//               name="alt"
//               id="alt"
//               value={formInfo.alt}
//               onChange={handleChange}
//             />
//           </div>
//           <div className="form-group">
//             <label htmlFor="project-title">project Url</label>
//             <input
//               type="text"
//               name="url"
//               id="url"
//               value={formInfo.url}
//               onChange={handleChange}
//             />
//           </div>

//           <div className="mb-3">
//             <div className="form-file custom-file">
//               <input
//                 type="file"
//                 className="form-file-input"
//                 id="image"
//                 name="image"
//                 onChange={handleFileChange}
//                 files={formInfo.image}
//               />
//               <label className="form-file-label" htmlFor="image">
//                 <span className="form-file-text custom-file-label">
//                   Choose image(s)...
//                 </span>
//                 <span className="form-file-button">Browse</span>
//               </label>
//             </div>
//           </div>
//           <button
//             onClick={(e) => {
//               let response = axiosSubmit;
//               setResponseState(response);
//               if (!responseState) {
//                 setErrorMessageState(true);
//                 setFormInfo({ title: "", alt: "", image: null, url: [] });
//               } else {
//                 console.log("succes");
//               }
//             }}
//             className="btn btn-primary"
//           >
//             submit
//           </button>
//         </form>
//       </div>
//       <Footer></Footer>
//     </div>
//   );
// };

// export default AddPortfolio;
