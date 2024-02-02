import css from './ImageModal.module.css';
import Modal from 'react-modal';
import { AiFillLike } from 'react-icons/ai';
import { RiOpenArmFill } from 'react-icons/ri';

Modal.setAppElement('#root');

const customStyles = {
  content: {
    top: '54%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    padding: '0',
    transform: 'translate(-50%, -50%)',
    objectFit: 'cover',
    overflow: 'hidden',
    boxShadow: 'rgb(38, 57, 77) 0px 20px 30px -10px',
  },
};

export function ImageModal({ closeModal, isModalOpen, modalInfo }) {
  const { urls, description, likes, user } = modalInfo;

  return (
    <div className={css.wrapModal}>
      <Modal
        isOpen={isModalOpen}
        // onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Modal"
      >
        <div className={css.divModal}>
          <img src={urls} alt={description} width="100%" height="100%" className={css.img} />
          <div className={css.info}>
            <b className={css.descr}>{description}</b>
            <div className={css.text}>
              <p>
                <AiFillLike size={24} />
                <b>Likes: </b>
                {likes}
              </p>
              <p>
                <RiOpenArmFill size={24} />
                <b>Author: </b>
                {user}
              </p>
            </div>
          </div>
        </div>
      </Modal>
    </div>
  );
}
