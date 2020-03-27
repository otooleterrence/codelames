import { createSlice } from '@reduxjs/toolkit';

export const slice = createSlice({
  name: 'newGame',
  initialState: {
    // value: 0,
    gameActive: false,
    roomName: 'myName',
    players: [
      {
        name: 'Liz',
        team: 'red',
        leader: true,
      },
      {
        name: 'Drew',
        team: 'red',
        leader: false,
      },
      {
        name: 'Kevin',
        team: 'blue',
        leader: false,
      },
      {
        name: 'Kristen',
        team: 'blue',
        leader: true,
      },
    ],
    leaders: [],
    teamColors: ['red', 'blue'],
    myTeam: '',
    myName: '',
    teamLeader: false,
    activeTeam: '',
    terms: [],
    spyTerm: '',
    spyTermActive: false,
    blueScore: 0,
    redScore: 0,
  },
  reducers: {
    addNewRoom: (state, action) => {
      state.roomName = action.payload;
    },
    updateNameAndTeam: (state, action) => {
      const { name, team } = action.payload;
      const deadName = state.myName;

      state.myName = name;
      state.myTeam = team;
      const oldPlayers =
        state.players.filter(player => player.name !== deadName);
      state.players = [
        ...oldPlayers,
        {
          name,
          team,
          leader: false,
        },
      ];
    },
    setMeLeader: state => {
      const name = state.myName;
      const team = state.myTeam;
      const oldLeader = state.players
        .findIndex(player => player.leader && player.team === team);
      const myIndex = state.players
        .findIndex(player => player.name === name);
      state.players[oldLeader].leader = false;
      state.players[myIndex].leader = true;
    },
    startGame: state => {
      state.gameActive = true;
    }
    // increment: state => {
    //   // Redux Toolkit allows us to write "mutating" logic in reducers. It
    //   // doesn't actually mutate the state because it uses the immer library,
    //   // which detects changes to a "draft state" and produces a brand new
    //   // immutable state based off those changes
    //   state.value += 1;
    // },
    // decrement: state => {
    //   state.value -= 1;
    // },
    // incrementByAmount: (state, action) => {
    //   state.value += action.payload;
    // },
  },
});

export const {
  addNewRoom,
  updateNameAndTeam,
  setMeLeader,
  startGame,
} = slice.actions;

// The function below is called a thunk and allows us to perform async logic. It
// can be dispatched like a regular action: `dispatch(incrementAsync(10))`. This
// will call the thunk with the `dispatch` function as the first argument. Async
// code can then be executed and other actions can be dispatched
// export const incrementAsync = amount => dispatch => {
//   setTimeout(() => {
//     dispatch(incrementByAmount(amount));
//   }, 1000);
// };

// export const createRoom = roomName => dispatch => {
//   Link
// }

// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state) => state.counter.value)`
// export const selectCount = state => state.counter.value;

export const selectRoomName = state => state.game.roomName;
export const selectMyName = state => state.game.myName;
export const selectMyTeam = state => state.game.myTeam;
export const selectIsGameActive = state => state.game.gameActive;
export const selectRedTeam = state =>
  state.game.players.filter(player => player.team === 'red');
export const selectBlueTeam = state =>
  state.game.players.filter(player => player.team === 'blue');
export const selectTeamLeaders = state =>
  state.game.players.filter(player => player.leader);

export default slice.reducer;
