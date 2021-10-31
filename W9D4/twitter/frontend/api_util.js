export const APIUtil = {
  followUser: (id) => {
    return $.ajax({
      type: 'POST',
      url: `${id}/follow`,
      dataType: 'json'
    });
  },

  unfollowUser: (id) => {
    return $.ajax({
      type: 'DELETE',
      url:`${id}/follow`,
      dataType:'json'
    });
  },

  searchUsers: (name) => {
    return $.ajax({
      type: 'GET',
      url: 'search',
      dataType: "json",
      data: { query: name }
    });
  },

  makeTweet: (data) => {
    return $.ajax({
      type: "POST",
      url: '/tweets',
      dataType: 'json',
      data: data
    })
  }
}