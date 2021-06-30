const friendsComment = document.querySelectorAll('.post .add-comment');

function toggleCommentSection(toggleAss, comment) {
  comment.lastElementChild.classList.toggleAss('valid');
}

friendsComment.forEach((comment) => {
  comment.addEventListener('input', () => {
    comment.firstElementChild.lastElementChild.value?.length > 0
      ? comment.lastElementChild.classList.add('valid')
      : comment.lastElementChild.classList.remove('valid');
  });
});
