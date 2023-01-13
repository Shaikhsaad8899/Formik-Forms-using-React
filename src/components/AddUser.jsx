import React, { useState, useEffect } from "react";
import axios from "axios";
// import { DashboardUser } from "./DashboardUser";
// import "./Hompage.css";
export const AddUser = () => {
  const [data, setGetData] = useState([{}]);
  useEffect(() => {
    getUser();
    console.log(data);
  }, []);
 
  const getUser = async () => {
    await axios
      .get("http://localhost:5000/createuser")
      .then((response) => setGetData(response.data));
  };
  const deleteUser = async (id) => {
    await axios
      .delete("http://localhost:5000/createuser/" + id)
      .then((response) => alert("User Deleted"));
    getUser();
  };
  const [formData, setFormData] = useState({
    id: "",
    name: "",
    city: "",
    mobile: "",
    salary: "",
    // img: "",
  });
  const handleUpdate = async () => {
    await axios
      .put(`http://localhost:5000/createuser/${updateData.id}`, updateData)
      .then((res) => {
        alert("USER UPDATED");
        getUser();
      });
  };
  const [updateData, setUpdateData] = useState({
    id: "",
    name: "",
    city: "",
    mobile: "",
    salary: "",
    // img: "",
  });
  const handleFormSubmit = async () => {
    let response = await axios.post(
      "http:localhost:5000/createuser",
      formData
    );
    if (response) {
      alert("Data Submitted");
    } else {
      alert("Error in Submission");
    }
    setFormData({
      id: "",
      name: "",
      city: "",
      mobile: "",
      salary: "",
      // img: "",
    });
    getUser();
  };

  return (
    <div>
    <h1 className="mt-4">Welcome</h1>
      <div className="row d-flex justify-content-center ">
        <div className="col-4 mb-4 p-4 d-flex justify-content-center">
          <form>
            <input
              onChange={(e) =>
                setFormData({
                  ...formData,
                  name: e.target.value,
                })
              }
              id="name"
              value={formData.name}
              placeholder="name"
              type="text"
            />
            <input
              onChange={(e) =>
                setFormData({
                  ...formData,
                  city: e.target.value,
                })
              }
              id="city"
              value={formData.city}
              placeholder="city"
              type="text"
            />

            <input
              onChange={(e) =>
                setFormData({
                  ...formData,
                  mobile: e.target.value,
                })
              }
              id="mobile"
              value={formData.mobile}
              placeholder="mobile"
              type="text"
            />

            <input
              onChange={(e) =>
                setFormData({
                  ...formData,
                  salary: e.target.value,
                })
              }
              id="salary"
              value={formData.salary}
              placeholder="salary"
              type="number"
            />

            {/* <input
              onChange={(e) =>
                setFormData({
                  ...formData,
                  img: e.target.value,
                })
              }
              id="Image"
             value={formData.img}
              placeholder="Image"
              type="file" 
            /> */}

            <button id="btn-1" onClick={handleFormSubmit}>
              Submit
            </button>
          </form>
        </div>
      </div>
      <div className="row d-flex justify-content-center">
        <div className="col-12 d-flex justify-content-center">
          <div>
            {/* Hello here <button onClick={getUser}></button> */}
            <table>
              <thead>
                <tr>
                  <td>Name</td>
                  <td>City</td>
                  <td>Mobile</td>
                  <td>Salary</td>
                  {/* <td>Profile Image</td> */}
                  <td>Edit</td>
                  <td>Delete</td>
                </tr>
              </thead>
              <tbody>
                {data &&
                  data.map((user, key) => (
                    <tr key={user.id}>
                      {" "}
                      <td>{user.name}</td>
                      <td>{user.city}</td>
                      <td>{user.mobile}</td>
                      <td>{user.salary}</td>
                      {/* <td>{user.img}</td> */}
                      <td>
                        <button
                          type="button"
                          // className="btn btn-primary"
                          data-toggle="modal"
                          data-target="#exampleModal"
                          onClick={() =>
                            setUpdateData({
                              name: user.name,
                              city: user.city,
                              mobile: user.mobile,
                              salary: user.salary,
                              // img: user.img,
                              id: user.id,
                            })
                          }
                        >
                          Edit
                        </button>
                      </td>
                      <td>
                        <button onClick={() => deleteUser(user.id)}>
                          Delete
                        </button>
                      </td>
                    </tr>
                  ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <div
        className="modal fade"
        id="exampleModal"
        tabindex="-1"
        role="dialog"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">
                Update User
              </h5>
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body">
              {/* <div className="row d-flex justify-content-center ">
                <div className="col-4 m-4 p-4 d-flex justify-content-center"> */}
                  <form>
                    <input
                      onChange={(e) =>
                        setUpdateData({
                          ...updateData,
                          name: e.target.value,
                        })
                      }
                      id="name"
                      value={updateData.name}
                      placeholder="name"
                      type="text"
                    />
                    <input
                      onChange={(e) =>
                        setUpdateData({
                          ...updateData,
                          city: e.target.value,
                        })
                      }
                      id="city"
                      value={updateData.city}
                      placeholder="city"
                      type="text"
                    />

                    <input
                      onChange={(e) =>
                        setUpdateData({
                          ...updateData,
                          mobile: e.target.value,
                        })
                      }
                      id="mobile"
                      value={updateData.mobile}
                      placeholder="mobile"
                      type="text"
                    />

                    <input
                      onChange={(e) =>
                        setUpdateData({
                          ...updateData,
                          salary: e.target.value,
                        })
                      }
                      id="salary"
                      value={updateData.salary}
                      placeholder="salary"
                      type="number"
                    />

                  {/* <input
                      onChange={(e) =>
                        setUpdateData({
                          ...updateData,
                          img: e.target.value,
                        })
                      }
                      id="Image"
                      // defaultValue={formData.img}
                      value={updateData.img}
                      placeholder="Image"
                      type="file"
                    />  */}
                  {/* <button id="btn-1" onClick={handleFormSubmit}>
                      Submit
                    </button>            */}
                            </form>
                {/* </div>
              </div> */}
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-dismiss="modal"
              >
                Close
              </button>
              <button
                type="button"
                className="btn btn-primary"
                onClick={()=>handleUpdate()}
                data-dismiss="modal"

              >
                Update User
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
