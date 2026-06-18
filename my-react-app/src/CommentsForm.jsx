import { useState } from "react";
import { useFormik } from "formik";
export default function CommentsForm({ addnewcomment }) {
  // let [formdata, setformdata] = useState({
  //   username: "",
  //   remarks: "",
  //   rating: 5,
  // });
  const validate = (values) => {
    const errors = {};
    if (!values.username) {
      errors.username = "Username is required";
    }
    return errors;
  };

  const formik = useFormik({
    initialValues: {
      username: "",
      remarks: "",
      rating: 5,
    },
    validate,
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });

  // let handleinputchange = (event) => {
  //   setformdata((currdata) => {
  //     return { ...currdata, [event.target.name]: event.target.value };
  //   });
  // };
  // let handlesubmit = (event) => {
  //   addnewcomment(formdata);
  //   setformdata({
  //     username: "",
  //     remarks: "",
  //     rating: 5,
  //   });
  // };
  return (
    <div>
      <h4>Give a comment : </h4>
      <form onSubmit={formik.handleSubmit}>
        <label htmlFor="username">Username : </label>
        <input
          placeholder="username"
          type="text"
          value={formik.values.username}
          onChange={formik.handleChange}
          id="username"
          name="username"
        />
        {formik.errors.username ? <div>{formik.errors.username}</div> : null}

        <br />
        <br />
        <br />
        <label htmlFor="remarks">Remarks : </label>
        <textarea
          value={formik.values.remarks}
          placeholder="Add Few Remarks"
          onChange={formik.handleChange}
          id="remarks"
          name="remarks"
        ></textarea>
        {formik.errors.remarks ? <div>{formik.errors.remarks}</div> : null}

        <br />
        <label htmlFor="rating">Rating : </label>
        <input
          placeholder="rating"
          type="number"
          min={1}
          max={5}
          value={formik.values.rating}
          onChange={formik.handleChange}
          id="rating"
          name="rating"
        />
        {formik.errors.rating ? <div>{formik.errors.rating}</div> : null}

        <br />
        <br />
        <button>Add Comment</button>
      </form>
    </div>
  );
}
