import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Customer } from '../../types/Customer';

interface CustomerState {
  customers: Customer[];
}

const initialState: CustomerState = {
  customers: [
    {
      fullname: 'John Doe',
      username: 'johndoe',
      email: 'johndoe@example.com',
      joinedDate: new Date('2022-01-15'),
    },
    {
      fullname: 'Jane Smith',
      username: 'janesmith',
      email: 'janesmith@example.com',
      joinedDate: new Date('2021-06-12'),
    },
    {
      fullname: 'Robert Brown',
      username: 'robertbrown',
      email: 'robertbrown@example.com',
      joinedDate: new Date('2023-03-22'),
    },
    {
      fullname: 'Emily Davis',
      username: 'emilydavis',
      email: 'emilydavis@example.com',
      joinedDate: new Date('2020-11-30'),
    },
    {
      fullname: 'Michael Wilson',
      username: 'michaelwilson',
      email: 'michaelwilson@example.com',
      joinedDate: new Date('2022-05-09'),
    },
    {
      fullname: 'Sarah Johnson',
      username: 'sarahjohnson',
      email: 'sarahjohnson@example.com',
      joinedDate: new Date('2019-07-18'),
    },
    {
      fullname: 'David White',
      username: 'davidwhite',
      email: 'davidwhite@example.com',
      joinedDate: new Date('2023-08-05'),
    },
    {
      fullname: 'Anna Martin',
      username: 'annamartin',
      email: 'annamartin@example.com',
      joinedDate: new Date('2021-09-13'),
    },
    {
      fullname: 'Chris Taylor',
      username: 'christaylor',
      email: 'christaylor@example.com',
      joinedDate: new Date('2022-12-01'),
    },
    {
      fullname: 'Olivia Lee',
      username: 'olivialee',
      email: 'olivialee@example.com',
      joinedDate: new Date('2020-04-25'),
    },
  ],
};

const customerSlice = createSlice({
  name: 'customer',
  initialState,
  reducers: {
    addCustomer: (state, action: PayloadAction<Customer>) => {
      state.customers.push(action.payload);
    },

    updateCustomer: (state, action: PayloadAction<Customer>) => {
      const index = state.customers.findIndex(
        (customer) => customer.username === action.payload.username
      );
      if (index !== -1) {
        state.customers[index] = action.payload;
      }
    },

    deleteCustomer: (state, action: PayloadAction<string>) => {
      state.customers = state.customers.filter(
        (customer) => customer.username !== action.payload
      );
    },
  },
});

export const { addCustomer, updateCustomer, deleteCustomer } = customerSlice.actions;

export default customerSlice.reducer;