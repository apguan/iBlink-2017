import ActionType from './actionType';

export function toggleBookmark() {
  return {
    type: ActionType.ToggleBookmark
  };
}

export function addBookmark(slideIndex, userId, slideId) {
  console.log('addBookmark received slideIndex', slideIndex);
  fetch('/audience_presentation/add_bookmark', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      userId,
      slideId
    })
  })
  .then(() => {
    console.log('Slide ', slideIndex, ' is successfully bookmarked.');
  })
  .catch((error) => {
    console.error(error);
  });
  return {
    type: ActionType.AddBookmark,
    slideIndex
  };
}

export function removeBookmark(slideIndex, userId, slideId) {
  fetch('/audience_presentation/remove_bookmark', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      userId,
      slideId
    })
  })
  .then(() => {
    console.log('Slide ', slideIndex, ' is successfully removed.');
  })
  .catch((error) => {
    console.error(error);
  });
  return {
    type: ActionType.RemoveBookmark,
    slideIndex
  };
}

export function changeBookmarkButtonColor(bookmarkButtonColor) {
  return {
    type: ActionType.ChangeBookmarkButtonColor,
    bookmarkButtonColor
  };
}

export function getCurrentAudienceSlide(currentAudienceSlide) {
  return {
    type: ActionType.GetCurrentAudienceSlide,
    currentAudienceSlide
  };
}
