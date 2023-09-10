import { useForm } from "react-hook-form";
import Modal from "../ui/Modal";
import { useDispatch } from "react-redux";
import { addTask } from "../../redux/feature/tasks/tasksSlice";

const AddTasksModal = ({ isOpen, setIsOpen }) => {
  const { register, handleSubmit, reset } = useForm();
  const dispatch = useDispatch();

  const onCancel = () => {
    reset();
    setIsOpen(false);
  };

  const onSubmit = (data) => {
    dispatch(addTask(data));
    onCancel();
  };

  return (
    <Modal isOpen={isOpen} setIsOpen={setIsOpen} title="Programming Hero">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="flex flex-col gap-3">
          <label htmlFor="title">Title</label>
          <input
            type="text"
            className="w-full rounded-md"
            id="name"
            {...register("name")}
          />
        </div>
        <div className="flex flex-col gap-3">
          <label htmlFor="discription">discription</label>
          <textarea
            type="text"
            className="w-full rounded-md"
            id="discription"
            {...register("discription")}
          />
        </div>
        <div className="flex flex-col gap-3">
          <label htmlFor="date" className="md-2">
            Date
          </label>
          <input
            className="w-full rounded-md"
            type="date"
            id="date"
            {...register("date")}
          />
        </div>
        <div className="flex flex-col md-5">
          <label htmlFor="title" className="mb-2">
            Assign to
          </label>
          <select
            className="w-full rounded-md"
            id="assignedTo"
            {...register("assignedTo")}
          >
            <option value="Mir Hussain">Mir Hussin</option>
            <option value="Saiful islam">Saiful islam</option>
            <option value="seeam">seeam</option>
            <option value="seeam nur">seeam nur</option>
            <option value="Safoun">Safoun</option>
            <option value="Rakib">Rakib</option>
          </select>
        </div>
        <div className="flex flex-col mb-5">
          <label htmlFor="title" className="mb2">
            Proority
          </label>
          <select
            className="w-full rounded-md"
            id="proority"
            {...register("proority")}
          >
            <option defaultValue value="high">
              High
            </option>
            <option value="midium">Midiam</option>
            <option value="low">Low</option>
          </select>
        </div>
        <div className="flex gap-3 justify-end">
          <button onClick={() => onCancel()} className="btn btn-danger">
            Cancel
          </button>
          <button className="btn btn-primary" type="submit">
            Submit
          </button>
        </div>
      </form>
    </Modal>
  );
};

export default AddTasksModal;
