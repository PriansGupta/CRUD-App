const initialState = [
  {
    name: "Educational",
    id: "1",
  },
  {
    name: "Entertainment",
    id: "2",
  },
];
const Bucket = (state = initialState, action) => {
  let NewState;
  if (action.type === "CreateBucket") NewState = [...state, action.state];
  else if (action.type === "DeleteBucket") {
    state = state.filter((item) => item.name !== action.state.Bucket);
    NewState = [...state];
  }
  switch (action.type) {
    case "CreateBucket":
      return (state = [...NewState]);
    case "DeleteBucket":
      return (state = [...NewState]);
    default:
      return state;
  }
};

export default Bucket;
