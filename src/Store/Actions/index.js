export const CreateBucket = (props) => {
  return {
    state: {
      name: props.name,
      id: props.id,
    },
    type: "CreateBucket",
  };
};
export const CreateNewCard = (props) => {
  return {
    state: {
      name: props.name,
      link: props.link,
      id: props.id,
      Bucket: props.Bucket,
    },
    type: "CreateNewCard",
  };
};

export const DeleteCard = (props) => {
  return {
    state: {
      name: props.name,
      link: props.link,
      id: props.id,
      Bucket: props.Bucket,
    },
    type: "DeleteCard",
  };
};

export const EditCard = (props) => {
  return {
    state: {
      name: props.name,
      link: props.link,
      id: props.id,
      Bucket: props.Bucket,
    },
    type: "EditCard",
  };
};

export const DeleteAll = (props) => {
  return {
    state: {
      Bucket: props.Bucket,
    },
    type: "DeleteAll",
  };
};

export const AddHistory = (props) => {
  return {
    state: {
      Cardname: props.name,
      id: props.id,
      link: props.link,
    },
    type: "AddHistory",
  };
};
