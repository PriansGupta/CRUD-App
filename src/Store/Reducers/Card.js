const initialState = [
  {
    name: "DSA Course",
    id: "1",
    link: "https://www.youtube.com/watch?v=PZogbfU4X5E",
    Bucket: "Educational",
  },
  {
    name: "Javascript Course",
    id: "2",
    link: "https://www.youtube.com/watch?v=hKB-YGF14SY&t=9659s",
    Bucket: "Educational",
  },
  {
    name: "Kesariya",
    id: "3",
    link: "https://www.youtube.com/watch?v=BddP6PYo2gs",
    Bucket: "Entertainment",
  },
];
const Card = (state = initialState, action) => {
  let NewState = [];
  if (action.type === "CreateNewCard") {
    NewState = [...state, action.state];
  } else if (action.type === "DeleteCard") {
    NewState = state.filter((item) => item.id !== action.state.id);
  } else if (action.type === "EditCard") {
    let idx = state
      .map((e) => {
        return e.id;
      })
      .indexOf(action.state.id);
    state[idx].name = action.state.name;
    state[idx].link = action.state.link;
    state[idx].Bucket = action.state.Bucket;
    NewState = [...state];
  } else if (action.type === "DeleteAll") {
    state = state.filter((item) => item.Bucket !== action.state.Bucket);
    NewState = [...state];
  }
  switch (action.type) {
    case "CreateNewCard":
      return (state = [...NewState]);
    case "DeleteCard":
      return (state = [...NewState]);
    case "EditCard":
      return (state = [...NewState]);
    case "DeleteAll":
      return (state = [...NewState]);
    default:
      return state;
  }
};

export default Card;
