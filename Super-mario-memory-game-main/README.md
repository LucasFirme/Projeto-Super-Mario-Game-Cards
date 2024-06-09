# Super-mario-memory-game
https://mina-sa.github.io/Super-mario-memory-game/
My first sleepless night in my childhood was because of super mario bros. &lt;3 This is a simple memory game which flips the cards, looking for a match. 

HTML structure -> div .game hold div .card -> that holds 2 images with diffrent classes. One is the front and the other the back face because there are on top of each other.

CSS -> laying these 2 images on top of each other while one card is facing the backface (180deg turned). Both images are hidden on the backface.


JS flip -> will select the card and flip the clicked one. Because we flip on the back it gets hidden and the other shows up.

JS match -> will tap into the HTML attributes to look for a match. If they don't match - they get flipped back after 1.5s. If they match they can't get clicked again for a flip.

JS lockboard -> in order to not crash the logic we lock the board after we clicked the 1. card and unlock it after clicking the 2. card.

JS same card because of double click -> because they match with the same attribute the one card could just get clicked ones which is not our goul to win this game. We check if the 1. card is equal to the firstCard and return if positive.


In the end we use math.random to reorder the positions of our cards.
