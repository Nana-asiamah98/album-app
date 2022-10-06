# Trade Offs And Assumptions

### Searching for An Photo Or Album

- Trade-Off : This portion was perplexing. I intended the user to search for all photographs in the collection of albums displayed, however it was perplexing. I had to first assess how long it would take to collect all of the photos, store them in a localStorage, and then retrieve them by just retrieving from the localStorage. I thought about the User's experience. For example, when a user looks for and selects a photo, he should be able to see the photo's Album.
- Assumptions : Based on my research, I proposed adding two search fields. One will be on the Album Page, the other on the Photos Page. When you visit your Album, you may search for it. The same is true for the Photos page.

### Thumbnails for Photos and Album

- Trade Off : On the Album page, I saw that the endpoint did not give an endpoint for displaying an album thumbnail. It was described in the images endpoint, so it was simple to implement.
- Assumptions : So a Third Party API (https://ui-avatar.com/) was used to produce a thumbnail based on the letter A, which stands for Album, and a number, which represents the album number.

### Structuring Of Photos and Album

- Trade-Off : Is it necessary to paginate? When I began designing these pages, I had to make a difficult decision. Would the user like to navigate through the collection of albums or photos, or would he/she prefer it to be paginated?
- Assuptions : I left the page scrollable so that the user may examine the set of Albums and Photos without having to navigate to the next or previous page.
