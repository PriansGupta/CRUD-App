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
  const NewState = [...state, action.state];
  switch (action.type) {
    case "CreateBucket":
      return (state = [...NewState]);
    default:
      return state;
  }
};

export default Bucket;
