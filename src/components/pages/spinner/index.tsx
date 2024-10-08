import React, { useState } from 'react';
import { Wheel } from 'react-custom-roulette';
import { useSelector } from 'react-redux';
import Modal from 'react-modal';
import { RootState } from '../../../store';

Modal.setAppElement('#root');

const SpinnerPage: React.FC = () => {
  const [mustSpin, setMustSpin] = useState(false);
  const [prizeNumber, setPrizeNumber] = useState(0);
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const customers = useSelector((state: RootState) => state.customer.customers);

  const data = customers.map((customer, index) => ({
    option: customer.username || `Customer ${index + 1}`,
  }));

  const handleSpinClick = () => {
    if (!mustSpin && data.length > 0) {
      const newPrizeNumber = Math.floor(Math.random() * data.length);
      setPrizeNumber(newPrizeNumber);
      setMustSpin(true);
    }
  };

  const handleStopSpinning = () => {
    setMustSpin(false);
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  return (
    <div className='w-full flex flex-col gap-12 justify-center items-center'>
      {data.length > 0 ? (
        <>
          <Wheel
            mustStartSpinning={mustSpin}
            prizeNumber={prizeNumber}
            data={data}
            onStopSpinning={handleStopSpinning}
            outerBorderColor={'#ccc'}
            outerBorderWidth={9}
            innerBorderColor={'#f2f2f2'}
            radiusLineColor={'tranparent'}
            radiusLineWidth={1}
            textColors={['#f5f5f5']}
            textDistance={55}
            fontSize={10}
            backgroundColors={[
              '#3f297e',
              '#175fa9',
              '#169ed8',
              '#239b63',
              '#64b031',
              '#efe61f',
              '#f7a416',
              '#e6471d',
              '#dc0936',
              '#e5177b',
              '#be1180',
              '#871f7f',
            ]}
          />
          <button className='px-8 py-2 bg-blue-800 text-white rounded-md' onClick={handleSpinClick}>
            SPIN
          </button>

          <Modal
            style={{ content: { zIndex: 99 }, overlay: { zIndex: 99 } }}
            isOpen={modalIsOpen}
            onRequestClose={closeModal}
            contentLabel='Winner Modal'
            className='flex flex-col bg-white rounded-lg shadow-lg p-8 z-10'
            overlayClassName='fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center'
          >
            <h2 className='text-2xl font-bold mb-4'>Congratulations!</h2>
            <p>
              The winner is:{' '}
              <span className='font-bold'>{data[prizeNumber].option}</span>
            </p>
            <button
              className='mt-6 px-6 py-2 bg-blue-500 text-white rounded'
              onClick={closeModal}
            >
              Close
            </button>
          </Modal>
        </>
      ) : (
        <p>No customers available to spin.</p>
      )}
    </div>
  );
};

export default SpinnerPage;
