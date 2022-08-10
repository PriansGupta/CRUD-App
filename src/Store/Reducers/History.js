const initialState = [];
const CreateHistory = (state = initialState, action) => {
  const NewState = [...state, action.state];
  switch (action.type) {
    case "AddHistory":
      return (state = [...NewState]);
    default:
      return state;
  }
};

export default CreateHistory;
