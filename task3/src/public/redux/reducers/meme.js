const initialState = {
    memes: [],
    singleMeme: [],
    comments: [],
    replies: [],
    isLoading: false,
    isFinish: false,
    isError: false
}

export default memesReducer = (state = initialState, action) => {
    switch (action.type) {
        /// FETCH MEMES ------------------
        case "FETCH_MEMES_PENDING":
            return {
                ...state,
                isLoading: true
            }
        case "FETCH_MEMES_FULFILLED":
            return {
                ...state,
                isLoading: false,
                isFinish: true,
                memes: action.payload.data.memes
            }
        case "FETCH_MEMES_REJECTED":
            return {
                ...state,
                isLoading: false,
                isError: true
            }

        /// FETCH MEMES ------------------
        case "FETCH_SINGLE_MEME_PENDING":
            return {
                ...state,
                isLoading: true
            }
        case "FETCH_SINGLE_MEME_FULFILLED":
            return {
                ...state,
                isLoading: false,
                isFinish: true,
                singleMeme: action.payload.data,
                comments: action.payload.data.comments
            }
        case "FETCH_SINGLE_MEME_REJECTED":
            return {
                ...state,
                isLoading: false,
                isError: true
            }


        /// ADD COMMENT ------------------
        case "POST_COMMENT_PENDING":
            return {
                ...state,
                isLoading: true
            }
        case "POST_COMMENT_FULFILLED":
            return {
                ...state,
                isLoading: false,
                isFinish: true,
                comments: [...state.comments, action.payload.data.data]
            }
        case "POST_COMMENT_REJECTED":
            return {
                ...state,
                isLoading: false,
                isError: true
            }

        // /// EDIT PRODUCT ------------------
        // case EDIT_PRODUCT_PENDING:
        //     return {
        //         ...state,
        //         isLoading: true
        //     }
        // case EDIT_PRODUCT_FULFILLED:
        //     return {
        //         ...state,
        //         isLoading: false,
        //         isFinish: true,
        //         products: state.products.map(product =>
        //             (product._id == action.payload.data.product._id) ?
        //                 { ...product, 
        //                     name: action.payload.data.product.name,
        //                     price: action.payload.data.product.price,
        //                     submitBy: action.payload.data.product.submitBy,
        //                 }
        //                  : product
        //         )
        //     }
        // case EDIT_PRODUCT_REJECTED:
        //     return {
        //         ...state,
        //         isLoading: false,
        //         isError: true
        //     }

        // /// REMOVE PRODUCT ------------------
        // case REMOVE_PRODUCT_PENDING:
        //     return {
        //         ...state,
        //         isLoading: true
        //     }
        // case REMOVE_PRODUCT_FULFILLED:
        //     return {
        //         ...state,
        //         isLoading: false,
        //         isFinish: true,
        //         products: state.products.filter(product => product._id !== action.payload.data.id)
        //         // products: state.products.filter(product => product.id !== action.payload.data.products._id)
        //     }
        // case REMOVE_PRODUCT_REJECTED:
        //     return {
        //         ...state,
        //         isLoading: false,
        //         isError: true
        //     }

        // // case TOGGLE_GRID:
        // //     return {
        // //         ...state,
        // //         products: [...state.products],
        // //         isGrid: !state.isGrid
        // //     }

        default:
            return state;
    }
}