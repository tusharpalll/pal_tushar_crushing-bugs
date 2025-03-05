
// -----------------------------
// Variables
// -----------------------------
let theThumbnails = document.querySelectorAll('#buttonHolder img'),

    gameBoard = document.querySelector('.puzzle-board'),
    pzlPieces = document.querySelectorAll('.puzzle-pieces img'),
    dropZones = document.querySelectorAll('.drop-zone'),
    puzzleContainer = document.querySelector('.puzzle-pieces');

    // -----------------------------
// Functions
// -----------------------------

function changeImageSet() {
    console.log('changing PuZzle Image Set');

    gameBoard.style.backgroundImage = `url(images/backGround${this.dataset.bgref}.jpg)`;
}

function allowDrag(event) {
    console.log('started dragging an image');

    // adds the ID of the element being dragged to the data transfer object
    // as 'draggedEl', so we can get it later
    event.dataTransfer.setData('draggedEl', this.id);
}

function allowDragOver(event) {
    event.preventDefault();
    console.log('dragging over a drop zone ');
}
 
function allowDrop(event) {
    event.preventDefault();

 //-------
 // bug 1-Dropzone is able to take a lot of pieces at a time
 //-------
 // now only one piece can be dropped at a time

    if (this.children.length > 0) {
        console.log('Drop zone already occupied.');
        return;
    }

    // gets the dragged element's ID from the data transfer object (using 'draggedEl')
    let droppedElId = event.dataTransfer.getData('draggedEl');

    // get the ACTUAL dragged element, using the ID
    let droppedEl = document.querySelector(`#${droppedElId}`);

    // append the dragged element to the drop zone
    this.appendChild(droppedEl);
}

// event listeners
theThumbnails.forEach(thumbnail => thumbnail.addEventListener('click', changeImageSet));
pzlPieces.forEach(piece => piece.addEventListener('dragstart', allowDrag));

dropZones.forEach(zone => {
    zone.addEventListener('dragover', allowDragOver);
    zone.addEventListener('drop', allowDrop);
});

