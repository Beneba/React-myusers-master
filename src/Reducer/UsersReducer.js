
const initialState = {
  users: [
    {
      name: "Bless Afetsi",
      email: "bless@email.com",
      gen: 2,
      id: "i4345mnf",
    },
    {
      name: "Ahmed zaky",
      email: "zak@email.com",
      gen: 13,
      id: "brn2n54y",
    },

    {
      name: "Awal Mubarack",
      email: "awal@email.com",
      gen: 2,   
      id: "ir456k2i",
    },
  ],
};

const UsersReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_USER":
      return { ...state.users, users: [...state.users, action.payload] };

    case "DELETE_USER":
      let notDeletedUsers = state.users.filter((each_item_in_array) => {
        return each_item_in_array.id !== action.payload;
      });

      return { users: notDeletedUsers };

   

    case "EDIT_USER":
      const updatedUser = state.users.map((each_user) => {
        if (each_user.id === action.user_id) {
          return { ...each_user, ...action.updatedUser };
        } else {
          return each_user;
        }
      });
      return { ...state, users: updatedUser };

    case 'SET_ALL_USERS':
      return { ...state, users: action.paylaod}


    default:
      return state;
  }
};
export default UsersReducer;
