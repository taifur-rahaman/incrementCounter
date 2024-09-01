const followers = document.querySelectorAll(".followers");

followers.forEach((follower) => {
  follower.innerText = "0";

  const updateFollower = () => {
    const target = +follower.getAttribute("data-target");
    const c = +follower.innerText;

    const increment = target / 200;

    if (c < target) {
      follower.innerText = Math.ceil(c + increment);
      setTimeout(updateFollower, 10);
    } else {
      follower.innerText = target;
    }
  };

  updateFollower();
});
