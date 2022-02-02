/* eslint-disable no-return-assign */
/* eslint-disable react/prop-types */
import {
  Modal, Media, Content, Button,
} from 'react-bulma-components';
import { useSelector, useDispatch } from 'react-redux';
import { useState } from 'react';

import { deleteTask, editTask, toggleMarkAsDone } from '../../redux/tasksSlice';

function TodoItemDetails({ modalIsOpen, closeModal, selectedTodoId }) {
  const todo = useSelector(
    (state) => state.tasks.find((item) => (item.id === selectedTodoId)),
  );
  const {
    id, title, done, date,
  } = todo;

  const [showEditInput, setShowEditInput] = useState(false);
  const [newTitle, setNewTitle] = useState('');
  const dispatch = useDispatch();

  const showEditInputHandler = () => {
    setNewTitle(title);
    setShowEditInput(true);
  };

  const hideEditInputHandler = () => {
    setNewTitle('');
    setShowEditInput(false);
  };

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
        title: newTitle,
      }),
    );

    hideEditInputHandler();
  };

  const toggleMarkAsDoneHandler = () => {
    dispatch(toggleMarkAsDone({ id }));
  };

  const closeModalHandler = () => {
    setShowEditInput(false);
    closeModal();
  };

  return (
    <Modal
      show={modalIsOpen}
      onClose={closeModalHandler}
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
                { !showEditInput ? (
                  <>
                    <p role="presentation" onClick={showEditInputHandler}>
                      {title}
                    </p>
                    <p className="date tag">
                      {date}
                    </p>
                  </>
                ) : (
                  <div>
                    <p>
                      <textarea
                        className="textarea"
                        onChange={(event) => setNewTitle(event.target.value)}
                      >
                        {title}
                      </textarea>
                    </p>

                    <p className="buttons">
                      <Button className="is-success" onClick={editTaskHandler}>
                        Update
                      </Button>
                      <Button className="is-danger" onClick={hideEditInputHandler}>
                        Cancel
                      </Button>
                    </p>
                  </div>
                )}

              </Content>
            </Media.Item>
          </Media>
        </Modal.Card.Body>
        <Modal.Card.Footer
          align="right"
        >
          <Button className="is-primary" onClick={showEditInputHandler}>
            Edit
          </Button>
          <Button className="is-danger" onClick={deleteTaskHandler}>
            Delete
          </Button>
          <Button className="" onClick={closeModalHandler}>
            Close
          </Button>
        </Modal.Card.Footer>
      </Modal.Card>
    </Modal>
  );
}

export default TodoItemDetails;
