import React from 'react';
import Modal from 'react-modal';

//Content Rating on Giphy: https://support.giphy.com/hc/en-us/articles/360058840971-Content-Rating
//Modals insted of Redux because I don't know how to save the app state

const GifModal = (props) => {
    if (!props.selectedGif) {
        return <div></div>;
      }

  return (
    <Modal
      isOpen={ props.modalIsOpen }
      onRequestClose={ () => props.onRequestClose() }>
      <div className="gif-modal">
        <img src={ props.selectedGif.images.original.url } alt=""/>
        <p><strong>Źródło:</strong> <a href={ props.selectedGif.source }>{ props.selectedGif.source }</a></p>
        <p><strong>Ocena:</strong> { props.selectedGif.rating }</p>

        <button onClick={() => props.onRequestClose()}>wróć</button>
      </div>
    </Modal>
  );
};

export default GifModal;