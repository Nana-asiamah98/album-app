# Trade Offs And Assumptions

### Searching for An Photo Or Album

- Trade-Off : It was puzzling with this section. I wanted the user to search for all images in the presented set of albums but it was confusing. First I had to consider the time it would take to fetch all the images and store them in a localStorage and access them by just fetching from the localStorage. I considered the User's experience. For instance, when a User searches for a photo and select a photo, he should be able to know the Album of the photo.
- Assumptions : From my analysis, I considered creating two search fields. One will be at the Album Page and the other will be at the Photos Page. You can serach for your album when you visit your Album. The same applies to the Photos page.

### Thumbnails for Photos and Album

- Trade Off : In the Album page, I realized the endpoint didn't provide an endpoint to display a thumbnail for an album. The photos endpoint had it defined so it was easy to implement.
- Assumptions : So included a Third Party API(https://ui-avatar.com/) to generate a thumbnail based on the letter A; standing for an Album and a number; signifying the album number;

### Structuring Of Photos and Album

- Trade-Off : Paginated or not?? This was a hard decision to select when I was designing these pages. Would the User love to scroll through the set of albums or photo or he/she wants it paginated.
- Assuptions : I left the page to have a scrollable such that the user can view the set of Albums and Photos without any hesitation of either a next or previous page.
