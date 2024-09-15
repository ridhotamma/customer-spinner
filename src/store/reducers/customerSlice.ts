import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface Customer {
  fullname: string;
  username: string;
  email: string;
  joinedDate: Date;
}

interface CustomerState {
  customers: Customer[];
}

const initialState: CustomerState = {
  customers: [],
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

export const { addCustomer, updateCustomer, deleteCustomer } =
  customerSlice.actions;

export default customerSlice.reducer;
