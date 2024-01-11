import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import api from "../../api/api";

export const get_seller_request = createAsyncThunk(
    'seller/get_seller_request',
    async ({ perPage, page, searchValue }, { rejectWithValue, fulfillWithValue }) => {
        try {
            const { data } = await api.get(`/request-seller-get?page=${page}&&searchValue=${searchValue}&&perPage=${perPage}`, { withCredentials: true });
            return fulfillWithValue(data)
        } catch (error) {
            return rejectWithValue(error.response.data)
        }
    }
);

export const get_seller = createAsyncThunk(
    'seller/get_seller',
    async (sellerId, { rejectWithValue, fulfillWithValue }) => {
        try {
            const { data } = await api.get(`/get-seller/${sellerId}`, { withCredentials: true });
            return fulfillWithValue(data)
        } catch (error) {
            console.log(error.response.data);
            return rejectWithValue(error.response.data)
        }
    }
);

export const seller_status_update = createAsyncThunk(
    'seller/seller_status_update',
    async (info, { rejectWithValue, fulfillWithValue }) => {
        try {
            const { data } = await api.post(`/seller-status-update`, info, { withCredentials: true });
            return fulfillWithValue(data)
        } catch (error) {
            return rejectWithValue(error.response.data)
        }
    }
);

export const get_all_sellers = createAsyncThunk(
    'seller/get_all_sellers',
    async ({ perPage, page, searchValue }, { rejectWithValue, fulfillWithValue }) => {
        try {
            const { data } = await api.get(`/get-all-sellers?page=${page}&searchValue=${searchValue}&perPage=${perPage}`
                , { withCredentials: true });
            return fulfillWithValue(data)
        } catch (error) {
            return rejectWithValue(error.response.data)
        }
    }
);

export const sellerReducer = createSlice({
    name: "seller",
    initialState: {
        successMessage: '',
        errorMessage: '',
        loader: false,
        sellers: [],
        totalSeller: 0,
        sellerRequests: [],
        totalSellerRequests: 0,
        seller: ''
    },
    reducers: {
        messageClear: (state, _) => {
            state.errorMessage = ''
            state.successMessage = ''
        }
    },
    extraReducers: {

        [get_seller_request.fulfilled]: (state, { payload }) => {
            state.totalSellerRequests = payload.totalSellerRequests
            state.sellerRequests = payload.sellerRequests
        },

        [get_seller.fulfilled]: (state, { payload }) => {
            state.seller = payload.seller
        },

        [seller_status_update.fulfilled]: (state, { payload }) => {
            state.seller = payload.seller
            state.successMessage = payload.message
        },

        [get_all_sellers.fulfilled]: (state, { payload }) => {
            state.totalSeller = payload.totalSeller
            state.sellers = payload.sellers
        },
    }
})

export const { messageClear } = sellerReducer.actions
export default sellerReducer.reducer