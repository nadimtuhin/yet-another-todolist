/* eslint-disable no-return-assign */
/* eslint-disable react/prop-types */
import {
  Modal, Media, Content, Button,
} from 'react-bulma-components';
import { useSelector, useDispatch } from 'react-redux';

import { deleteTask, editTask, toggleMarkAsDone } from '../../redux/tasksSlice';

function TodoItemDetails({ modalIsOpen, closeModal, selectedTodoId }) {
  const todo = useSelector(
    (state) => state.tasks.find((item) => (item.id === selectedTodoId)),
  );

  const { id, title, done } = todo;

  const dispatch = useDispatch();

  const deleteTaskHandler = (event) => {
    event.stopPropagation();
    event.preventDefault();
    closeModal();
    dispatch(deleteTask({ id }));
  };

  const editTaskHandler = () => {
    dispatch(
      editTask({
        id,
        title: `testing edit ${new Date()}`,
      }),
    );
  };

  const toggleMarkAsDoneHandler = () => {
    dispatch(toggleMarkAsDone({ id }));
  };

  return (
    <Modal
      show={modalIsOpen}
      onClose={closeModal}
    >
      <Modal.Card>
        <Modal.Card.Header>
          <Modal.Card.Title>
            Task
          </Modal.Card.Title>
        </Modal.Card.Header>
        <Modal.Card.Body>
          <Media>
            <Media.Item
              align="left"
              renderAs="figure"
            >
              <label htmlFor={`task-item-${id}`} className="inline-flex items-center p-2">
                <input
                  id={`task-item-${id}`}
                  onChange={toggleMarkAsDoneHandler}
                  type="checkbox"
                  className="w-6 h-6 rounded-full cursor-pointer"
                  checked={done}
                  title="mark as done"
                />
              </label>
            </Media.Item>
            <Media.Item>
              <Content>
                <p>
                  {title}
                </p>
              </Content>
            </Media.Item>
          </Media>
        </Modal.Card.Body>
        <Modal.Card.Footer
          align="right"
        >
          <Button color="success" onClick={closeModal}>
            Close
          </Button>
          <Button onClick={deleteTaskHandler}>
            Delete
          </Button>
        </Modal.Card.Footer>
      </Modal.Card>
    </Modal>
  );
}

export default TodoItemDetails;
