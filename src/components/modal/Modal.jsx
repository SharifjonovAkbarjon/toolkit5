import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";
import { useDispatch } from "react-redux";
import { update } from "../../redux/cart";
import { v4 as id } from "uuid";
import { useGetValues } from "../hooks/useGetValue";
const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 500,
  bgcolor: "background.paper",
  p: 2,
};

const initialState = {
  id: "",
  username: "",
  lname: "",
  phone: "",
  desc: "",
};
export default function BasicModal({ ooo }) {
  const dispatch = useDispatch();

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [title, setTitle] = React.useState("");
  const handlSumbit = (e) => {
    e.preventDefault();
    setOpen(false);
    dispatch(update({ cart: { ...data, id: id() } }));
  };
  const { data, handleChange } = useGetValues(initialState);



  
  return (
    <div>
      <Button onClick={handleOpen}>{ooo}</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <form
            onSubmit={handlSumbit}
            className="flex flex-col gap-2"
            action=""
          >
            <div className="flex flex-col gap-1">
              <label className="" htmlFor="Username">
                Username
              </label>
              <input
                value={data.title}
                onChange={handleChange}
                name="username"
                className="border rounded-lg outline-none py-1 px-2"
                type="text"
                placeholder="Username"
              />
            </div>
            <div className="flex flex-col gap-1">
              <label className="" htmlFor="Username">
                Name
              </label>
              <input
                value={data.lname}
                onChange={handleChange}
                name="lname"
                className="border rounded-lg outline-none py-1 px-2"
                type="text"
                placeholder="Name"
              />
            </div>
            <div className="flex flex-col gap-1">
              <label className="" htmlFor="Username">
                Phone number
              </label>
              <input
                
                value={data.phone}
                onChange={handleChange}
                name="phone"
                className="border outline-none  py-1 px-2 rounded-lg"
                type="text"
                placeholder="Phone number"
              />
            </div>
            <button className="rounded-lg py-1 bg-[yellowgreen] text-[#fff]">Create card</button>
          </form>
        </Box>
      </Modal>
    </div>
  );
}
