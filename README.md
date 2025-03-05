# Crushing Bugs - Drag and Drop Puzzle Game

## Overview
This project is a drag-and-drop puzzle game where players arrange puzzle pieces in the correct order. Several bugs were identified and fixed to improve functionality and user experience.

## Bug Fixes

### 1. Prevent Multiple Pieces in One Drop Zone
**Issue:** Players could drop multiple pieces into the same drop zone.  
**Fix:** Added a check in the JavaScript `allowDrop()` function to prevent dropping if a zone is already occupied.

### 2. Reset Pieces on Choosing a New Puzzle
**Issue:** When switching puzzles, previously placed pieces remained in the drop zones.  
**Fix:** Modified `changeImageSet()` function to move all pieces back to the `.puzzle-pieces` container before switching puzzles.

### 3. Pieces Disappear When Changing Puzzle
**Issue:** Pieces were not updating correctly when switching puzzles.  
**Fix:** Updated `changeImageSet()` function to properly set the `src` attribute of each puzzle piece to match the selected puzzle.

### 4. Allow Returning Pieces to the Original Area
**Issue:** Once a piece was placed in a drop zone, it could not be moved back to the original puzzle area.  
**Fix:** Made `.puzzle-pieces` a valid drop zone by adding `dragover` and `drop` event listeners.

### 5. Puzzle Piece Image Not Covering Drop Zone
**Issue:** Puzzle piece images did not fully cover the drop zones, leaving gaps.  
**Fix:** Updated CSS to ensure images use `width: 100%`, `height: 100%`, and `object-fit: cover`.

## Installation and Setup

1. Clone the repository:
   ```sh
   git clone https://github.com/your-repo-name.git

