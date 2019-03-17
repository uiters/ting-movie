const initialState = [
  { id: 1, name: 'Captain Marvel' },
  { id: 2, name: 'Wonder Park' },
  { id: 3, name: 'Friendzone' }
];

const movies = (state = initialState, action) => {
  switch (action.type) {
    default:
      return [...state];
  }
};

export default movies;
