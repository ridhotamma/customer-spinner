import React, { useState } from 'react';
import Modal from 'react-modal';
import { useDispatch, useSelector } from 'react-redux';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { RootState } from '../../../store';
import {
  addCustomer,
  updateCustomer,
  deleteCustomer,
} from '../../../store/reducers/customerSlice';
import { Customer } from '../../../types/Customer';
import Table from '../../table';

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    backgroundColor: '#fff',
    borderRadius: '8px',
    padding: '20px',
    width: '500px',
  },
  overlay: {
    backgroundColor: 'rgba(0, 0, 0, 0.75)',
  },
};

Modal.setAppElement('#root');

const validationSchema = Yup.object({
  fullname: Yup.string().required('Full Name is required'),
  username: Yup.string().required('Username is required'),
  email: Yup.string()
    .email('Invalid email address')
    .required('Email is required'),
});

const CustomerPage: React.FC = () => {
  const dispatch = useDispatch();
  const customers = useSelector((state: RootState) => state.customer.customers);

  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [isEditing, setIsEditing] = useState(false);

  const formik = useFormik({
    initialValues: {
      fullname: '',
      username: '',
      email: '',
      joinedDate: new Date(),
    },
    validationSchema,
    onSubmit: (values) => {
      if (isEditing) {
        dispatch(updateCustomer(values));
      } else {
        dispatch(addCustomer(values));
      }
      closeModal();
    },
  });

  const openModal = (customer?: Customer) => {
    if (customer) {
      formik.setValues(customer);
      setIsEditing(true);
    } else {
      formik.resetForm();
      setIsEditing(false);
    }
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  const handleDeleteCustomer = (username: string) => {
    dispatch(deleteCustomer(username));
  };

  const columns: { label: string; accessor: keyof Customer | 'actions' }[] = [
    { label: 'Full Name', accessor: 'fullname' },
    { label: 'Username', accessor: 'username' },
    { label: 'Email', accessor: 'email' },
    { label: 'Joined Date', accessor: 'joinedDate' },
    { label: 'Actions', accessor: 'actions' },
  ];

  return (
    <div className='p-8'>
      <div className='w-full flex justify-between items-center'>
        <h1 className='text-2xl font-bold mb-4'>Customer List</h1>
        <button
          className='bg-blue-500 text-white px-4 py-2 mb-4 rounded'
          onClick={() => openModal()}
        >
          Add Customer
        </button>
      </div>
      <Table
        data={customers.map((customer) => ({
          ...customer,
          joinedDate: new Date(customer.joinedDate).toLocaleDateString(),
          actions: (
            <div>
              <button
                className='bg-green-500 text-white px-2 py-1 mr-2 rounded'
                onClick={() => openModal(customer)}
              >
                Edit
              </button>
              <button
                className='bg-red-500 text-white px-2 py-1 rounded'
                onClick={() => handleDeleteCustomer(customer.username)}
              >
                Delete
              </button>
            </div>
          ),
        }))}
        columns={columns}
      />

      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel={isEditing ? 'Edit Customer' : 'Add Customer'}
      >
        <h2 className='text-xl font-bold mb-4'>
          {isEditing ? 'Edit Customer' : 'Add Customer'}
        </h2>
        <form onSubmit={formik.handleSubmit}>
          <div className='mb-4'>
            <label className='block text-gray-700'>Full Name</label>
            <input
              type='text'
              name='fullname'
              value={formik.values.fullname}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              className='border rounded w-full py-2 px-3'
            />
            {formik.touched.fullname && formik.errors.fullname ? (
              <div className='text-red-500'>{formik.errors.fullname}</div>
            ) : null}
          </div>
          <div className='mb-4'>
            <label className='block text-gray-700'>Username</label>
            <input
              type='text'
              name='username'
              value={formik.values.username}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              className='border rounded w-full py-2 px-3'
              disabled={isEditing}
            />
            {formik.touched.username && formik.errors.username ? (
              <div className='text-red-500'>{formik.errors.username}</div>
            ) : null}
          </div>
          <div className='mb-4'>
            <label className='block text-gray-700'>Email</label>
            <input
              type='email'
              name='email'
              value={formik.values.email}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              className='border rounded w-full py-2 px-3'
            />
            {formik.touched.email && formik.errors.email ? (
              <div className='text-red-500'>{formik.errors.email}</div>
            ) : null}
          </div>
          <div className='flex'>
            <button
              type='submit'
              className='bg-blue-500 text-white px-4 py-2 mr-2 rounded'
            >
              {isEditing ? 'Save Changes' : 'Add Customer'}
            </button>
            <button
              type='button'
              className='bg-gray-500 text-white px-4 py-2 rounded'
              onClick={closeModal}
            >
              Cancel
            </button>
          </div>
        </form>
      </Modal>
    </div>
  );
};

export default CustomerPage;
