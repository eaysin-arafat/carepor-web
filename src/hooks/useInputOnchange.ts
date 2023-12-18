// import { OnchangeEventType } from "@/types/htmlEvents";
// import { TypeValidation } from "@/utilities/type-valdation";
// import { useState } from "react";

// const useInputOnchange = ({
//   initialState,
//   setInputError = null,
//   numberOnly = [],
//   textOnly = [],
//   personName = [],
// }) => {
//   const [formState, setFormState] = useState(initialState);

//   const handleInputChange = (e: OnchangeEventType) => {
//     const { name, value, type } = e.target;

//     if (personName.includes(name)) {
//       if (value.length > 20 || TypeValidation) {
//         return;
//       }
//       setFormState((prev) => ({ ...prev, [name]: value.replace(/ /g, "") }));
//       setInputError && setInputError((prev) => ({ ...prev, [name]: "" }));
//       return;
//     }

//     setFormState((prev) => ({ ...prev, [name]: value }));
//     if (setInputError) {
//       setInputError((prev) => ({ ...prev, [e.target.name]: "" }));
//     }
//   };
// };

// export default useInputOnchange;

// const useInput = (field, setError) => {
//   const [input, setInput] = useState(field);
//   const handleInputChange = (e) => {
//     e.preventDefault();
//     setInput((prev) => ({ ...prev, [e.target.name]: e.target.value }));
//     if (setError) {
//       setError((prev) => ({ ...prev, [e.target.name]: "" }));
//     }
//   };
//   return { input, setInput, handleInputChange };
// };
