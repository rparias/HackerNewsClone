export default function Story(story) {
  return `
  <div class="story">
    <div class="story-number">
      <span class="number">${story.index || ''}</span>
      <img src="https://news.ycombinator.com/grayarrow.gif" alt="upvote">
    </div>
    <div class="story-text">
      <div class="first-row">
        <a href="${story.url}">${story.title}</a>
        <span class="url">(${story.domain})</span>
      </div>
      <div class="second-row">
        <span>${story.points} points by ${story.user} ${story.time_ago}</span>
        <span>${story.comments_count} comments</span>
        <span class="favorite">
            <img class="heart" src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d0/Heart_font_awesome.svg/32px-Heart_font_awesome.svg.png" alt="favorites">
            Add To Favorites
          </span>
        </div>
    </div>
  </div>
  `;
}
