/* eslint-disable no-return-assign */
/* eslint-disable react/prop-types */
import Modal from 'react-modal';

const customStyles = {
  overlay: {
    backgroundColor: 'rgb(90 90 90 / 90%)',
  },
  content: {
    borderRadius: '10px',
    top: '50%',
    left: '50%',
    right: 'auto',
    height: '90%',
    width: '90%',
    maxWidth: '650px',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
};

function TodoItemDetails({ modalIsOpen, closeModal }) {
  let subtitle;

  function afterOpenModal() {
    // references are now sync'd and can be accessed.
    subtitle.style.color = '#f00';
  }

  return (
    <Modal
      isOpen={modalIsOpen}
      onAfterOpen={afterOpenModal}
      onRequestClose={closeModal}
      style={customStyles}
      contentLabel="Todo Item Details"
    >
      <h2 ref={(_subtitle) => (subtitle = _subtitle)}>Hello</h2>
      <button type="button" onClick={closeModal}>close</button>
    </Modal>
  );
}

export default TodoItemDetails;
