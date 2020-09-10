let movieName = "Batman";

const images = [
  {
    albumId: 1,
    id: 1,
    title: "accusamus beatae ad facilis cum similique qui sunt",
    url:
      "https://images.unsplash.com/photo-1504457047772-27faf1c00561?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1417&q=80",
    thumbnailUrl: "https://via.placeholder.com/150/92c952",
  },
  {
    albumId: 1,
    id: 2,
    title: "reprehenderit est deserunt velit ipsam",
    url:
      "https://images.unsplash.com/photo-1504457047772-27faf1c00561?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1417&q=80",
    thumbnailUrl: "https://via.placeholder.com/150/771796",
  },
  {
    albumId: 1,
    id: 3,
    title: "officia porro iure quia iusto qui ipsa ut modi",
    url:
      "https://images.unsplash.com/photo-1504457047772-27faf1c00561?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1417&q=80",
    thumbnailUrl: "https://via.placeholder.com/150/24f355",
  },
  {
    albumId: 1,
    id: 4,
    title: "culpa odio esse rerum omnis laboriosam voluptate repudiandae",
    url:
      "https://images.unsplash.com/photo-1504457047772-27faf1c00561?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1417&q=80",
    thumbnailUrl: "https://via.placeholder.com/150/d32776",
  },
  {
    albumId: 1,
    id: 5,
    title: "natus nisi omnis corporis facere molestiae rerum in",
    url:
      "https://images.unsplash.com/photo-1504457047772-27faf1c00561?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1417&q=80",
    thumbnailUrl: "https://via.placeholder.com/150/f66b97",
  },
];

const moviesObj = [];

const users = [];

// fetch users from API
fetch("https://jsonplaceholder.typicode.com/users")
  .then((response) => response.json())
  .then((data) => users.push(data));

// returns images after 2 seconds
export const getImages = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(images);
      reject("No images");
    }, 50);
  });
};

// returns images after 2 seconds
export const getUsers = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(users);
      reject([]);
    }, 50);
  });
};

// returns movies
export const getMovies = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(moviesObj);
      reject([]);
    }, 50);
  });
};
