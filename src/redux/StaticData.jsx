const state = {
  user: {
    name: "Active User",
    email: "johndoe@gmail.com",
    profile_pic: "https://i.pravatar.cc/300?u=A",
    status: "Random status here",
    user_id: "H12I-1234",
  },
  messages: {
    "JUIZn-1234": {
      0: {
        is_User_Msg: true,
        number: 0,
        text: "0Hey, how are you doing?",
      },
      1: {
        is_User_Msg: false,
        number: 1,
        text: "1I'm good, how about you?",
      },
      2: {
        is_User_Msg: true,
        number: 2,
        text: "2I'm good, how about you?",
      },
      3: {
        is_User_Msg: false,
        number: 3,
        text: "3I'm good, how about you?",
      },
      4: {
        is_User_Msg: true,
        number: 4,
        text: "4I'm good, how about you?",
      },
      5: {
        is_User_Msg: false,
        number: 5,
        text: "5I'm good, how about you?",
      },
      6: {
        is_User_Msg: false,
        number: 6,
        text: "6I'm good, how about you?",
      },
      7: {
        is_User_Msg: true,
        number: 7,
        text: "7I'm good, how about you?",
      },
    },
    "JUIZn-1235": {
      0: {
        is_User_Msg: false,
        number: 0,
        text: "You know redux?",
      },
      1: {
        is_User_Msg: false,
        number: 1,
        text: "I'm good, how about you?",
      },
    },
  },
  typing: "",
  contacts: {
    "JUIZn-1234": {
      name: "John Doe",
      email: "fakejohn@gmail.com",
      profile_pic: "https://i.pravatar.cc/300?u=PPO",
      status: "Random status here",
      isOnline: true,
      user_id: "JUIZn-1234",
    },
    "JUIZn-1235": {
      name: "Jane Doe",
      email: "fakejohn@gmail.com",
      isOnline: false,
      profile_pic: "https://i.pravatar.cc/300?u=PAA",
      status: "Random status here",
      user_id: "JUIZn-1235",
    },
    "JUIZn-1236": {
      name: "Jane Doe",
      email: "fakejohn@gmail.com",
      isOnline: false,
      profile_pic: "https://i.pravatar.cc/300?u=MAA",
      status: "Random status here",
      user_id: "JUIZn-1236",
    },
    "JUIZn-1237": {
      name: "Jane Doe",
      email: "fakejohn@gmail.com",
      isOnline: false,
      profile_pic: "https://i.pravatar.cc/300?u=TAA",
      status: "Random status here",
      user_id: "JUIZn-1237",
    },
    "JUIZn-1238": {
      name: "Jane Doe",
      email: "fakejohn@gmail.com",
      isOnline: true,
      profile_pic: "https://i.pravatar.cc/300?u=TOO",
      status:
        "We can assume the status is a string here too right? I mean, it's not like it's a number or anything.",
      user_id: "JUIZn-1238",
    },
    "JUIZn-1239": {
      name: "Jane Doe",
      email: "fakejohn@gmail.com",
      isOnline: false,
      profile_pic: "https://i.pravatar.cc/300?u=TII",
      status: "Random status here",
      user_id: "JUIZn-1239",
    },
    "JUIZn-1215": {
      name: "Jane Doe",
      email: "fakejohn@gmail.com",
      isOnline: true,
      profile_pic: "https://i.pravatar.cc/300?u=MATA",
      status: "Random status here",
      user_id: "JUIZn-1215",
    },
    "JUIZn-1225": {
      name: "Jane Doe",
      email: "fakejohn@gmail.com",
      isOnline: false,
      profile_pic: "https://i.pravatar.cc/300?u=POTA",
      status: "Random status here",
      user_id: "JUIZn-1225",
    },
    "JUIZn-1245": {
      name: "Jane Doe",
      email: "fakejohn@gmail.com",
      isOnline: false,
      profile_pic: "https://i.pravatar.cc/300?u=KOTA",
      status: "Random status here",
      user_id: "JUIZn-1245",
    },
    "JUIZn-1255": {
      name: "Jane Doe",
      email: "fakejohn@gmail.com",
      isOnline: true,
      profile_pic: "https://i.pravatar.cc/300?u=FOTA",
      status: "Random status here",
      user_id: "JUIZn-1255",
    },
  },
  activeUserId: "",
};

export default state;
