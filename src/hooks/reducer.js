const reducer = (state, action) => {
    console.log(action.type, '-', action.payload);
    switch (action.type) {
        default:
            throw new Error('No matching action found!');
    }
};

export default reducer;
